import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import profile from "../assets/profile.jpg";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Frontend Developer",
        "MERN Stack Developer",
        "Data Analyst",
        "Software Engineer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I’m <span style={{ color: "var(--accent)" }}>Vishal</span>
          </h1>

          {/* Typed text */}
          <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6 h-[32px]">
            <span ref={typedRef} />
          </h2>

          <p className="text-gray-400 max-w-xl leading-relaxed mb-10">
            Computer Science undergraduate focused on building scalable,
            user-centric web applications using modern frontend and full-stack
            technologies.
          </p>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/VishalSinghSisodiya_Resume.pdf"
              download
              className="px-6 py-3 rounded-lg font-medium text-black"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/vishal-singh-sisodiya"
              target="_blank"
              className="px-6 py-3 rounded-lg
    border
    border-slate-300 dark:border-white/30
    text-slate-700 dark:text-gray-100
    bg-transparent
    hover:bg-slate-100
    dark:hover:bg-white/10
    transition-colors
  "
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT: PHOTO (OLD STYLE, MODERNIZED) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Accent Glow Ring */}
            <div
              className="absolute -inset-4 rounded-full blur-2xl opacity-30"
              style={{ backgroundColor: "var(--accent)" }}
            />

            {/* Image Frame */}
            <div
              className="relative w-72 h-72 md:w-80 md:h-80
              rounded-full overflow-hidden
              border-2 border-white/20
              bg-[#0b1220]"
            >
              <img
                src={profile}
                alt="Vishal Singh Sisodiya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
