const About = () => {
const skills = [
  { name: "React", icon: "bi bi-braces", level: 80 },
  { name: "Angular", icon: "bi bi-code-square", level: 85 },
  { name: "TypeScript", icon: "bi bi-filetype-js", level: 79 },  // Use JS icon for TS
  { name: "Tailwind CSS", icon: "bi bi-brush", level: 86 },
  { name: "UX Design", icon: "bi bi-pencil-square", level: 60 },
];

  const achievements = [
    { number: "5+", label: "Years Experience", icon: "bi bi-calendar-check" },
    { number: "18+", label: "Projects Completed", icon: "bi bi-check2-circle" },
    // { number: "30+", label: "Happy Clients", icon: "bi bi-emoji-smile" },
    // { number: "12", label: "Tech Stack", icon: "bi bi-stack" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500"></div>
              <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Get to know me</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <i className="bi bi-person-badge text-3xl text-blue-400"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Who I Am</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I am a passionate Frontend Developer with over <span className="text-blue-400 font-semibold relative inline-block group-hover:scale-105 transition-transform">
                  5 years of experience
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </span> building responsive and scalable web applications using React, Angular, and TypeScript.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I have worked on <span className="text-blue-400 font-semibold">AI-powered platforms</span>, <span className="text-blue-400 font-semibold">e-commerce systems</span>, and <span className="text-blue-400 font-semibold">enterprise applications</span>, delivering high-quality solutions that impact user experience.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                My goal is to contribute to <span className="text-blue-400 font-semibold">impactful remote projects</span> while continuously learning and growing in the ever-evolving world of web development.
              </p>
            </div>

            {/* Achievements Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all duration-300 hover:scale-105 group"
                >
                  <i className={`${item.icon} text-3xl text-blue-400 mb-2 inline-block group-hover:scale-110 transition-transform`}></i>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{item.number}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
                  <i className="bi bi-code-slash text-3xl text-cyan-400"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Technical Skills</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <i className={`${skill.icon} text-blue-400 text-lg`}></i>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-700">
                        <div 
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <i className="bi bi-envelope-paper text-3xl text-blue-400 mb-1 inline-block"></i>
              <h4 className="text-lg font-semibold text-white mb-0">Want to work together?</h4>
              <p className="text-gray-400 text-sm mb-2">Let's create something amazing together</p>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                Get in Touch
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;