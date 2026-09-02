import ShinyText from "./ShinyText";
import Threads from "./Threads";
import { useTheme } from "../theme/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="hero-section relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Threads
          color={isLight ? [0.15, 0.39, 0.92] : [0.37, 0.65, 0.98]}
          amplitude={1}
          distance={0.25}
          enableMouseInteraction
        />
      </div>
      <div className="hero-threads-overlay absolute inset-0 z-[1] bg-gradient-to-b from-gray-950/40 via-transparent to-gray-950/80 pointer-events-none" />

      <div className="space-y-8 max-w-4xl relative z-10">
        <div className="hero-badge inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium backdrop-blur-md">
          ✨ Welcome to my portfolio
        </div>

        <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight">
          Hi, I&apos;m{" "}
          <ShinyText
            text="Chandan Chakraborty"
            className="hero-name"
            color={isLight ? "#2563eb" : "#60a5fa"}
            shineColor={isLight ? "#ffffff" : "#e0f2fe"}
            speed={3}
            spread={120}
            pauseOnHover
          />
        </h1>

        <p className="hero-subtitle text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Frontend Developer crafting beautiful, scalable web experiences with
          <span className="hero-subtitle-accent text-blue-400 font-semibold">
            {" "}React, Angular & TypeScript
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
          <a
            href="#projects"
            className="btn-keep-white px-8 py-4 bg-gradient-to-r text-white from-blue-600 to-blue-700 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            🚀 View Projects
          </a>

          <a
            href="#contact"
            className="hero-btn-secondary px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            📩 Contact Me
          </a>
        </div>
      </div>

      <div className="mt-16 relative z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-blue-400 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
