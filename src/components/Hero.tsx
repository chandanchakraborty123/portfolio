const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
      <div className="space-y-8 max-w-4xl">
        <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium animate-pulse">
          ✨ Welcome to my portfolio
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            Chandan Chakraborty
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Frontend Developer crafting beautiful, scalable web experiences with
          <span className="text-blue-400 font-semibold"> React, Angular & TypeScript</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border-2 border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="mt-16 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero