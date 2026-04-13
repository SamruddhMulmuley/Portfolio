import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { leadership } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Leadership = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".leadership-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: "#leadership", start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="leadership" className="section-padding flex-center">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Leadership & Extracurriculars"
          sub="🏆 Beyond the Classroom"
        />

        <div className="leadership-grid mt-14">
          {leadership.map(({ role, org, icon, color, desc }) => (
            <div
              key={org}
              className="leadership-card card-border rounded-2xl p-7 flex flex-col gap-4 group hover:scale-[1.02] transition-all duration-300 cursor-default"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}50`;
                e.currentTarget.style.boxShadow = `0 0 28px ${color}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {/* Icon + org */}
              <div className="flex items-center gap-4">
                <div
                  className="size-14 rounded-2xl flex items-center justify-center text-2xl flex-none"
                  style={{
                    backgroundColor: `${color}18`,
                    border: `1.5px solid ${color}40`,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-base leading-snug">
                    {org}
                  </p>
                  <p
                    className="text-sm font-medium mt-0.5"
                    style={{ color }}
                  >
                    {role}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full opacity-30"
                style={{ backgroundColor: color }}
              />

              {/* Description */}
              <p className="text-white-50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
