import { useState } from "react";
import { Link } from "react-router";
import { 
  Cpu, Sparkles, Bot, Workflow, Layers, 
  ArrowRight, ShieldCheck, Database, Terminal, FileText, Network 
} from "lucide-react";
import researchImg from "../../assets/ai/research.jpg";
import agenticImg from "../../assets/ai/agentic_ai.jpg";
import { AgenticLoopSimulator } from "./ui/AgenticLoopSimulator";

export function ResearchPage() {
  const researchPillars = [
    {
      slug: "artificial-intelligence",
      title: "Artificial Intelligence Foundations",
      tagline: "Neural architectures, reasoning benchmarks & mathematical foundations",
      desc: "Investigating how high-parameter foundation models process multi-step logic, handle edge cases, and eliminate hallucinations in domain-specific tasks.",
      icon: Cpu,
      color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      status: "Core R&D",
      topics: ["Attention Mechanisms", "Reasoning Benchmarks", "Fine-Tuning Adaptation", "Sovereign Inference"]
    },
    {
      slug: "generative-ai",
      title: "Generative AI & Context Engineering",
      tagline: "High-context synthesis, GraphRAG & vector representation",
      desc: "Optimizing retrieval-augmented generation across complex document hierarchies, temporal entity graphs, and multi-modal organizational knowledge.",
      icon: Sparkles,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      status: "Applied Research",
      topics: ["Temporal GraphRAG", "Vector Search Embeddings", "Prompt Calibration", "Structured JSON Extraction"]
    },
    {
      slug: "agentic-ai",
      title: "Agentic AI & Multi-Step Reasoning",
      tagline: "Beyond single-turn prompting to goal-oriented action cycles",
      desc: "Architecting autonomous execution loops: Goal Ingestion -> Context Synthesis -> Dynamic Planning -> Tool Calling -> Observation -> Adaptive Correction.",
      icon: Bot,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      status: "Active Exploration",
      topics: ["ReAct Loops", "Dynamic Replanning", "Self-Correction Heuristics", "Human-in-the-Loop"]
    },
    {
      slug: "ai-agents",
      title: "Autonomous Multi-Agent Swarms",
      tagline: "Coordinated agent networks with consensus and specialized roles",
      desc: "Exploring how specialized domain agents (triage, calculation, negotiation, execution) collaborate without cascading errors or deadlock.",
      icon: Network,
      color: "text-violet-400 border-violet-500/30 bg-violet-500/10",
      status: "Prototyping",
      topics: ["Swarm Consensus", "State Machine Safety", "Inter-Agent Protocols", "Shared Memory Graphs"]
    },
    {
      slug: "ai-automation",
      title: "Deterministic & Probabilistic Automation",
      tagline: "Hybrid systems combining rigid business rules with machine reasoning",
      desc: "Bridging the gap between strict financial/ERP determinism and the flexible cognitive reasoning of modern AI models.",
      icon: Workflow,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      status: "System Architecture",
      topics: ["Deterministic Sandboxes", "API Dispatches", "Audit Trails", "Failure Recovery"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Muvonark R&D Laboratory</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Muvonark Research: Frontiers of Intelligent Systems
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We explore the mathematical, computational, and architectural foundations needed to make machine intelligence reliable, autonomous, and safely embedded in real business operations.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl glass-panel">
              <img
                src={researchImg}
                alt="Muvonark AI Research Neural Visualization"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Research Pillars Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Research Focus Areas</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Core Investigation Tracks</h2>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:block">5 Primary Domains</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.slug}
                  to={`/research/${pillar.slug}`}
                  className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl border ${pillar.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                        {pillar.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 mt-1">{pillar.tagline}</p>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{pillar.desc}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {pillar.topics.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
                    <span>Read Investigation Track</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Live Interactive Simulator on Research Page */}
        <div className="space-y-6 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Interactive Simulation</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">The Agentic Execution Paradigm</h3>
            <p className="text-xs text-slate-400">Inspect our multi-step agent reasoning cycle in real time.</p>
          </div>
          <AgenticLoopSimulator />
        </div>
      </div>
    </div>
  );
}
