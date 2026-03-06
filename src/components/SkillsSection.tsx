import { motion } from "framer-motion";
import { Cpu, Globe, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Cpu,
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "PostgreSQL"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["JavaScript", "Node.js", "HTML", "CSS"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["VS Code", "Antigravity", "Git", "GitHub"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-12"
      >
        <Cpu size={20} className="text-primary" />
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="gradient-text">Skills</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-xl p-6 hover:card-glow transition-shadow duration-300"
          >
            <group.icon size={28} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
