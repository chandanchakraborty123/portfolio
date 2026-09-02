import { useEffect, useState } from "react";
import DotField from "./DotField";
import { useTheme } from "../theme/ThemeContext";

const Skills = () => {
  const [skillsData, setSkillsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const data = [
      {
        _id: "69c17697eed96261e15a2f2d",
        category: "Frontend Frameworks",
        skills: ["React.js", "Angular (13–15+)", "Ionic Framework"],
      },
      {
        _id: "69c176d7eed96261e15a2f2e",
        category: "Languages",
        skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
      },
      {
        _id: "69c17772eed96261e15a2f2f",
        category: "Styling & UI",
        skills: ["Tailwind CSS", "Bootstrap", "SCSS", "Responsive Design"],
      },
      {
        _id: "69c177b5eed96261e15a2f30",
        category: "State Management & APIs",
        skills: ["Redux Toolkit", "RxJS", "REST API Integration"],
      },
      {
        _id: "69c17976eed96261e15a2f31",
        category: "Tools & Version Control",
        skills: ["Git & GitHub"],
      },
      {
        _id: "69c179bdeed96261e15a2f32",
        category: "Editor",
        skills: ["Visual Studio Code", "Cursor", "Sublime Text"],
      },
    ];

    setSkillsData(data);
    setLoading(false);
  }, []);

  return (
    <section id="skills" className="relative py-32 px-6 bg-gray-950 overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Loading skills...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105 backdrop-blur-sm"
              >
                <h3 className="text-lg font-bold text-blue-400 mb-4 group-hover:text-cyan-400 transition-colors">
                  {category.category}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill: string, index: number) => (
                    <p
                      key={index}
                      className="text-gray-300 font-medium pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-blue-400 group-hover:text-gray-100 transition-colors mb-1"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
