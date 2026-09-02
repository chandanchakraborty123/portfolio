const awards = [
  {
    title: "Star Performer of the Year",
    company: "NIT Solutions",
    icon: "bi bi-trophy",
    description:
      "Recognized for outstanding contribution, consistent delivery, and impact across key projects.",
    badge: "Annual",
  },
  {
    title: "Performer of the Month",
    company: "Sabio Infotech",
    icon: "bi bi-award",
    description:
      "Awarded for excellence in frontend execution, ownership, and quality of shipped work.",
    badge: "Monthly",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="relative py-[70px] md:py-[70px] px-4 md:px-6 bg-gray-900/50 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-16 right-0 w-[360px] h-[360px] bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">
              Recognition
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Awards
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            I have also been recognized for my work with these achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {awards.map((award) => (
            <article key={award.title} className="award-card group">
              <div className="award-card-inner">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="award-badge">{award.badge}</span>
                  <div className="award-icon">
                    <i className={`${award.icon} text-xl`} />
                  </div>
                </div>

                <h3 className="award-title text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                  {award.title}
                </h3>
                <p className="award-company text-sm font-semibold text-cyan-300 mb-4">{award.company}</p>
                <p className="award-desc text-gray-300 text-sm leading-relaxed mb-6">
                  {award.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="award-tag">Recognition</span>
                  <span className="award-tag">{award.company.split(" ")[0]}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
