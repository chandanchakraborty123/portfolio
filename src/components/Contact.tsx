const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Interested in working together? I'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          <a href="mailto:chakrabortychandan61@gmail.com" className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 text-center hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2 group-hover:text-blue-400 transition-colors">Email</h3>
              <p className="text-blue-400 font-medium hover:text-cyan-400 transition-colors">chakrabortychandan61@gmail.com</p>
            </div>
          </a>
          <a href="tel:+917477590619" className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 text-center hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2 group-hover:text-blue-400 transition-colors">Phone</h3>
              <p className="text-blue-400 font-medium hover:text-cyan-400 transition-colors">+91 74775 90619</p>
            </div>
          </a>
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 text-center hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2 group-hover:text-blue-400 transition-colors">Location</h3>
              <p className="text-blue-400 font-medium">Kolkata, India | Howrah, India</p>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/chandan-chakraborty-9962b3215/" target="_blank" className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 text-center hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2 group-hover:text-blue-400 transition-colors">LinkedIn</h3>
              <p className="text-blue-400 font-medium hover:text-cyan-400 transition-colors">LinkedIn Profile</p>
            </div>
          </a>
        </div>

        <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm">
          <p className="text-gray-300 text-lg">
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

      </div>
    </section>
  )
}

export default Contact