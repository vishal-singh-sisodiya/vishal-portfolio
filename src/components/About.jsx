import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <h2 className="text-3xl font-bold mb-10">
            About <span style={{ color: "var(--accent)" }}>Me</span>
          </h2>
        </Reveal>

        {/* Intro */}
        <Reveal>
          <p className="max-w-4xl text-gray-300 leading-relaxed mb-14">
            Computer Science undergraduate with strong skills in{" "}
            <span className="text-gray-200 font-medium">
              MERN Stack, Data Structures & Algorithms (C++), Python, SQL,
            </span>{" "}
            and data analytics. Seeking an entry-level{" "}
            <span className="text-gray-200 font-medium">
              Software Engineer / Full-Stack Developer / Data Analyst
            </span>{" "}
            role to apply development and problem-solving skills in building
            scalable, real-world applications.
          </p>
        </Reveal>

        {/* Vertical Cards */}
        <div className="space-y-10">
          {/* ACHIEVEMENTS */}
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative group rounded-2xl"
            >
              {/* Glow */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-300"
                style={{ backgroundColor: "var(--accent)" }}
              />

              {/* Card */}
              <div
                className="relative bg-[#0e1629] rounded-2xl p-8
                border border-white/15
                group-hover:border-white/30
                transition-all duration-300"
              >
                <h3
                  className="text-xl font-semibold mb-6 tracking-tight"
                  style={{ color: "var(--accent)" }}
                >
                  Achievements
                </h3>

                <ul className="space-y-4 text-gray-300 text-sm">
                  <li className="flex gap-4">
                    <span
                      className="mt-1 text-xs"
                      style={{ color: "var(--accent)" }}
                    >
                      ▸
                    </span>
                    Solved 200+ Data Structures & Algorithms problems on
                    LeetCode
                  </li>
                  <li className="flex gap-4">
                    <span
                      className="mt-1 text-xs"
                      style={{ color: "var(--accent)" }}
                    >
                      ▸
                    </span>
                    Strong foundation in problem-solving using C++
                  </li>
                  <li className="flex gap-4">
                    <span
                      className="mt-1 text-xs"
                      style={{ color: "var(--accent)" }}
                    >
                      ▸
                    </span>
                    Experience working on real-world full-stack and frontend
                    projects
                  </li>
                </ul>
              </div>
            </motion.div>
          </Reveal>

          {/* CERTIFICATIONS */}
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative group rounded-2xl"
            >
              {/* Glow */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-300"
                style={{ backgroundColor: "var(--accent)" }}
              />

              {/* Card */}
              <div
                className="relative bg-[#0e1629] rounded-2xl p-8
                border border-white/15
                group-hover:border-white/30
                transition-all duration-300"
              >
                <h3
                  className="text-xl font-semibold mb-6 tracking-tight"
                  style={{ color: "var(--accent)" }}
                >
                  Certifications
                </h3>

                <ul className="space-y-4 text-gray-300 text-sm">
                  <li className="flex gap-4">
                    <span
                      className="mt-1 text-xs"
                      style={{ color: "var(--accent)" }}
                    >
                      ▸
                    </span>
                    Data Analysis with Python —{" "}
                    <span className="text-gray-200 font-medium">
                      IBM SkillsBuild
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span
                      className="mt-1 text-xs"
                      style={{ color: "var(--accent)" }}
                    >
                      ▸
                    </span>
                    Artificial Intelligence Fundamentals —{" "}
                    <span className="text-gray-200 font-medium">
                      IBM SkillsBuild
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
