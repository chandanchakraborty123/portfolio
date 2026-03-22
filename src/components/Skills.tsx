const skillCategories = [
  {
    category: "Frontend Frameworks",
    skills: ["React.js", "Angular (13–15+)"]
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    category: "Styling & UI",
    skills: ["Tailwind CSS", "Bootstrap", "SCSS", "Responsive Design"]
  },
  {
    category: "State Management & APIs",
    skills: ["Redux Toolkit", "RxJS", "REST API Integration"]
  },
  {
    category: "Tools & Version Control",
    skills: ["Git & GitHub"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold text-blue-400 mb-4 group-hover:text-cyan-400 transition-colors">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, index) => (
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
      </div>
    </section>
  )
}

export default Skills