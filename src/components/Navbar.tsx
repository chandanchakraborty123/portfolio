import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

const resumePdf = new URL("../assets/CHANDAN_CHAKRABORTY_CV.pdf", import.meta.url).href;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navItems = [
    { name: "about", icon: "bi bi-person", label: "About" },
    { name: "skills", icon: "bi bi-code-square", label: "Skills" },
    { name: "projects", icon: "bi bi-folder2-open", label: "Projects" },
    { name: "awards", icon: "bi bi-trophy", label: "Awards" },
    { name: "contact", icon: "bi bi-envelope", label: "Contact" },
  ];

  return (
    <>
      <header className={`navbar-shell ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="navbar-pill">
          <a href="#" className="navbar-logo">
            <span className="navbar-logo-mark">C</span>
            <span className="navbar-logo-text">Chandan.dev</span>
          </a>

          <div className="navbar-desktop">
            <div className="navbar-links">
              {navItems.map((item) => (
                <a key={item.name} href={`#${item.name}`} className="nav-link">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="navbar-actions">
              <ThemeToggle className="navbar-theme-btn" />

              <a href="/login" className="navbar-login-btn">
                Login
              </a>

              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-cta"
              >
                Resume
              </a>
            </div>
          </div>

          <button
            type="button"
            className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="mobile-sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="sidebar-header">
                <div className="sidebar-logo">Chandan.dev</div>
                <button className="sidebar-close" onClick={() => setMenuOpen(false)}>
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              <div className="sidebar-nav">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={`#${item.name}`}
                    className="sidebar-link"
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <i className={`${item.icon} sidebar-icon`}></i>
                    <span>{item.label}</span>
                    <i className="bi bi-chevron-right sidebar-arrow"></i>
                  </motion.a>
                ))}
              </div>

              <div className="sidebar-footer">
                <ThemeToggle className="sidebar-theme-btn" />

                <a
                  href="/login"
                  className="sidebar-login-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </a>

                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-resume-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
