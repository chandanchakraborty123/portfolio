const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-lg z-50 border-b border-gray-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent hover:scale-110 transition-transform">
          Chandan.dev
        </a>

        <div className="space-x-8 hidden md:flex">
          <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar