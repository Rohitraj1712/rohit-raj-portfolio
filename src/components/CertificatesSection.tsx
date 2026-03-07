import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";

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
  },
  {
    title: "DSA Certification",
    org: "Coding Tantra",
    desc: "Completed a course on data structures and algorithms with a proctored assessment.",
    image: certDsa,
  },
  {
    title: "C++ Programming",
    org: "Infosys Springboard",
    desc: "Learned C++ programming including object-oriented concepts and programming logic.",
    image: certCpp,
  },
  {
    title: "React.js Development",
    org: "Tech Veda",
    desc: "Completed training on React.js focusing on modern frontend development and component-based architecture.",
    image: certReact,
  },
  {
    title: "CyberSmart Internship",
    org: "WNS Cares Foundation",
    desc: "Completed a CSR internship focused on cybersecurity awareness, community outreach, and digital safety education.",
    image: certCyber,
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
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="glass-card rounded-xl overflow-hidden cursor-pointer group hover:card-glow transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-primary font-mono mb-2">{cert.org}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
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
                className="absolute -top-10 right-0 text-foreground/70 hover:text-foreground transition-colors"
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
