import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Line } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

/* ────────────────────────────────────────────────────────────
   DATA — Supply chain node positions and colours
──────────────────────────────────────────────────────────── */
const NODES = [
  { id: 0, pos: [-3.2,  0.3,  0.2], color: "#62e0ff" }, // Supplier
  { id: 1, pos: [-1.3,  1.0,  0.5], color: "#52aeff" }, // Manufacturer
  { id: 2, pos: [ 0.2, -0.1, -0.2], color: "#9b6dff" }, // Warehouse
  { id: 3, pos: [ 1.7,  0.8,  0.3], color: "#45dec4" }, // Distribution
  { id: 4, pos: [ 3.2,  0.2,  0.0], color: "#fd5c79" }, // Customer
];

const EDGES = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
];

/* ────────────────────────────────────────────────────────────
   COMPONENT — Single supply-chain node
   Two overlapping boxes: solid inner + spinning wireframe outer
──────────────────────────────────────────────────────────── */
const NetworkNode = ({ position, color }) => {
  const innerRef = useRef();
  const outerRef = useRef();
  const ringRef  = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    innerRef.current.rotation.y = t * 0.55;
    innerRef.current.rotation.x = t * 0.22;
    outerRef.current.rotation.y = -t * 0.35;
    outerRef.current.rotation.z =  t * 0.18;
    ringRef.current.rotation.z  =  t * 0.9;
  });

  return (
    <Float speed={1.4} floatIntensity={0.35} rotationIntensity={0}>
      <group position={position}>
        {/* Solid inner cube */}
        <mesh ref={innerRef}>
          <boxGeometry args={[0.44, 0.44, 0.44]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.65}
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>

        {/* Spinning wireframe cage */}
        <mesh ref={outerRef}>
          <boxGeometry args={[0.62, 0.62, 0.62]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.22} />
        </mesh>

        {/* Thin spinning ring around the node */}
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.55, 0.012, 8, 40]} />
          <meshBasicMaterial color={color} transparent opacity={0.55} />
        </mesh>

        {/* Local point light for bloom glow */}
        <pointLight color={color} intensity={1.8} distance={2.8} decay={2} />
      </group>
    </Float>
  );
};

/* ────────────────────────────────────────────────────────────
   COMPONENT — Animated particles flowing from node A → B
──────────────────────────────────────────────────────────── */
const FlowParticles = ({ start, end, color, count = 4 }) => {
  const meshRefs = useRef([]);
  const startV   = useMemo(() => new THREE.Vector3(...start), [start]);
  const endV     = useMemo(() => new THREE.Vector3(...end),   [end]);

  // Each particle has its own offset so they're spread along the line
  const offsets = useMemo(
    () => Array.from({ length: count }, (_, i) => i / count),
    [count]
  );
  const speeds = useMemo(
    () => Array.from({ length: count }, (_, i) => 0.22 + i * 0.08),
    [count]
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const progress = ((t * speeds[i] + offsets[i]) % 1);
      mesh.position.lerpVectors(startV, endV, progress);
      // Fade out near endpoints
      const edge = Math.min(progress, 1 - progress) * 6;
      mesh.material.opacity = Math.min(edge, 1);
    });
  });

  return (
    <>
      {offsets.map((_, i) => (
        <mesh key={i} ref={(el) => (meshRefs.current[i] = el)}>
          <sphereGeometry args={[0.065, 8, 8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={4}
            transparent
            opacity={1}
          />
        </mesh>
      ))}
    </>
  );
};

/* ────────────────────────────────────────────────────────────
   COMPONENT — Glowing edge (line + particles)
──────────────────────────────────────────────────────────── */
const Edge = ({ fromNode, toNode }) => (
  <>
    <Line
      points={[fromNode.pos, toNode.pos]}
      color={fromNode.color}
      lineWidth={1.2}
      transparent
      opacity={0.3}
    />
    <FlowParticles
      start={fromNode.pos}
      end={toNode.pos}
      color={fromNode.color}
      count={4}
    />
  </>
);

/* ────────────────────────────────────────────────────────────
   COMPONENT — Subtle grid floor (factory / warehouse feel)
──────────────────────────────────────────────────────────── */
const GridFloor = () => (
  <gridHelper args={[18, 18, "#1a1a28", "#1a1a28"]} position={[0, -1.6, 0]} />
);

/* ────────────────────────────────────────────────────────────
   COMPONENT — Sparse ambient star-like particles for depth
──────────────────────────────────────────────────────────── */
const AmbientDust = ({ count = 90 }) => {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 7 - 2;
    }
    return arr;
  }, [count]);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.018;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        color="#52aeff"
        size={0.038}
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
};

/* ────────────────────────────────────────────────────────────
   COMPONENT — Main scene group: gentle sway + float
──────────────────────────────────────────────────────────── */
const SupplyChainNetwork = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Slow horizontal sway so the network shows a little 3-D depth
    groupRef.current.rotation.y = Math.sin(t * 0.18) * 0.28;
    // Very gentle vertical bob
    groupRef.current.position.y = Math.sin(t * 0.45) * 0.07;
  });

  return (
    <group ref={groupRef}>
      {NODES.map((node) => (
        <NetworkNode key={node.id} position={node.pos} color={node.color} />
      ))}
      {EDGES.map(({ from, to }) => (
        <Edge
          key={`${from}-${to}`}
          fromNode={NODES[from]}
          toNode={NODES[to]}
        />
      ))}
      <GridFloor />
    </group>
  );
};

/* ────────────────────────────────────────────────────────────
   EXPORT — Canvas wrapper (drop-in replacement for old Room scene)
──────────────────────────────────────────────────────────── */
const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      camera={{
        position: isMobile ? [0, 1.2, 10] : [0, 1.5, 8.5],
        fov: isMobile ? 55 : 46,
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.15} color="#0d1b2a" />
      <directionalLight position={[6, 6, 4]}  intensity={0.5} color="#ffffff" />
      <directionalLight position={[-6, 3, -4]} intensity={0.3} color="#62e0ff" />

      <Suspense fallback={null}>
        <SupplyChainNetwork />
        <AmbientDust />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 4}
        autoRotate={false}
      />

      {/* Bloom makes all emissive materials glow */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.08}
          luminanceSmoothing={0.85}
          intensity={1.4}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default HeroExperience;
