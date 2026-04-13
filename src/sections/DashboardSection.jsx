import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: "Inventory Turnover", short: "INV", value: 87, color: "#62e0ff" },
  { label: "On-Time Delivery", short: "OTD", value: 94, color: "#52aeff" },
  { label: "OEE Rate", short: "OEE", value: 78, color: "#9b6dff" },
  { label: "Order Fulfillment", short: "OFL", value: 96, color: "#45dec4" },
  { label: "Defect Reduction", short: "DFR", value: 65, color: "#fd5c79" },
];

const kpis = [
  { value: "23%", label: "Cost Reduction Achieved", icon: "📉", color: "#62e0ff" },
  { value: "$2.4M", label: "Annual Savings Generated", icon: "💰", color: "#45dec4" },
  { value: "40+", label: "Projects Delivered", icon: "✅", color: "#52aeff" },
  { value: "98%", label: "On-Time Delivery Rate", icon: "🚚", color: "#9b6dff" },
];

const supplyChainNodes = [
  { label: "Supplier", icon: "📦", color: "#62e0ff" },
  { label: "Manufacturing", icon: "⚙️", color: "#52aeff" },
  { label: "Warehouse", icon: "🏭", color: "#9b6dff" },
  { label: "Distribution", icon: "🚚", color: "#45dec4" },
  { label: "Customer", icon: "👤", color: "#fd5c79" },
];

const DashboardSection = () => {
  const sectionRef = useRef(null);
  const barsRef = useRef([]);

  useGSAP(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return;
      const targetHeight = bar.dataset.height;
      gsap.fromTo(
        bar,
        { height: 0 },
        {
          height: `${targetHeight}%`,
          duration: 1.4,
          ease: "power3.out",
          delay: i * 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    });

    gsap.fromTo(
      ".sc-node",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sc-flow",
          start: "top 78%",
        },
      }
    );

    gsap.fromTo(
      ".sc-connector",
      { opacity: 0, scaleX: 0 },
      {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "left",
        stagger: 0.15,
        duration: 0.5,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sc-flow",
          start: "top 78%",
        },
      }
    );

    gsap.fromTo(
      ".kpi-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".kpi-grid",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="dashboard"
      className="section-padding flex-center"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Operations Analytics Dashboard"
          sub="📊 Data-Driven Performance"
        />

        {/* Supply Chain Flow */}
        <div className="sc-flow mt-16 mb-4">
          <p className="text-center text-white-50 mb-10 tracking-widest uppercase text-xs">
            End-to-End Supply Chain Visibility
          </p>
          <div className="flex items-center justify-center flex-wrap gap-0">
            {supplyChainNodes.map((node, i) => (
              <div key={node.label} className="flex items-center">
                <div className="sc-node flex flex-col items-center gap-3">
                  <div
                    className="w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-xl md:text-3xl border-2 transition-all duration-300 hover:scale-110 cursor-default"
                    style={{
                      borderColor: node.color,
                      backgroundColor: `${node.color}18`,
                      boxShadow: `0 0 24px ${node.color}35`,
                    }}
                  >
                    {node.icon}
                  </div>
                  <span
                    className="text-xs md:text-sm font-semibold tracking-wide"
                    style={{ color: node.color }}
                  >
                    {node.label}
                  </span>
                </div>

                {i < supplyChainNodes.length - 1 && (
                  <div className="sc-connector flex items-center mx-1 md:mx-3 pb-6">
                    <div className="sc-flow-line h-px w-8 md:w-14 lg:w-20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
                      <div className="sc-flow-dot" />
                    </div>
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      className="opacity-40"
                    >
                      <path
                        d="M0 0L8 6L0 12"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart + KPI Grid */}
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 mt-14">
          {/* Animated Bar Chart */}
          <div className="card-border rounded-2xl p-6 md:p-8">
            <h3 className="text-white font-semibold text-xl mb-1">
              Key Performance Indicators
            </h3>
            <p className="text-white-50 text-sm mb-8">
              Current operational metrics — targets at 100%
            </p>
            <div className="flex items-end gap-3 md:gap-5 h-52 md:h-64">
              {metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className="flex flex-col items-center flex-1 gap-2 h-full"
                >
                  <div className="flex-1 w-full flex flex-col items-center justify-end gap-1">
                    <span
                      className="text-xs font-bold"
                      style={{ color: metric.color }}
                    >
                      {metric.value}%
                    </span>
                    <div
                      ref={(el) => el && (barsRef.current[i] = el)}
                      data-height={metric.value}
                      className="w-full rounded-t-lg transition-all"
                      style={{
                        height: 0,
                        background: `linear-gradient(180deg, ${metric.color} 0%, ${metric.color}40 100%)`,
                        boxShadow: `0 0 18px ${metric.color}55`,
                      }}
                    />
                  </div>
                  <span className="text-white-50 text-xs font-semibold">
                    {metric.short}
                  </span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {metrics.map((m) => (
                <div key={m.label} className="flex items-center gap-1.5">
                  <div
                    className="size-2 rounded-full"
                    style={{ backgroundColor: m.color }}
                  />
                  <span className="text-white-50 text-xs">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* KPI Tiles */}
          <div className="kpi-grid grid grid-cols-2 gap-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="kpi-card card-border rounded-2xl p-5 md:p-6 flex flex-col gap-3 hover:scale-[1.03] transition-all duration-300 cursor-default"
                style={{
                  boxShadow: `0 0 0 0 ${kpi.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 28px ${kpi.color}30`;
                  e.currentTarget.style.borderColor = `${kpi.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${kpi.color}25` }}
                >
                  {kpi.icon}
                </div>
                <div
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: kpi.color }}
                >
                  {kpi.value}
                </div>
                <span className="text-white-50 text-sm leading-tight">
                  {kpi.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
