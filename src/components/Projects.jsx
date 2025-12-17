import Reveal from "./Reveal";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Library Management Website",
    description:
      "A full-stack MERN application for managing books, users, and transactions with admin analytics.",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    demo: "https://turningpointvidisha.vercel.app/",
    source: "https://github.com/nirdeshtiwari432/turningpointvidisha",
    featured: true,
  },
  {
    id: 2,
    title: "Banking Data Analysis",
    description:
      "Data analysis project focused on customer behavior insights using Python, SQL, and Power BI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

    source:
      "https://github.com/vishal-singh-sisodiya/Banking_DataAnalytics_Project",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <h2 className="text-3xl font-bold mb-12">
            Projects <span style={{ color: "var(--accent)" }}>Work</span>
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.12}>
              {/* Perspective wrapper */}
              <div className="relative" style={{ perspective: "1200px" }}>
                <motion.div
                  initial={{ rotateY: 90, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative group rounded-2xl"
                >
                  {/* Glow Layer */}
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-300"
                    style={{ backgroundColor: "var(--accent)" }}
                  />

                  {/* Card */}
                  <div
                    className="relative bg-[#0e1629] rounded-2xl overflow-hidden
                    border border-white/15
                    shadow-[0_20px_40px_rgba(0,0,0,0.45)]
                    group-hover:border-white/30
                    transition-all duration-300"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Image */}
                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover
                        group-hover:scale-105 transition duration-300"
                      />
                    </div>

                   

                      <h3 className="text-lg font-semibold mb-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-5">
                        {project.description}
                      </p>

                      {/* Buttons */}
                      <div className="flex justify-center gap-3">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            className="px-4 py-2 text-sm rounded-lg font-medium text-black"
                            style={{ backgroundColor: "var(--accent)" }}
                          >
                            Demo
                          </a>
                        )}

                        {project.source && (
                          <a
                            href={project.source}
                            target="_blank"
                            className="px-4 py-2 text-sm rounded-lg
      border border-white/20 text-gray-200
      hover:bg-white/10 transition"
                          >
                            Github
                          </a>
                        )}
                      </div>
                    </div>
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
