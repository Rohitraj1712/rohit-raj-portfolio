import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <User size={20} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="glass-card rounded-xl p-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a B.Tech Computer Science student at Lovely Professional University with a minor in Full Stack Web Development. I'm passionate about building modern web applications and learning scalable backend systems.
          </p>
          <p>
            I enjoy working with programming languages like Python, C, C++, and Java, and building web applications using JavaScript, Node.js, HTML, and CSS. I'm continuously improving my development skills and exploring new technologies.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
