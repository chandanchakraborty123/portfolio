import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import ClickSpark from "./components/ClickSpark";
import { useTheme } from "./theme/ThemeContext";

function Home() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <ClickSpark
      sparkColor={isLight ? "#2563eb" : "#22d3ee"}
      sparkSize={14}
      sparkRadius={22}
      sparkCount={10}
      duration={480}
      extraScale={1.1}
    >
      <div className="page-shell bg-gray-950 text-white scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </div>
    </ClickSpark>
  );
}

export default Home;
