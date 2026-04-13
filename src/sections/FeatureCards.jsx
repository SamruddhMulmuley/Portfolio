import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { abilities } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const accentColors = ["#62e0ff", "#45dec4", "#9b6dff"];

const FeatureCards = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".feature-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feature-cards-grid",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="w-full padding-x-lg">
      <div className="feature-cards-grid mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, i) => (
          <div
            key={title}
            className="feature-card card-border rounded-xl p-8 flex flex-col gap-4 group hover:scale-[1.02] transition-all duration-300 cursor-default"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${accentColors[i]}60`;
              e.currentTarget.style.boxShadow = `0 0 32px ${accentColors[i]}25`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div
              className="size-14 flex items-center justify-center rounded-full transition-all duration-300"
              style={{ backgroundColor: `${accentColors[i]}20` }}
            >
              <img src={imgPath} alt={title} />
            </div>
            <div
              className="h-px w-10 rounded-full transition-all duration-500 group-hover:w-full"
              style={{ backgroundColor: accentColors[i] }}
            />
            <h3 className="text-white text-2xl font-semibold">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
