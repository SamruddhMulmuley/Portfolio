import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { certifications } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".cert-card",
      { y: 30, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.12,
        duration: 0.7,
        ease: "back.out(1.3)",
        scrollTrigger: { trigger: "#certifications", start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="certifications" className="section-padding flex-center">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications"
          sub="📜 Credentials & Professional Development"
        />

        <div className="cert-grid mt-14">
          {certifications.map(({ title, issuer, icon, color }) => (
            <div
              key={title}
              className="cert-card card-border rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.03] transition-all duration-300 cursor-default"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}50`;
                e.currentTarget.style.boxShadow = `0 0 24px ${color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div
                className="size-14 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${color}18`,
                  border: `1.5px solid ${color}35`,
                }}
              >
                {icon}
              </div>

              <div>
                <h3 className="text-white font-semibold text-base leading-snug">
                  {title}
                </h3>
                <p className="text-white-50 text-sm mt-1">{issuer}</p>
              </div>

              <div
                className="h-0.5 w-8 rounded-full mt-auto"
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
