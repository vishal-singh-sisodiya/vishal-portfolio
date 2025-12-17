import Reveal from "./Reveal";
import { motion } from "framer-motion";
import wattLogo from "../assets/companies/watt.png";

export default function Experience() {
  return (
    <section id="experience" className="pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <h2 className="text-3xl font-bold mb-12">
            Internship{" "}
            <span style={{ color: "var(--accent)" }}>Experience</span>
          </h2>
        </Reveal>

        <Reveal>
          {/* Perspective wrapper */}
          <div style={{ perspective: "1200px" }}>
            <motion.div
              whileHover={{ y: -6, rotateX: 4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative group rounded-2xl"
            >
              {/* Glow */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-300"
                style={{ backgroundColor: "var(--accent)" }}
              />

              {/* CARD */}
              <div
                className="relative bg-[#0e1629] rounded-2xl overflow-hidden
                border border-white/15
                shadow-[0_20px_40px_rgba(0,0,0,0.45)]
                group-hover:border-white/30
                transition-all duration-300"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
                  {/* LEFT: LOGO COLUMN */}
                  <div className="flex items-center justify-center bg-[#0b1220] p-6">
                    <img
                      src={wattLogo}
                      alt="WATT Incorporate"
                      className="max-h-20 object-contain"
                    />
                  </div>

                  {/* RIGHT: CONTENT */}
                  <div className="p-8">
                    {/* Role */}
                    <h3 className="text-xl font-semibold tracking-tight mb-1">
                      Front-End Developer Intern
                    </h3>

                    {/* Company + Location */}
                    <p className="text-sm text-gray-400 mb-1">
                      <span className="font-medium text-gray-300">
                        WATT Incorporate
                      </span>{" "}
                      · Bhopal
                    </p>

                    {/* Duration */}
                    <p className="text-xs text-gray-500 mb-5">
                      November 2024 – May 2025
                    </p>

                    {/* Points */}
                    <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                      <li className="flex gap-3">
                        <span
                          className="mt-1 text-xs"
                          style={{ color: "var(--accent)" }}
                        >
                          ▸
                        </span>
                        Built responsive UI components for IoT-based
                        applications
                      </li>

                      <li className="flex gap-3">
                        <span
                          className="mt-1 text-xs"
                          style={{ color: "var(--accent)" }}
                        >
                          ▸
                        </span>
                        Integrated Firebase Realtime Database for real-time
                        sensor data visualization
                      </li>

                      <li className="flex gap-3">
                        <span
                          className="mt-1 text-xs"
                          style={{ color: "var(--accent)" }}
                        >
                          ▸
                        </span>
                        Collaborated with cross-functional teams to improve UI
                        performance and overall user experience
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
