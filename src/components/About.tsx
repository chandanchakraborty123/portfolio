const skills = [
  { name: "React", icon: "bi bi-braces", level: 80 },
  { name: "Angular", icon: "bi bi-code-square", level: 85 },
  { name: "TypeScript", icon: "bi bi-filetype-js", level: 79 },
  { name: "Tailwind CSS", icon: "bi bi-brush", level: 86 },
  { name: "UX Design", icon: "bi bi-pencil-square", level: 30 },
];

const achievements = [
  { number: "5+", label: "Years Experience", icon: "bi bi-calendar-check" },
  { number: "18+", label: "Projects Completed", icon: "bi bi-check2-circle" },
];

const highlights = [
  "React, Angular & TypeScript",
  "AI-powered platforms",
  "E-commerce systems",
  "Enterprise applications",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-[70px] md:py-[70px] px-4 md:px-6 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-0 w-[380px] h-[380px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
              Get to know me
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        {/* Profile banner panel — different from Skills cards */}
        <div className="about-panel overflow-hidden rounded-[1.75rem] mb-8">
          <div className="about-panel-header relative px-6 md:px-10 py-8 md:py-10">
            <div className="absolute inset-0 about-panel-grid opacity-30" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center text-white shadow-lg">
                <i className="bi bi-person-badge text-3xl md:text-4xl" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-white/75 font-semibold mb-2">
                  Profile
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Who I Am</h3>
                <p className="text-white/80 text-sm md:text-base max-w-2xl">
                  Frontend developer focused on scalable UI, clean architecture, and shipping polished products.
                </p>
              </div>
            </div>
          </div>

          <div className="about-panel-body px-6 md:px-10 py-7 md:py-9">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
              <div className="lg:col-span-3 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I am a passionate Frontend Developer with over{" "}
                  <span className="text-blue-400 font-semibold">5 years of experience</span> building
                  responsive and scalable web applications using React, Angular, and TypeScript.
                </p>
                <p>
                  I have worked on{" "}
                  <span className="text-blue-400 font-semibold">AI-powered platforms</span>,{" "}
                  <span className="text-blue-400 font-semibold">e-commerce systems</span>, and{" "}
                  <span className="text-blue-400 font-semibold">enterprise applications</span>, delivering
                  high-quality solutions that impact user experience.
                </p>
                <p>
                  My goal is to contribute to{" "}
                  <span className="text-blue-400 font-semibold">impactful remote projects</span> while
                  continuously learning and growing in the ever-evolving world of web development.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {highlights.map((item) => (
                    <span key={item} className="about-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="about-metrics rounded-2xl p-5 md:p-6 h-full flex flex-col justify-center gap-6">
                  {achievements.map((item, index) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="about-metric-icon w-12 h-12 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
                        <i className={`${item.icon} text-xl`} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white leading-none mb-1">{item.number}</div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                      </div>
                      {index === 0 && <div className="about-metric-divider hidden" />}
                    </div>
                  ))}
                  <a
                    href="#contact"
                    className="btn-keep-white btn-pill mt-2 inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-[1.02] transition-transform"
                  >
                    Get in Touch
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core skills — list style, not skill-grid cards */}
        <div className="about-skills-wrap rounded-[1.75rem] p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-1">Competencies</p>
              <h3 className="text-xl md:text-2xl font-bold text-white">Core Skills</h3>
            </div>
            <p className="text-sm text-gray-500">Primary strengths I use day to day</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {skills.map((skill) => (
              <div key={skill.name} className="about-skill-row">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <i className={`${skill.icon} text-blue-400`} />
                    <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-blue-400 tabular-nums">{skill.level}%</span>
                </div>
                <div className="about-progress overflow-hidden h-1.5 rounded-full">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
