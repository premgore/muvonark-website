import { useState } from "react";
import { Link } from "react-router";
import { 
  Terminal, Server, Cpu, ShieldCheck, Zap, 
  Layers, Database, ArrowRight, CheckCircle2, Code2, Cloud 
} from "lucide-react";
import engineeringImg from "../../assets/ai/engineering.jpg";
import { TechRadar } from "./ui/TechRadar";
import { ProblemIntakeModal } from "./ui/ProblemIntakeModal";

export function EngineeringPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const principles = [
    {
      number: "01",
      title: "Solve the Problem First",
      desc: "We do not write code for the sake of novelty. Every architecture and agent begins with a clear diagnosis of an acute operational bottleneck."
    },
    {
      number: "02",
      title: "AI Must Create Measurable Value",
      desc: "We reject vanity AI wrappers and flashy demos. We only deploy machine intelligence when it tangibly reduces human hours or prevents costly business errors."
    },
    {
      number: "03",
      title: "Automation Should Reduce Complexity",
      desc: "Adding automated systems should make operations easier to understand and run, never introduce brittle, opaque maintenance nightmares."
    },
    {
      number: "04",
      title: "Products Designed Around Users",
      desc: "Software interfaces and autonomous agents must provide intuitive oversight, clean mental models, and clear fallback controls for human operators."
    },
    {
      number: "05",
      title: "Scalable, Hermetic Engineering",
      desc: "We build with end-to-end type safety, deterministic API contracts, containerized sandboxes, and sub-millisecond serialization protocols."
    },
    {
      number: "06",
      title: "Research Must Lead to Useful Systems",
      desc: "Our theoretical explorations in GraphRAG, agent loops, and context compression directly feed into production reliability."
    },
    {
      number: "07",
      title: "Simplicity Beats Unnecessary Complexity",
      desc: "Explicit schemas, clean data models, and minimal dependencies consistently outperform convoluted over-engineered architectures."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Engineering Philosophy & Infrastructure</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How We Think About Technology.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              At Muvonark, engineering is not about following industry hype. It is about building distributed, resilient systems that quietly and reliably power complex enterprise workflows.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl glass-panel">
              <img
                src={engineeringImg}
                alt="Distributed Systems & Cloud Architecture"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 7 Principles */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Core Principles</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Our Engineering Manifesto</h2>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:block">7 Core Standards</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold">{p.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Radar */}
        <div className="space-y-6 pt-8">
          <TechRadar />
        </div>

        {/* Distributed Systems Architecture Standards */}
        <div className="p-8 lg:p-12 rounded-3xl glass-panel border border-cyan-500/30 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">System Standards</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">Guaranteed Architectural Standards</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every software system engineered by Muvonark adheres to rigorous production reliability benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Deterministic State", detail: "Explicit state machines with zero unhandled edge states." },
              { label: "Sub-Second Latency", detail: "Optimized async processing and in-memory caches." },
              { label: "Hermetic Tool Sandboxes", detail: "Isolated containerized execution with strict OAuth scopes." },
              { label: "Zero Data Leakage", detail: "Enterprise tenant isolation and encrypted vector stores." }
            ].map((std, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#090E1C] border border-white/5 space-y-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-bold text-white">{std.label}</h4>
                <p className="text-xs text-slate-400 leading-snug">{std.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProblemIntakeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
