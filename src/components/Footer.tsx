const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/chandan-chakraborty-9962b3215/",
    icon: "bi bi-linkedin",
    label: "LinkedIn",
  },
  {
    href: "mailto:chakrabortychandan61@gmail.com",
    icon: "bi bi-envelope",
    label: "Email",
  },
  {
    href: "tel:+917477590619",
    icon: "bi bi-telephone",
    label: "Phone",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <a href="#" className="site-footer-brand inline-flex items-center gap-2.5 no-underline mb-3">
              <span className="site-footer-mark">C</span>
              <span className="font-semibold text-lg">Chandan.dev</span>
            </a>
            <p className="site-footer-copy leading-relaxed text-sm">
              Frontend developer focused on React, Angular &amp; TypeScript —
              building clean, scalable product experiences.
            </p>
          </div>

          <div>
            <p className="site-footer-label mb-3">Navigate</p>
            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="site-footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="site-footer-label mb-3">Connect</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="site-footer-social"
                >
                  <i className={`${item.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer-bottom mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm site-footer-copy">
            © {year} Chandan Chakraborty. All rights reserved.
          </p>
          <a href="#" className="site-footer-link text-sm inline-flex items-center gap-1.5">
            Back to top
            <i className="bi bi-arrow-up-short text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
