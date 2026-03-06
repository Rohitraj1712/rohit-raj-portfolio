import { motion } from "framer-motion";
import { Trophy, Github, ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Rohit_Raj17/",
    description: "Solving DSA problems and improving algorithmic thinking.",
    color: "from-[hsl(35,90%,55%)] to-[hsl(25,85%,50%)]",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/rohitjais1712",
    description: "Practicing coding challenges and earning skill badges.",
    color: "from-[hsl(140,60%,45%)] to-[hsl(160,70%,40%)]",
  },
  {
    name: "GitHub",
    url: "https://github.com/Rohitraj1712",
    description: "Open source contributions and project repositories.",
    color: "from-[hsl(220,10%,50%)] to-[hsl(220,10%,35%)]",
  },
];

const ProfilesSection = () => (
  <section id="profiles" className="py-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-12"
      >
        <Trophy size={20} className="text-primary" />
        <h2 className="text-3xl md:text-4xl font-bold">
          Coding <span className="gradient-text">Profiles</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-xl p-6 hover:card-glow transition-all duration-300 group block"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                {p.name === "GitHub" ? <Github size={20} className="text-foreground" /> : <Trophy size={20} className="text-foreground" />}
              </div>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
            <p className="text-sm text-muted-foreground">{p.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProfilesSection;
