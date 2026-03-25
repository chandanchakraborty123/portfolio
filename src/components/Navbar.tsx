import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent hover:scale-110 transition-transform"
        >
          Chandan.dev
        </a>

        {/* Desktop Menu */}
        <div className="space-x-8 hidden md:flex items-center">

          {["about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 relative group capitalize"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:scale-105 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 px-6 py-4 space-y-4"
        >
          {["about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-blue-400 transition capitalize"
            >
              {item}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            className="block text-center bg-blue-600 py-2 rounded-lg mt-2"
          >
            Resume
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;