import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Download } from "lucide-react";

const titles = ["Web Developer", "Full Stack Engineer", "CS Student", "Problem Solver"];

const useTypingEffect = (strings: string[], typingSpeed = 100, deletingSpeed = 60, pauseTime = 1800) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % strings.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, strings, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const HeroSection = () => {
  const typedText = useTypingEffect(titles);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(160 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 80% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
            <Code2 size={16} className="text-primary" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
            Rohit{" "}
            <span className="gradient-text">Raj</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary font-mono mb-6 h-8 md:h-10">
            {typedText}
            <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
          </p>

          <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-10 leading-relaxed">
            Building modern web applications and scalable backend systems with full stack technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium text-primary-foreground transition-all hover:scale-105"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium border border-border text-foreground hover:bg-secondary transition-all hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={20} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
