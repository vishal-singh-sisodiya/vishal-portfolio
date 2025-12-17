import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50"
    >
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-semibold tracking-tight">
            Vishal<span style={{ color: "var(--accent)" }}>.</span>
          </h1>

          {/* Desktop Links */}
          <div className="flex gap-8 text-[15px] font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative transition ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[var(--accent)] transition-all duration-300
                  ${active === link.id ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
