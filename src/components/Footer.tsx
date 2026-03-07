import { Github, Linkedin, Instagram } from "lucide-react";

const links = [
  { icon: Github, href: "https://github.com/Rohitraj1712", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/rohit-raj-734143323", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/ris_rohitt_jaiswal._?igsh=MXIydnY3ajAwYXA0cA==", label: "Instagram" },
];

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rohit Raj. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            title={l.label}
          >
            <l.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
