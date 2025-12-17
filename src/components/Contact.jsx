import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Get In <span style={{ color: "var(--accent)" }}>Touch</span>
        </h2>

        <p className="text-gray-400 mb-10">
          I’m currently open to entry-level Software Engineer / Frontend /
          Full-Stack opportunities. Feel free to reach out!
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-8">
          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.2, y: -4 }}
            href="mailto:vishalsinghsisodiya.ofc@gmail.com"
            className="text-2xl text-gray-300"
            style={{ color: "var(--accent)" }}
            aria-label="Email"
          >
            <FiMail />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.2, y: -4 }}
            href="https://www.linkedin.com/in/vishal-singh-sisodiya-0a4631264"
            target="_blank"
            className="text-2xl text-gray-300 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.2, y: -4 }}
            href="https://github.com/vishal-singh-sisodiya"
            target="_blank"
            className="text-2xl text-gray-300 hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>

          {/* LeetCode */}
          <motion.a
            whileHover={{ scale: 1.2, y: -4 }}
            href="https://leetcode.com/u/user5412m/"
            target="_blank"
            className="text-2xl text-gray-300 hover:text-white transition"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
