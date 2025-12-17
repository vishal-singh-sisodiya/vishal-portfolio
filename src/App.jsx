import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThemeSwitcher from "./components/ThemeSwitcher";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

export default function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  return (
    <>
      <Navbar />
      <ThemeSwitcher />
      <Hero />
      <About />
      <Experience />

      <Skills />

      <Projects />

      <Contact />
      <footer className="text-center text-gray-500 text-sm py-6">
        © {new Date().getFullYear()} Vishal Singh Sisodiya. All rights reserved.
      </footer>
    </>
  );
}
