import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

/* ─── Left card: compact executive snapshot ─────────────── */
const CompanyCard = ({ card }) => (
  <div
    className="company-exp-card card-border rounded-2xl p-6 flex flex-col gap-5 h-fit transition-all duration-300 cursor-default"
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${card.logoColor}55`;
      e.currentTarget.style.boxShadow = `0 0 32px ${card.logoColor}20`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "";
      e.currentTarget.style.boxShadow = "";
    }}
  >
    {/* Logo box */}
    <div
      className="company-logo-box"
      style={{
        borderColor: `${card.logoColor}60`,
        backgroundColor: `${card.logoColor}12`,
        boxShadow: `0 0 18px ${card.logoColor}22`,
      }}
    >
      <span className="company-logo-abbr" style={{ color: card.logoColor }}>
        {card.logoAbbr}
      </span>
    </div>

    {/* Company + role */}
    <div>
      <p className="text-white font-bold text-base leading-snug">
        {card.company}
      </p>
      <p className="text-white-50 text-sm mt-1">{card.title}</p>
    </div>

    {/* Divider */}
    <div className="h-px w-full" style={{ backgroundColor: `${card.logoColor}30` }} />

    {/* Impact highlights */}
    <div>
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-3"
        style={{ color: card.logoColor }}
      >
        Impact Highlights
      </p>
      <ul className="flex flex-col gap-2.5">
        {card.impact.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-white-50 text-sm leading-snug"
          >
            <span
              className="mt-[5px] size-1.5 rounded-full flex-none"
              style={{ backgroundColor: card.logoColor }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ─── Main section ───────────────────────────────────────── */
const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: card, start: "top 80%" },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", { scaleY: 1 - self.progress });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: text, start: "top 60%" },
      });
    }, "<");
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Work Experience"
          sub="💼 Industry Roles & Engineering Impact"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">

                {/* LEFT: Compact company card */}
                <div className="xl:w-2/6">
                  <CompanyCard card={card} />
                </div>

                {/* RIGHT: Timeline line + detailed content */}
                <div className="xl:w-4/6">
                  <div className="flex items-start">

                    {/* Vertical timeline line only — no node circle */}
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    {/* Detail content — padded away from the line */}
                    <div className="expText exp-detail relative z-20 pl-8 md:pl-14">
                      {/* Company label */}
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: card.logoColor }}
                      >
                        {card.company}
                      </p>

                      {/* Role title — dominant */}
                      <h2 className="font-bold text-2xl md:text-3xl text-white leading-snug">
                        {card.title}
                      </h2>

                      {/* Date — small and light */}
                      <p className="mt-3 mb-6 text-white-50 text-sm opacity-70">
                        🗓️&nbsp;{card.date}
                      </p>

                      {/* Contributions label */}
                      <p className="text-[#839CB5] text-xs uppercase tracking-widest mb-4">
                        Key Contributions
                      </p>

                      {/* Bullet list — scannable */}
                      <ul className="ms-4 flex flex-col gap-3.5 text-white-50 list-disc marker:text-white-50">
                        {card.responsibilities.map((r, i) => (
                          <li key={i} className="text-[15px] leading-relaxed pl-1">
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
