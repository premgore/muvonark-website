import { useState } from "react";
import { Clock, ArrowRight, Sparkles, Layers, Cpu, Bot, Network, ShieldCheck } from "lucide-react";

export function RoadmapTimeline() {
  const [activeTab, setActiveTab] = useState<"NOW" | "NEXT" | "BEYOND">("NOW");

  const roadmapData = {
    NOW: {
      statusLabel: "In Active Engineering",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      headline: "Products & Core Systems Under Active Construction",
      desc: "Our primary product focus is delivering high-impact conversational automation and decision intelligence directly addressing operational friction.",
      items: [
        {
          title: "WhatsBiz AI",
          category: "AI Business Automation",
          status: "In Development",
          details: "Conversational business messaging routing, automatic lead triage, CRM context synchronization, and instant WhatsApp support workflows."
        },
        {
          title: "Nirnaya",
          category: "Decision & Meeting Intelligence",
          status: "In Development",
          details: "Executive meeting audio transcript analysis, automated decision extraction, action item ownership graph, and organizational follow-up tracking."
        },
        {
          title: "Muvonark Core Intelligence Layer v1",
          category: "Architecture",
          status: "Alpha Architecture",
          details: "Standardized context graph and deterministic API dispatch layer connecting client ERPs with modern foundation LLMs."
        }
      ]
    },
    NEXT: {
      statusLabel: "Active Exploration & Prototyping",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      headline: "Autonomous Workflows & Specialized Agent Networks",
      desc: "Advancing beyond single-turn interactions toward multi-step autonomous tool execution with human-in-the-loop safety boundaries.",
      items: [
        {
          title: "Domain-Specific AI Agents",
          category: "Agentic Systems",
          status: "Prototyping",
          details: "Autonomous agents capable of multi-step reasoning, ERP data queries, inventory reconciliation, and document drafting."
        },
        {
          title: "Intelligent Workflow Synthesizer",
          category: "Business Automation",
          status: "Exploration",
          details: "Zero-code synthesis of custom enterprise workflows derived dynamically from natural language operational requests."
        },
        {
          title: "Muvonark Research Portal",
          category: "Knowledge & R&D",
          status: "In Development",
          details: "Open benchmarks, engineering whitepapers, and reproducible research into agentic reliability and RAG optimization."
        }
      ]
    },
    BEYOND: {
      statusLabel: "Long-Term Research Directions",
      badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
      headline: "Autonomous Enterprise Intelligence & Multi-Agent Swarms",
      desc: "Long-term theoretical and computational frontiers focusing on self-healing enterprise operations and complete organizational memory.",
      items: [
        {
          title: "Heterogeneous Multi-Agent Swarms",
          category: "Distributed AI",
          status: "Research Phase",
          details: "Coordinated swarms of specialized agents executing complex cross-departmental operations with consensus protocols."
        },
        {
          title: "Living Organizational Intelligence",
          category: "Knowledge Architecture",
          status: "Research Phase",
          details: "Self-updating knowledge graphs that connect all company communications, documents, and historical decisions without human curation."
        },
        {
          title: "AI-Native Enterprise Platforms",
          category: "Next-Gen Software",
          status: "Research Phase",
          details: "Enterprise applications where user interfaces are dynamically synthesized by AI based on real-time task context."
        }
      ]
    }
  };

  const current = roadmapData[activeTab];

  return (
    <div className="w-full rounded-2xl glass-panel p-6 lg:p-10 border border-white/10 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Engineering Horizon</span>
          <h3 className="text-2xl font-bold text-white tracking-tight">What We're Building Toward</h3>
        </div>

        {/* 3-State Toggle */}
        <div className="flex p-1 bg-[#0A1020] rounded-xl border border-white/10 text-xs font-mono font-bold">
          {(["NOW", "NEXT", "BEYOND"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === tab
                  ? tab === "NOW" 
                    ? "bg-emerald-600 text-white shadow" 
                    : tab === "NEXT"
                    ? "bg-blue-600 text-white shadow"
                    : "bg-violet-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${current.badgeColor}`}>
                {current.statusLabel}
              </span>
            </div>
            <h4 className="text-xl font-bold text-white">{current.headline}</h4>
          </div>
          <p className="text-xs text-slate-400 max-w-md leading-relaxed">
            {current.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {current.items.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl bg-[#090E1C] border border-white/5 hover:border-cyan-500/30 hover:bg-[#0D152A] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">{item.category}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                    {item.status}
                  </span>
                </div>
                <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{item.details}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400/70" />
                <span>Muvonark R&D Vector</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
