import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectBadge = ({ text, color }) => (
  <span
    className="px-3 py-1 rounded-full text-xs font-semibold border"
    style={{ color, borderColor: `${color}60`, backgroundColor: `${color}15` }}
  >
    {text}
  </span>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Main Project */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src="/images/project1.png"
                alt="Supply Chain Optimization Dashboard"
              />
            </div>
            <div className="text-content">
              <div className="badges">
                <ProjectBadge text="Python" color="#62e0ff" />
                <ProjectBadge text="Power BI" color="#52aeff" />
                <ProjectBadge text="Supply Chain" color="#45dec4" />
              </div>
              <h2>
                AI-Powered Supply Chain Optimization — Reducing Costs by 23%
                Across the Distribution Network
              </h2>
              <p className="text-white-50 md:text-xl">
                Built an end-to-end optimization engine using Python and linear
                programming that dynamically re-routes shipments, balances
                inventory across nodes, and flags supplier risks in real time.
              </p>
            </div>
          </div>

          {/* Secondary Projects */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#1a2535]">
                <img
                  src="/images/project2.png"
                  alt="Lean Manufacturing Analytics Platform"
                />
              </div>
              <div className="mt-3 flex gap-2">
                <ProjectBadge text="Lean" color="#9b6dff" />
                <ProjectBadge text="Six Sigma" color="#52aeff" />
              </div>
              <h2>Lean Manufacturing Analytics & OEE Dashboard</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#1d1a2a]">
                <img
                  src="/images/project3.png"
                  alt="Inventory Forecasting System"
                />
              </div>
              <div className="mt-3 flex gap-2">
                <ProjectBadge text="Forecasting" color="#fd5c79" />
                <ProjectBadge text="ML" color="#45dec4" />
              </div>
              <h2>Demand Forecasting & Inventory Planning System</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
