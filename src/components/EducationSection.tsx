import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap size={20} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="glass-card rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundImage: "var(--gradient-primary)" }} />
          <div className="pl-6">
            <p className="text-sm text-primary font-mono mb-2">2024 – 2028 (Expected)</p>
            <h3 className="text-xl font-bold mb-1">B.Tech in Computer Science Engineering</h3>
            <p className="text-muted-foreground mb-1">Minor: Full Stack Web Developer</p>
            <p className="text-muted-foreground">Lovely Professional University, Punjab</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
