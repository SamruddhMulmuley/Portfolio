import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const competencies = [
  "Supply Chain Analytics",
  "Process Optimization",
  "Simulation & Modeling",
  "Lean Six Sigma",
  "Operations Research",
  "Inventory Management",
  "Data Analysis (Python, MATLAB)",
  "Facility Planning",
  "Manufacturing Systems",
  "Project Planning",
];

const quickFacts = [
  { label: "Currently", value: "MS Industrial Engineering @ NYU" },
  { label: "Based in", value: "New York City" },
  { label: "Focus", value: "Supply Chain · Manufacturing · Operations" },
  { label: "Background", value: "BTech Mechanical Engineering" },
];

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-content",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: "#about", start: "top 75%" },
      }
    );
    gsap.fromTo(
      ".about-fact",
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-card", start: "top 80%" },
      }
    );
    gsap.fromTo(
      ".competency-tag",
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.04,
        duration: 0.4,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".competencies-grid", start: "top 85%" },
      }
    );
  }, []);

  return (
    <section id="about" className="section-padding flex-center">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="About Me" sub="👤 Professional Profile" />

        <div className="about-grid mt-16">
          {/* Left: Text */}
          <div className="about-content flex flex-col gap-6">
            <p className="about-paragraph">
              I'm an Industrial Engineering graduate student at NYU with
              hands-on experience optimizing manufacturing and supply chain
              systems through data analysis, simulation, and Lean methodologies.
            </p>
            <p className="about-paragraph">
              My work spans supply chain analytics, production system
              optimization, and engineering design — with a focus on identifying
              inefficiencies, reducing variability, and improving operational
              performance. I've built decision-support tools for inventory
              optimization, cost-margin analysis, supplier evaluation, and
              stochastic simulation, enabling data-driven decisions across
              real-world and academic environments.
            </p>
            <p className="about-paragraph">
              With experience across aerospace manufacturing, supply chain
              operations, and cross-functional collaboration, I focus on
              translating analytical insight into practical, scalable solutions
              that improve efficiency and drive measurable impact.
            </p>

            {/* Competencies */}
            <div>
              <p className="text-white-50 text-sm uppercase tracking-widest mb-4">
                Core Competencies
              </p>
              <div className="competencies-grid flex flex-wrap gap-2">
                {competencies.map((c) => (
                  <span key={c} className="competency-tag">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Quick Facts card */}
          <div className="about-card card-border rounded-2xl p-8 flex flex-col gap-6 h-fit">
            <div className="flex items-center gap-3 mb-2">
              <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <p className="font-bold text-white text-lg">Samruddh Mulmuley</p>
                <p className="text-white-50 text-sm">Industrial Engineer</p>
              </div>
            </div>

            <div className="h-px bg-black-50 w-full" />

            <div className="flex flex-col gap-5">
              {quickFacts.map(({ label, value }) => (
                <div key={label} className="about-fact flex flex-col gap-1">
                  <span className="text-white-50 text-xs uppercase tracking-widest">
                    {label}
                  </span>
                  <span className="text-white font-medium text-sm leading-snug">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="h-px bg-black-50 w-full" />

            <div className="flex flex-col gap-2">
              <p className="text-white-50 text-xs uppercase tracking-widest">
                Open To
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Time Roles",
                  "Supply Chain",
                  "Manufacturing Eng.",
                  "Operations",
                  "Process Improvement",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-medium border border-blue-50 text-white-50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
