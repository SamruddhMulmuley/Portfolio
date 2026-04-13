import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { heroTags } from "../constants";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-badge",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        ".hero-name-line",
        { y: 70, opacity: 0, skewX: -3 },
        { y: 0, opacity: 1, skewX: 0, stagger: 0.12, duration: 0.9 },
        "-=0.2"
      )
      .fromTo(
        ".hero-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        ".hero-bio-text",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        ".hero-tag",
        { y: 16, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.07, duration: 0.4 },
        "-=0.3"
      )
      .fromTo(
        ".hero-ctas",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.2"
      );
  });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight * 0.1;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 z-20">
          <div className="flex flex-col gap-5">

            {/* Badge */}
            <div className="hero-badge w-fit">
              <p>🎓 NYU Industrial Engineering</p>
            </div>

            {/* Name */}
            <div className="hero-name overflow-hidden">
              <h1 className="hero-name-line">Samruddh</h1>
              <h1 className="hero-name-line">Mulmuley</h1>
            </div>

            {/* Subheading */}
            <p className="hero-subtitle">
              Designing Intelligent Systems for Supply Chain,
              Manufacturing, and Operations.
            </p>

            {/* Bio */}
            <p className="hero-bio-text">
              Industrial Engineering graduate student at NYU with experience
              in supply chain analytics, manufacturing optimization, simulation,
              and data-driven process improvement.
            </p>

            {/* Tags */}
            <div className="hero-tags">
              {heroTags.map((tag) => (
                <span key={tag} className="hero-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-ctas">
              <button
                onClick={() => scrollTo("projects")}
                className="cta-primary"
              >
                View My Work <span>↓</span>
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="cta-secondary"
              >
                Contact Me <span>→</span>
              </button>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
