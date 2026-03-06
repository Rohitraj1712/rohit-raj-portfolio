import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <Mail size={20} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just to say hi!
            </p>

            <div className="space-y-4">
              <a href="tel:+917992206118" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <span>+91 7992206118</span>
              </a>
              <a href="mailto:rohitjais1712@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <span>rohitjais1712@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/rohit-raj-734143323" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-primary-foreground transition-all hover:scale-[1.02]"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
