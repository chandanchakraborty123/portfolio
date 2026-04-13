import { useEffect, useState } from "react";
// import { getSkills } from "../services/skillsApi";

const Skills = () => {
  const [skillsData, setSkillsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetchSkills();

    let data = [
    {
        "_id": "69c17697eed96261e15a2f2d",
        "category": "Frontend Frameworks",
        "skills": [
            "React.js",
            "Angular (13–15+)"
        ]
    },
    {
        "_id": "69c176d7eed96261e15a2f2e",
        "category": "Languages",
        "skills": [
            "TypeScript",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3"
        ]
    },
    {
        "_id": "69c17772eed96261e15a2f2f",
        "category": "Styling & UI",
        "skills": [
            "Tailwind CSS",
            "Bootstrap",
            "SCSS",
            "Responsive Design"
        ]
    },
    {
        "_id": "69c177b5eed96261e15a2f30",
        "category": "State Management & APIs",
        "skills": [
            "Redux Toolkit",
            "RxJS",
            "REST API Integration"
        ]
    },
    {
        "_id": "69c17976eed96261e15a2f31",
        "category": "Tools & Version Control",
        "skills": [
            "Git & GitHub"
        ]
    }
]


    setSkillsData(data);
    setLoading(false);
  }, []);

  // const fetchSkills = async () => {
  //   try {
  //     const data = await getSkills();
  //     setSkillsData(data);
  //   } catch (err) {
  //     console.error("Error fetching skills:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section id="skills" className="py-32 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Loader */}
        {loading ? (
          <p className="text-center text-gray-400">Loading skills...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105"
              >
                <h3 className="text-lg font-bold text-blue-400 mb-4 group-hover:text-cyan-400 transition-colors">
                  {category.category}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill: string, index: number) => (
                    <p
                      key={index}
                      className="text-gray-300 font-medium pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-blue-400 group-hover:text-gray-100 transition-colors"
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