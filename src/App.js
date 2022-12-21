import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projectz/Projects";
import Footer from "./components/Footer/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="App">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
