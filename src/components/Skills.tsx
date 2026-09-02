import { useEffect, useState } from "react";
import DotField from "./DotField";
import { useTheme } from "../theme/ThemeContext";

type SkillCategory = {
  _id: string;
  category: string;
  skills: string[];
  icon: string;
  accent: string;
};

const Skills = () => {
  const [skillsData, setSkillsData] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const data: SkillCategory[] = [
      {
        _id: "69c17697eed96261e15a2f2d",
        category: "Frontend Frameworks",
        skills: ["React.js", "Angular (13–15+)", "Ionic Framework"],
        icon: "bi bi-layers",
        accent: "from-blue-500 to-cyan-400",
      },
      {
        _id: "69c176d7eed96261e15a2f2e",
        category: "Languages",
        skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
        icon: "bi bi-code-slash",
        accent: "from-blue-500 to-cyan-400",
      },
      {
        _id: "69c17772eed96261e15a2f2f",
        category: "Styling & UI",
        skills: ["Tailwind CSS", "Bootstrap", "SCSS", "Responsive Design","SASS","Material UI"],
        icon: "bi bi-palette",
        accent: "from-blue-500 to-cyan-400",
      },
      {
        _id: "69c177b5eed96261e15a2f30",
        category: "State & APIs",
        skills: ["Redux Toolkit", "RxJS", "REST API Integration"],
        icon: "bi bi-diagram-3",
        accent: "from-blue-500 to-cyan-400",
      },
      {
        _id: "69c17976eed96261e15a2f31",
        category: "Tools & Version Control",
        skills: ["Git & GitHub","Jira","Postman","Canva","Figma"],
        icon: "bi bi-git",
        accent: "from-blue-500 to-cyan-400",
      },
      {
        _id: "69c179bdeed96261e15a2f32",
        category: "Editor",
        skills: ["Visual Studio Code", "Cursor", "Sublime Text"],
        icon: "bi bi-terminal",
        accent: "from-blue-500 to-cyan-400",
      },
    ];

    setSkillsData(data);
    setLoading(false);
  }, []);

  return (
    <section id="skills" className="relative py-[70px] md:py-[70px] px-4 md:px-6 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={2}
          dotSpacing={16}
          cursorRadius={420}
          bulgeStrength={55}
          waveAmplitude={2}
          gradientFrom={
            isLight ? "rgba(37, 99, 235, 0.85)" : "rgba(96, 165, 250, 0.9)"
          }
          gradientTo={
            isLight ? "rgba(8, 145, 178, 0.7)" : "rgba(34, 211, 238, 0.75)"
          }
          glowColor={isLight ? "#93c5fd" : "#1e3a8a"}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
              What I work with
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            A focused toolkit for building fast, accessible, and scalable frontend experiences.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Loading skills...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {skillsData.map((category, idx) => (
              <article
                key={category._id}
                className="skill-card group relative overflow-hidden rounded-3xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className={`pointer-events-none absolute -right-10 -top-10 w-36 h-36 rounded-full bg-gradient-to-br ${category.accent} opacity-25 blur-2xl group-hover:opacity-40 transition-opacity`} />

                <div className="relative p-6 md:p-7">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.accent} flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <i className={`${category.icon} text-xl`} />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-gray-500 tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {category.category}
                  </h3>
                  <p className="text-xs text-gray-500 mb-5">
                    {category.skills.length} skill{category.skills.length > 1 ? "s" : ""}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.accent}`} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
