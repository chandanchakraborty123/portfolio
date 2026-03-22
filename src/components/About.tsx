const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am a passionate Frontend Developer with over <span className="text-blue-400 font-semibold">5 years of experience</span> building responsive and scalable web applications using React, Angular, and TypeScript.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I have worked on <span className="text-blue-400 font-semibold">AI-powered platforms</span>, <span className="text-blue-400 font-semibold">e-commerce systems</span>, and <span className="text-blue-400 font-semibold">enterprise applications</span>, delivering high-quality solutions that impact user experience.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            My goal is to contribute to <span className="text-blue-400 font-semibold">impactful remote projects</span> while continuously learning and growing in the ever-evolving world of web development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About