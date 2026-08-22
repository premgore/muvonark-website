import { Link } from "react-router";
import { Linkedin, Twitter, Instagram, Github, Mail, Phone, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import logo from "../../assets/Muvonark.png";

export function Footer() {
  const footerSections = {
    Products: [
      { label: "WhatsBiz AI", href: "/products/whatsbiz", badge: "Dev" },
      { label: "Nirnaya", href: "/products/nirnaya", badge: "Dev" },
      { label: "AffiSphere", href: "/affisphere" },
      { label: "Selected Builds", href: "/projects" },
      { label: "Product Philosophy", href: "/products" },
    ],
    Solutions: [
      { label: "AI Business Automation", href: "/solutions#automation" },
      { label: "AI-Native Software", href: "/solutions#software" },
      { label: "Agentic AI Systems", href: "/solutions#agents" },
      { label: "Enterprise Operations", href: "/solutions#operations" },
      { label: "Problem Intake Scoping", href: "/contact" },
    ],
    Research: [
      { label: "Artificial Intelligence", href: "/research/artificial-intelligence" },
      { label: "Generative AI", href: "/research/generative-ai" },
      { label: "Agentic AI & Beyond", href: "/research/agentic-ai" },
      { label: "AI Agents", href: "/research/ai-agents" },
      { label: "AI Automation", href: "/research/ai-automation" },
    ],
    Company: [
      { label: "About Muvonark", href: "/about" },
      { label: "Engineering Manifesto", href: "/engineering" },
      { label: "Student Builders", href: "/students" },
      { label: "Careers", href: "/careers" },
      { label: "Contact & Scoping", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-[#04070F] text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Muvonark"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span 
                  className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  MUVONARK
                </span>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                  AI-First Technology Company
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We build intelligent systems that turn complex business operations into simple, automated workflows. Connecting software, data, and intelligent agents.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>India · Remote-First Enterprise Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:team@muvonark.com" className="hover:text-white transition-colors">
                  team@muvonark.com
                </a>
              </div>
            </div>

            {/* Official Social Links */}
            <div className="flex gap-2.5 pt-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/muvonark", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/muvonark", label: "Twitter" },
                { icon: Github, href: "https://github.com/muvonark", label: "GitHub" },
                { icon: Instagram, href: "https://instagram.com/muvonark", label: "Instagram" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 flex items-center justify-center transition-all text-slate-400"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links Columns */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-white/70">
                {title}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group"
                    >
                      <span>{link.label}</span>
                      {"badge" in link && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Muvonark. Turning Business Complexity Into Intelligent Systems.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Privacy Notice</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1 text-slate-400">
              <span>Made in India</span>
              <span>🇮🇳</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
