import { useEffect, useState } from "react";
import StarBorder from "./StarBorder";

type Project = {
  _id: string;
  title: string;
  description: string;
  link: string;
  tech: string[];
  icon: string;
  category: string;
  accent: string;
  image: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data: Project[] = [
      {
        _id: "69bd796847b395724093047f",
        description:
          "AI-powered recruitment and resume builder with modern UI and seamless API integration.",
        icon: "bi bi-robot",
        link: "https://www.talentfitai.com/",
        tech: ["React JS", "TypeScript", "Redux", "REST API"],
        title: "TalentFit AI",
        category: "SaaS Platform",
        accent: "from-blue-700 via-blue-500 to-cyan-400",
        image: "/projects/talentfit-ai.jpg",
      },
      {
        _id: "69bd7a0047b3957240930480",
        description:
          "Official site for Telangana American Telugu Association with Instagram API integration.",
        icon: "bi bi-globe2",
        link: "",
        tech: ["Angular", "RxJS", "Bootstrap"],
        title: "TTA Website",
        category: "Organization Site",
        accent: "from-slate-800 via-blue-700 to-cyan-500",
        image: "/projects/tta-website.jpg",
      },
      {
        _id: "69bd7a5d47b3957240930481",
        description: "Corporate website built with modern UI and responsive design principles.",
        icon: "bi bi-briefcase",
        link: "https://www.sabioinfotech.com/",
        tech: ["HTML", "CSS", "JavaScript"],
        title: "Sabioinfotech",
        category: "Corporate Web",
        accent: "from-cyan-700 via-sky-500 to-blue-400",
        image: "/projects/sabioinfotech.jpg",
      },
      {
        _id: "69bd7a9c47b3957240930482",
        description:
          "Coaching institute platform for NEET and JEE with guidance, materials, and test series.",
        icon: "bi bi-mortarboard",
        link: "https://www.lalittutorials.com/",
        tech: ["HTML", "PHP", "JavaScript", "CSS"],
        title: "Lalit Tutorials",
        category: "Education",
        accent: "from-blue-900 via-indigo-600 to-cyan-400",
        image: "/projects/lalit-tutorials.jpg",
      },
    ];
    setProjects(data);
    setLoading(false);
  }, []);

  return (
    <section id="projects" className="projects-section relative py-[70px] md:py-[70px] px-4 md:px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-0 w-[380px] h-[380px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[320px] h-[320px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-14 md:mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
              Selected work
            </span>
          </div>
          <h2 className="projects-heading text-4xl md:text-5xl font-bold mb-3">
            Featured <span>Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-4" />
          <p className="projects-lead leading-relaxed">
            Products and websites I&apos;ve shipped — clean UI, performance, and real-world impact.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400">No projects found</p>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 items-stretch">
            {projects.map((project, index) => {
              const hasLink = Boolean(project.link);

              const cardInner = (
                <article className="project-feature-card group relative h-[400px] max-h-[400px] flex flex-col">
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-35 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />

                  <span
                    className={`project-play-btn absolute top-4 left-4 z-20 pointer-events-none ${
                      hasLink ? "" : "project-play-btn--muted"
                    }`}
                  >
                    <i className={`bi ${hasLink ? "bi-box-arrow-up-right" : "bi-lock"} text-sm`} />
                  </span>

                  <span className="absolute top-5 right-5 z-20 text-[11px] font-bold tracking-wider text-white/70 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-20 mt-auto p-3.5 md:p-4 w-full">
                    <div className="project-overlay-panel">
                      <p className="project-overlay-cat mb-1.5">{project.category}</p>
                      <h3 className="project-overlay-title mb-2">{project.title}</h3>
                      <p className="project-overlay-desc mb-3">{project.description}</p>

                      <div className="project-overlay-tags mb-3">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="project-overlay-tag">
                            {t}
                          </span>
                        ))}
                      </div>

                      <span className={`project-overlay-cta ${hasLink ? "" : "project-overlay-cta--muted"}`}>
                        {hasLink ? (
                          <>
                            Learn more
                            <i className="bi bi-chevron-right text-[10px]" />
                          </>
                        ) : (
                          "Private / internal"
                        )}
                      </span>
                    </div>
                  </div>
                </article>
              );

              return (
                <StarBorder
                  key={project._id}
                  as={hasLink ? "a" : "div"}
                  className={`project-star h-full ${hasLink ? "project-star--link" : ""}`}
                  color="#38bdf8"
                  speed={`${5 + (index % 3)}s`}
                  thickness={2}
                  {...(hasLink
                    ? {
                        href: project.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": `Open ${project.title}`,
                      }
                    : {})}
                >
                  {cardInner}
                </StarBorder>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
