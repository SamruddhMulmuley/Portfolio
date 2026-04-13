import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ToolChip = ({ tool, color }) => (
  <span
    className="px-2.5 py-0.5 rounded-full text-xs font-medium border"
    style={{
      color: color,
      borderColor: `${color}50`,
      backgroundColor: `${color}12`,
    }}
  >
    {tool}
  </span>
);

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="project-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold w-fit"
                style={{
                  color: project.categoryColor,
                  backgroundColor: `${project.categoryColor}18`,
                  border: `1px solid ${project.categoryColor}40`,
                }}
              >
                {project.category}
              </span>
              {project.context && (
                <span className="text-xs text-white-50 opacity-70">{project.context}</span>
              )}
            </div>
            <h2 className="text-white font-bold text-xl md:text-2xl leading-snug">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white-50 hover:text-white transition-colors text-2xl font-light flex-none mt-1 leading-none"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="h-px bg-black-50 mb-6" />

        {/* Description */}
        <p className="text-white-50 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Points */}
        <div className="mb-6">
          <p className="text-white text-sm font-semibold uppercase tracking-widest mb-3">
            Key Highlights
          </p>
          <ul className="flex flex-col gap-2.5">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-white-50 text-sm">
                <span
                  className="mt-1.5 size-1.5 rounded-full flex-none"
                  style={{ backgroundColor: project.categoryColor }}
                />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div
          className="rounded-xl p-4 mb-6"
          style={{ backgroundColor: `${project.categoryColor}10`, border: `1px solid ${project.categoryColor}25` }}
        >
          <p className="text-white text-sm font-semibold mb-1">Outcome</p>
          <p className="text-white-50 text-sm leading-relaxed">{project.outcome}</p>
        </div>

        {/* Tools */}
        <div>
          <p className="text-white text-sm font-semibold uppercase tracking-widest mb-3">
            Tools & Methods
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <ToolChip key={tool} tool={tool} color={project.categoryColor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onOpen }) => (
  <div
    className="project-card card-border rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group"
    onClick={() => onOpen(project)}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${project.categoryColor}50`;
      e.currentTarget.style.boxShadow = `0 0 28px ${project.categoryColor}18`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "";
      e.currentTarget.style.boxShadow = "";
    }}
  >
    {/* Category + context */}
    <div className="flex items-center gap-2 flex-wrap">
      <span
        className="text-xs font-semibold px-3 py-1 rounded-full w-fit"
        style={{
          color: project.categoryColor,
          backgroundColor: `${project.categoryColor}18`,
          border: `1px solid ${project.categoryColor}35`,
        }}
      >
        {project.category}
      </span>
      {project.context && (
        <span className="text-xs text-white-50 opacity-60">{project.context}</span>
      )}
    </div>

    {/* Title */}
    <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-white transition-colors">
      {project.title}
    </h3>

    {/* Summary */}
    <p className="text-white-50 text-sm leading-relaxed flex-1">{project.summary}</p>

    {/* Tools preview */}
    <div className="flex flex-wrap gap-1.5 mt-auto">
      {project.tools.slice(0, 3).map((tool) => (
        <ToolChip key={tool} tool={tool} color={project.categoryColor} />
      ))}
      {project.tools.length > 3 && (
        <span className="px-2.5 py-0.5 rounded-full text-xs text-white-50 border border-black-50">
          +{project.tools.length - 3}
        </span>
      )}
    </div>

    {/* CTA */}
    <div className="flex items-center gap-1.5 mt-1">
      <span
        className="text-sm font-medium transition-colors"
        style={{ color: project.categoryColor }}
      >
        View Details
      </span>
      <span
        className="text-sm transition-transform group-hover:translate-x-1"
        style={{ color: project.categoryColor }}
      >
        →
      </span>
    </div>
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(() => {
    gsap.fromTo(
      ".project-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: "#projects", start: "top 70%" },
      }
    );
  }, []);

  return (
    <section id="projects" className="section-padding flex-center">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Featured Projects"
          sub="🔬 Analytical Work & Engineering Solutions"
        />
        <p className="text-center text-white-50 mt-4 max-w-2xl mx-auto text-base">
          9 academic and applied projects across supply chain, manufacturing, simulation, and operations.
          Click any card to explore the full scope, methodology, and outcomes.
        </p>

        <div className="projects-grid mt-14">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
