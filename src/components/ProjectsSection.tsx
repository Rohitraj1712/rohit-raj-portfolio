import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink, Bot, Chrome, Star, Clock, BarChart3, Move, Save } from "lucide-react";

const projects = [
  {
    title: "Reel Counter – Productivity Chrome Extension",
    desc: "A Chrome extension that tracks Instagram Reels and YouTube Shorts consumption, helping users manage screen time through daily limits, analytics, and productivity-focused insights.",
    tags: ["JavaScript", "HTML", "CSS", "Chrome API", "Storage API"],
    github: "https://github.com/Rohitraj1712/Reel-counter-extension",
    live: "",
    icon: Chrome,
    featured: true,
    features: [
      { icon: Clock, text: "Daily viewing limits" },
      { icon: BarChart3, text: "Weekly analytics" },
      { icon: Save, text: "Persistent storage" },
      { icon: Move, text: "Draggable floating UI" },
    ],
  },
  {
    title: "SolveBot – AI Math Solver",
    desc: "An AI-powered web application that solves mathematical problems and provides step-by-step explanations for students.",
    tags: ["Python", "Streamlit"],
    github: "https://github.com/Rohitraj1712/Solvebot",
    live: "https://solvebot.streamlit.app",
    icon: Bot,
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

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`glass-card rounded-xl p-6 flex flex-col hover:card-glow transition-shadow duration-300 group cursor-pointer relative overflow-hidden ${p.featured ? "md:col-span-2 border-primary/30" : ""}`}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundImage: "var(--gradient-primary)" }} />
            {p.featured && (
              <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                <Star size={12} className="fill-primary" />
                Featured
              </div>
            )}

            <div className="flex items-center justify-between mb-4">
              <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring" }}>
                {p.icon ? <p.icon size={28} className="text-primary" /> : <FolderGit2 size={28} className="text-primary" />}
              </motion.div>
              <div className={`flex gap-3 text-muted-foreground ${p.featured ? "mr-24" : ""}`}>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 inline-block" onClick={(e) => e.stopPropagation()}>
                  <Github size={18} />
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 inline-block" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground flex-1">{p.desc}</p>

            {p.features && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {p.features.map((f) => (
                  <div key={f.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <f.icon size={14} className="text-primary flex-shrink-0" />
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 flex gap-2 flex-wrap">
              {p.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground font-mono group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>

            {p.featured && (
              <div className="mt-5 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground transition-all hover:scale-105"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  <Github size={14} />
                  View Source Code
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
