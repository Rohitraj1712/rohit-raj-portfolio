import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Code, Brain, Cog, Globe, ShieldCheck, X, ExternalLink } from "lucide-react";

import certIamneo from "@/assets/cert-iamneo.jpg";
import certDsa from "@/assets/cert-dsa.png";
import certCpp from "@/assets/cert-cpp.jpg";
import certReact from "@/assets/cert-react.png";
import certCyber from "@/assets/cert-cybersmart.jpg";

const certificates = [
  {
    title: "Programming Fundamentals",
    org: "iamneo & Lovely Professional University",
    desc: "Completed a 72-hour computer programming course covering programming fundamentals and problem-solving skills.",
    image: certIamneo,
    icon: Code,
  },
  {
    title: "DSA Certification",
    org: "Coding Tantra",
    desc: "Completed a course on data structures and algorithms with a proctored assessment.",
    image: certDsa,
    icon: Brain,
  },
  {
    title: "C++ Programming",
    org: "Infosys Springboard",
    desc: "Learned C++ programming including object-oriented concepts and programming logic.",
    image: certCpp,
    icon: Cog,
  },
  {
    title: "React.js Development",
    org: "Tech Veda",
    desc: "Completed training on React.js focusing on modern frontend development and component-based architecture.",
    image: certReact,
    icon: Globe,
  },
  {
    title: "CyberSmart Internship",
    org: "WNS Cares Foundation",
    desc: "Completed a CSR internship focused on cybersecurity awareness, community outreach, and digital safety education.",
    image: certCyber,
    icon: ShieldCheck,
  },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <Award size={20} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card rounded-xl p-6 flex flex-col cursor-pointer group hover:card-glow transition-shadow duration-300 relative overflow-hidden"
                onClick={() => setSelected(i)}
              >
                {/* Top gradient line on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundImage: "var(--gradient-primary)" }} />

                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon size={24} className="text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary/80 font-mono mb-3">{cert.org}</p>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{cert.desc}</p>

                <button
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(i);
                  }}
                >
                  <ExternalLink size={14} />
                  View Certificate
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={28} />
              </button>
              <img
                src={certificates[selected].image}
                alt={certificates[selected].title}
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
