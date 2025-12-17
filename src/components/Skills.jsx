import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12">
            Skills &{" "}
            <span
              style={{ color: "var(--accent)" }}
              className="relative after:content-[''] after:block after:h-[2px] after:w-12 after:bg-current after:mt-2"
            >
              Expertise
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Reveal key={skill.id} delay={index * 0.08}>
              <div className="relative" style={{ perspective: "1200px" }}>
                <motion.div
                  initial={{ rotateY: 90, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1, // 👈 STAGGER FIX
                  }}
                  viewport={{ amount: 0.3 }} // 👈 IMPORTANT
                  whileHover={{ scale: 1.05 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative group rounded-2xl"
                >
                  {/* Glow */}
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-300"
                    style={{ backgroundColor: "var(--accent)" }}
                  />

                  {/* Card */}
                  <div
                    className="relative bg-[#0e1629] rounded-2xl p-6
      flex flex-col items-center justify-center gap-4
      border border-white/10
      group-hover:border-white/30
      transition-all duration-300"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.title}
                      className="w-12 h-12"
                    />
                    <h3 className="text-sm font-medium text-gray-200">
                      {skill.title}
                    </h3>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
