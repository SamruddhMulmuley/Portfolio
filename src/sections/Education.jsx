import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { educations } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".edu-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: "#education", start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="education" className="section-padding flex-center">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Education" sub="🎓 Academic Background" />

        <div className="edu-grid mt-14">
          {educations.map(({ school, degree, dates, location, color, icon, courses }) => (
            <div
              key={school}
              className="edu-card card-border rounded-2xl p-8 flex flex-col gap-6 hover:scale-[1.015] transition-all duration-300 cursor-default"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}50`;
                e.currentTarget.style.boxShadow = `0 0 32px ${color}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className="size-16 rounded-2xl flex items-center justify-center text-3xl flex-none"
                  style={{
                    backgroundColor: `${color}18`,
                    border: `1.5px solid ${color}40`,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl leading-snug">
                    {school}
                  </h3>
                  <p className="font-semibold mt-1" style={{ color }}>
                    {degree}
                  </p>
                  <div className="flex items-center gap-3 mt-1 text-white-50 text-sm">
                    <span>🗓️ {dates}</span>
                    <span>·</span>
                    <span>📍 {location}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-black-50" />

              {/* Relevant Coursework */}
              <div>
                <p className="text-white-50 text-xs uppercase tracking-widest mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        color,
                        borderColor: `${color}40`,
                        backgroundColor: `${color}10`,
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
