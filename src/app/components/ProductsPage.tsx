import { useState } from "react";
import { Link } from "react-router";
import { 
  Bot, Sparkles, Workflow, ArrowRight, CheckCircle2, 
  Layers, Cpu, Zap, Shield, Database, Terminal 
} from "lucide-react";
import whatsbizImg from "../../assets/ai/whatsbiz.jpg";
import nirnayaImg from "../../assets/ai/nirnaya.jpg";
import { IntelligenceLayerStack } from "./ui/IntelligenceLayerStack";
import { ProblemIntakeModal } from "./ui/ProblemIntakeModal";

export function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Product Portfolio & Architectures</span>
        </div>
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Products Built Around Real Business Problems.
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
          Muvonark builds intelligent products where AI is the core engine rather than a decorative layer. Each product is engineered to eliminate acute operational friction.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
        {/* Product 1: WhatsBiz AI */}
        <div className="rounded-3xl glass-panel p-8 lg:p-12 border border-cyan-500/30 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold">AI Business Automation</span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-mono">
                  Status: In Development
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                WhatsBiz AI
              </h2>
              <p className="text-sm text-cyan-200/80 mt-1">
                Turn everyday business communication into intelligent workflows.
              </p>
            </div>

            <Link
              to="/products/whatsbiz"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs uppercase font-bold tracking-wider transition-colors shrink-0 flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <span>Explore Product Deep Dive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Small and enterprise businesses receive thousands of fragmented messages across WhatsApp, email, and live chats. WhatsBiz AI ingests conversations in real time, parses intent, qualifies high-value leads, updates CRM records, and triggers automated quotes and inventory checks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Conversational Intent Triage",
                  "Automated Lead Scoring",
                  "CRM & ERP Data Sync",
                  "Deterministic Action Triggers",
                  "Multi-Agent Support Routing",
                  "Contextual Analytics Dashboard"
                ].map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-[#050811]">
                <img
                  src={whatsbizImg}
                  alt="WhatsBiz AI Architecture Diagram"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product 2: Nirnaya */}
        <div className="rounded-3xl glass-panel p-8 lg:p-12 border border-blue-500/30 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-blue-400 uppercase font-bold">Decision & Meeting Intelligence</span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-mono">
                  Status: In Development
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                NIRNAYA
              </h2>
              <p className="text-sm text-blue-200/80 mt-1">
                Turn conversations into decisions, actions, and organizational intelligence.
              </p>
            </div>

            <Link
              to="/products/nirnaya"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase font-bold tracking-wider transition-colors shrink-0 flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <span>Explore Product Deep Dive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Critical company decisions are negotiated in audio and video meetings, but rarely get translated into structured accountability. Nirnaya transcribes, reasons over speech context, maps decisions into a permanent organizational knowledge graph, and tracks task execution across teams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Acoustic & Semantic Analysis",
                  "Automated Decision Extraction",
                  "Task Owner & Timeline Graph",
                  "Organizational Memory Query",
                  "Executive Follow-up Alarms",
                  "Zero-Hallucination Summaries"
                ].map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-[#050811]">
                <img
                  src={nirnayaImg}
                  alt="Nirnaya Decision Intelligence Platform Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product 3: AffiSphere */}
        <div className="rounded-3xl glass-panel p-8 lg:p-10 border border-violet-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-violet-400 uppercase font-bold">Ecosystem Platform</span>
              <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-[11px] font-mono">
                Student & Startup Portal
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">AffiSphere</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              AffiSphere connects student contributors, startups, and marketing affiliates into a collaborative product ecosystem with live project development and training pathways.
            </p>
          </div>

          <Link
            to="/affisphere"
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs uppercase font-bold tracking-wider transition-colors shrink-0 flex items-center gap-2"
          >
            <span>View AffiSphere Platform</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* The Muvonark Intelligence Layer Architecture */}
        <div className="pt-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Underlying Substrate</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">The Shared Intelligence Layer</h3>
            <p className="text-xs text-slate-400">All Muvonark products are powered by our unified 6-tier intelligence stack.</p>
          </div>
          <IntelligenceLayerStack />
        </div>
      </div>

      <ProblemIntakeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
