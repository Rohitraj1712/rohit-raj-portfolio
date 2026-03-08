import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink, Bot } from "lucide-react";

const projects = [
  {
    title: "SolveBot – AI Math Solver",
    desc: "An AI-powered web application that solves mathematical problems and provides step-by-step explanations for students.",
    tags: ["Python", "Streamlit"],
    github: "https://github.com/Rohitraj1712/Solvebot",
    live: "https://solvebot.streamlit.app",
    icon: Bot,
  },
  { title: "Coming Soon", desc: "Exciting project in the works. Stay tuned!", tags: ["React", "Node.js"], github: "#", live: "#" },
  { title: "Coming Soon", desc: "Exciting project in the works. Stay tuned!", tags: ["React", "Node.js"], github: "#", live: "#" },
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
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card rounded-xl p-6 flex flex-col hover:card-glow transition-shadow duration-300 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundImage: "var(--gradient-primary)" }} />

            <div className="flex items-center justify-between mb-4">
              <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring" }}>
                {p.icon ? <p.icon size={28} className="text-primary" /> : <FolderGit2 size={28} className="text-primary" />}
              </motion.div>
              <div className="flex gap-3 text-muted-foreground">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 inline-block" onClick={(e) => e.stopPropagation()}>
                  <Github size={18} />
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 inline-block" onClick={(e) => e.stopPropagation()}>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground flex-1">{p.desc}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {p.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground font-mono group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
