const contactItems = [
  {
    label: "Email",
    value: "chakrabortychandan61@gmail.com",
    href: "mailto:chakrabortychandan61@gmail.com",
    icon: "bi bi-envelope",
    external: false,
  },
  {
    label: "Phone",
    value: "+91 74775 90619",
    href: "tel:+917477590619",
    icon: "bi bi-telephone",
    external: false,
  },
  {
    label: "Location",
    value: "Howrah, India",
    href: null,
    icon: "bi bi-geo-alt",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Chandan Chakraborty",
    href: "https://www.linkedin.com/in/chandan-chakraborty-9962b3215/",
    icon: "bi bi-linkedin",
    external: true,
  },
];



const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0L13.8 10.2L24 12L13.8 13.8L12 24L10.2 13.8L0 12L10.2 10.2L12 0Z" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="contact-section relative py-[70px] md:py-[70px] px-4 md:px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-cyan-500/10 rounded-full blur-3xl" />
        <Sparkle className="absolute top-20 left-[8%] w-4 h-4 text-cyan-400/40" />
        <Sparkle className="absolute top-36 right-[12%] w-3 h-3 text-blue-400/35" />
        <Sparkle className="absolute bottom-28 left-[18%] w-5 h-5 text-blue-500/25" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase">
              Contact Us
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="contact-lead mt-4 max-w-2xl mx-auto leading-relaxed">
            Open to remote opportunities, collaborations, and thoughtful conversations about frontend craft.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — soft accent panel, no heavy border */}
          <div className="lg:col-span-5">
            <div className="contact-panel relative p-7 md:p-9">
              <Sparkle className="absolute -top-2 -right-1 w-4 h-4 text-cyan-400/60" />

              <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-[0.18em] uppercase text-blue-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </div>

              <h3 className="contact-panel-title text-2xl md:text-3xl font-bold mb-4 leading-snug">
                Let&apos;s build something
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  worth shipping.
                </span>
              </h3>

              <p className="contact-panel-desc leading-relaxed mb-8">
                Whether you have a product idea, a role to fill, or just want to say hello — drop a message.
                I usually reply within a day.
              </p>

              <a
                href="mailto:chakrabortychandan61@gmail.com"
                className="btn-keep-white btn-pill inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto mb-2 mt-2"
              >
                <i className="bi bi-send" />
                Send an email
              </a>
            </div>
          </div>

          {/* Right — divider list with ring icons */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/70 to-transparent" />
              <span className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
                Reach me
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-cyan-400/70 to-transparent" />
            </div>

            <ul className="contact-list">
              {contactItems.map((item) => {
                const row = (
                  <div className="contact-row group">
                    <div className="contact-icon-ring" aria-hidden="true">
                      <div className="contact-icon-core">
                        <i className={item.icon} />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 text-left">
                      <p className="contact-row-label">{item.label}</p>
                      <p className="contact-row-value truncate">{item.value}</p>
                    </div>

                    {item.href && (
                      <i className="bi bi-arrow-up-right contact-row-arrow" />
                    )}
                  </div>
                );

                if (item.href) {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        {row}
                      </a>
                    </li>
                  );
                }

                return <li key={item.label}>{row}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
