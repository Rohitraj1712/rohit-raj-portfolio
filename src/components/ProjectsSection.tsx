import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio website built with React and Tailwind CSS to showcase skills and projects.",
  },
  {
    title: "Web Application Project",
    desc: "A full stack web application with user authentication, CRUD operations, and a responsive UI.",
  },
  {
    title: "Backend API Project",
    desc: "A RESTful API built with Node.js and Express, featuring database integration and secure endpoints.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-12"
      >
        <FolderGit2 size={20} className="text-primary" />
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-xl p-6 flex flex-col hover:card-glow transition-shadow duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <FolderGit2 size={28} className="text-primary" />
              <div className="flex gap-3 text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground flex-1">{p.desc}</p>
            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground font-mono">
                React
              </span>
              <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground font-mono">
                Node.js
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
