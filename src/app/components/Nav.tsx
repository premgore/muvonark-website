import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { 
  Menu, X, ChevronDown, Bot, Sparkles, Workflow, 
  Cpu, GraduationCap, Briefcase, Building2, Code2, 
  ArrowRight, ShieldCheck, Database, Layers, Terminal 
} from "lucide-react";
import logo from "../../assets/Muvonark.png";
import { ProblemIntakeModal } from "./ui/ProblemIntakeModal";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [intakeModalOpen, setIntakeModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navProducts = [
    {
      title: "WhatsBiz AI",
      href: "/products/whatsbiz",
      badge: "In Development",
      desc: "Turn everyday business communication into intelligent workflows.",
      icon: Bot,
      color: "text-cyan-400 bg-cyan-500/10"
    },
    {
      title: "Nirnaya",
      href: "/products/nirnaya",
      badge: "In Development",
      desc: "Turn conversations into decisions, actions and organizational intelligence.",
      icon: Sparkles,
      color: "text-blue-400 bg-blue-500/10"
    },
    {
      title: "AffiSphere",
      href: "/affisphere",
      badge: "Ecosystem Platform",
      desc: "Student & startup empowerment affiliate platform.",
      icon: Workflow,
      color: "text-violet-400 bg-violet-500/10"
    }
  ];

  const navSolutions = [
    { title: "AI Business Automation", href: "/solutions#automation", desc: "Automate repetitive operational and communication workflows." },
    { title: "AI-Native Software", href: "/solutions#software", desc: "Applications built with AI deeply woven into product core." },
    { title: "Agentic AI Systems", href: "/solutions#agents", desc: "Multi-step reasoning agents capable of using real tools." },
    { title: "Enterprise Operations", href: "/solutions#operations", desc: "Integrate disparate databases, ERPs, and legacy tools." }
  ];

  const navResearch = [
    { title: "Artificial Intelligence", href: "/research/artificial-intelligence", desc: "Foundational neural architectures and reasoning benchmarks." },
    { title: "Generative AI", href: "/research/generative-ai", desc: "Context synthesis, fine-tuning and enterprise alignment." },
    { title: "Agentic AI", href: "/research/agentic-ai", desc: "Autonomous planning, tool execution and self-correction loops." },
    { title: "AI Agents", href: "/research/ai-agents", desc: "Multi-agent coordination, consensus and state management." },
    { title: "AI Automation", href: "/research/ai-automation", desc: "Deterministic + probabilistic workflow synthesizers." }
  ];

  const navCompany = [
    { title: "About Muvonark", href: "/about", desc: "Why we exist: The enterprise complexity problem & our mission." },
    { title: "Selected Builds", href: "/projects", desc: "Built while learning, built while growing — honest project records." },
    { title: "Careers", href: "/careers", desc: "Build, experiment, own and learn with us." },
    { title: "Contact Us", href: "/contact", desc: "Start with your operational problem, not just code." }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-[#070B14]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src={logo}
                  alt="Muvonark"
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span 
                  className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  MUVONARK
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </span>
                <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase opacity-80">
                  Intelligence for Complex Business
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/products"
                  className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180 text-cyan-400" : "text-slate-500"}`} />
                </Link>

                {activeDropdown === "products" && (
                  <div className="absolute top-full left-0 pt-2 w-[420px]">
                    <div className="glass-panel rounded-2xl p-4 border border-white/15 shadow-2xl bg-[#090E1C]/95 backdrop-blur-2xl">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 mb-2">
                        Featured Intelligent Products
                      </div>
                      <div className="space-y-2">
                        {navProducts.map((p) => {
                          const PIcon = p.icon;
                          return (
                            <Link
                              key={p.title}
                              to={p.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                            >
                              <div className={`p-2 rounded-lg ${p.color} shrink-0 mt-0.5`}>
                                <PIcon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    {p.title}
                                  </span>
                                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                                    {p.badge}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-400 leading-snug mt-1">{p.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10 px-3">
                        <Link 
                          to="/products" 
                          className="flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-cyan-300"
                        >
                          <span>Explore Product Architecture</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/solutions"
                  className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-cyan-400" : "text-slate-500"}`} />
                </Link>

                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-0 pt-2 w-80">
                    <div className="glass-panel rounded-2xl p-4 border border-white/15 shadow-2xl bg-[#090E1C]/95 backdrop-blur-2xl">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 mb-2">
                        Enterprise Solutions
                      </div>
                      <div className="space-y-1">
                        {navSolutions.map((s) => (
                          <Link
                            key={s.title}
                            to={s.href}
                            className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {s.title}
                            </div>
                            <p className="text-xs text-slate-400 leading-snug mt-0.5">{s.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Research Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("research")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/research"
                  className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  <span>Research</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "research" ? "rotate-180 text-cyan-400" : "text-slate-500"}`} />
                </Link>

                {activeDropdown === "research" && (
                  <div className="absolute top-full left-0 pt-2 w-80">
                    <div className="glass-panel rounded-2xl p-4 border border-white/15 shadow-2xl bg-[#090E1C]/95 backdrop-blur-2xl">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 mb-2">
                        Research Frontiers
                      </div>
                      <div className="space-y-1">
                        {navResearch.map((r) => (
                          <Link
                            key={r.title}
                            to={r.href}
                            className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {r.title}
                            </div>
                            <p className="text-xs text-slate-400 leading-snug mt-0.5">{r.desc}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10 px-3">
                        <Link 
                          to="/research" 
                          className="flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-cyan-300"
                        >
                          <span>Explore All Research Topics</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Engineering Link */}
              <Link
                to="/engineering"
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === "/engineering" 
                    ? "text-cyan-400 bg-white/5 font-semibold" 
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Engineering
              </Link>

              {/* Students Link */}
              <Link
                to="/students"
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === "/students" 
                    ? "text-cyan-400 bg-white/5 font-semibold" 
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Students
              </Link>

              {/* Company Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("company")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  <span>Company</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "company" ? "rotate-180 text-cyan-400" : "text-slate-500"}`} />
                </button>

                {activeDropdown === "company" && (
                  <div className="absolute top-full right-0 pt-2 w-72">
                    <div className="glass-panel rounded-2xl p-4 border border-white/15 shadow-2xl bg-[#090E1C]/95 backdrop-blur-2xl">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 mb-2">
                        About Muvonark
                      </div>
                      <div className="space-y-1">
                        {navCompany.map((c) => (
                          <Link
                            key={c.title}
                            to={c.href}
                            className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {c.title}
                            </div>
                            <p className="text-xs text-slate-400 leading-snug mt-0.5">{c.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIntakeModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-lg shadow-blue-500/20"
              >
                Build With Us
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 text-slate-300 hover:text-white border border-white/10"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#070B14]/98 border-t border-white/10 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 px-3 py-1">Products</div>
              {navProducts.map((p) => (
                <Link
                  key={p.title}
                  to={p.href}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-sm font-semibold text-white"
                >
                  <span>{p.title}</span>
                  <span className="text-[10px] font-mono text-cyan-400">{p.badge}</span>
                </Link>
              ))}
            </div>

            <div className="space-y-1 pt-2 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 px-3 py-1">Navigation</div>
              <Link to="/solutions" className="block p-3 rounded-xl hover:bg-white/5 text-sm font-semibold text-slate-200">
                Solutions
              </Link>
              <Link to="/research" className="block p-3 rounded-xl hover:bg-white/5 text-sm font-semibold text-slate-200">
                Research
              </Link>
              <Link to="/engineering" className="block p-3 rounded-xl hover:bg-white/5 text-sm font-semibold text-slate-200">
                Engineering
              </Link>
              <Link to="/students" className="block p-3 rounded-xl hover:bg-white/5 text-sm font-semibold text-slate-200">
                Students
              </Link>
              <Link to="/projects" className="block p-3 rounded-xl hover:bg-white/5 text-sm font-semibold text-slate-200">
                Selected Builds
              </Link>
              <Link to="/about" className="block p-3 rounded-xl hover:bg-white/5 text-sm font-semibold text-slate-200">
                About Us
              </Link>
              <Link to="/careers" className="block p-3 rounded-xl hover:bg-white/5 text-sm font-semibold text-slate-200">
                Careers
              </Link>
              <Link to="/contact" className="block p-3 rounded-xl hover:bg-white/5 text-sm font-semibold text-slate-200">
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setIntakeModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-mono text-xs uppercase font-bold tracking-wider text-center shadow-lg"
              >
                Describe Your Problem →
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Global Problem Intake Wizard Modal */}
      <ProblemIntakeModal
        isOpen={intakeModalOpen}
        onClose={() => setIntakeModalOpen(false)}
      />
    </>
  );
}
