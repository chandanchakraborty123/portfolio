import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

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

  // Prevent body scroll when menu is open
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
    { name: "contact", icon: "bi bi-envelope", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`navbar-fixed ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="navbar-container">
          {/* Logo */}
          <a href="#" className="navbar-logo">
            Chandan.dev
          </a>

          {/* Desktop Menu */}
          <div className="navbar-desktop">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name}`}
                className="nav-link"
              >
                {item.label}
                <span className="nav-link-underline"></span>
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="navbar-btn"
            >
              <i className="bi bi-file-text me-2"></i>
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
           ☰
            
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
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
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="sidebar-resume-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="bi bi-file-text me-2"></i>
                  Download Resume
                </a>
                
                <div className="sidebar-social">
                  <a href="#" className="social-icon"><i className="bi bi-github"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;