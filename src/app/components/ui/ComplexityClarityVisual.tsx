import { useState } from "react";
import { 
  Layers, Zap, AlertTriangle, CheckCircle2, ArrowRight, 
  Workflow, Database, Cpu, Bot, Sparkles, RefreshCw 
} from "lucide-react";
import complexityClarityImg from "../../../assets/ai/complexity_clarity.jpg";

export function ComplexityClarityVisual() {
  const [viewMode, setViewMode] = useState<"comparison" | "chaotic" | "unified">("comparison");
  const [activeStep, setActiveStep] = useState<number>(2);

  const chaosPoints = [
    { label: "Fragmented SaaS Silos", desc: "10+ disconnected tools with no shared context" },
    { label: "Manual Copy-Pasting", desc: "Teams wasting 40% of time re-keying data" },
    { label: "Opaque Decision Trails", desc: "Decisions lost in chat threads and video calls" },
    { label: "Slow Incident Response", desc: "Hours to synthesize context across systems" }
  ];

  const muvonarkPoints = [
    { label: "Unified Intelligence Fabric", desc: "Context engine continuously syncs all tool states" },
    { label: "Autonomous Agent Execution", desc: "Intelligent agents handle multi-step workflows" },
    { label: "Organizational Knowledge Graph", desc: "Every meeting & decision indexed and queryable" },
    { label: "Real-Time Action Triggers", desc: "Immediate execution across CRM, ERP, and APIs" }
  ];

  const pipelineStages = [
    { stage: "01. Fragmented Input", title: "Disparate Business Data", desc: "Emails, Slack, WhatsApp, CRM, ERP, DBs", icon: Database, color: "text-amber-400" },
    { stage: "02. Context Synthesis", title: "Context Graph Engine", desc: "Entity resolution, temporal linking & vector memory", icon: Workflow, color: "text-cyan-400" },
    { stage: "03. Multi-Agent Reasoning", title: "Muvonark Agent Matrix", desc: "Task decomposition, tool selection & guardrails", icon: Bot, color: "text-blue-400" },
    { stage: "04. Deterministic Action", title: "Automated Execution", desc: "Live API triggers, DB mutations, customer replies", icon: Zap, color: "text-emerald-400" }
  ];

  return (
    <div className="w-full rounded-2xl glass-panel p-6 lg:p-8 overflow-hidden border border-white/10 shadow-2xl">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Interactive Architecture Visualizer</span>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
            From Operational Complexity to Automated Clarity
          </h3>
        </div>

        <div className="flex items-center p-1 bg-[#0A1020] rounded-xl border border-white/10 text-xs font-medium">
          <button
            onClick={() => setViewMode("comparison")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "comparison" 
                ? "bg-blue-600 text-white shadow" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            Side-by-Side
          </button>
          <button
            onClick={() => setViewMode("chaotic")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "chaotic" 
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            The Problem
          </button>
          <button
            onClick={() => setViewMode("unified")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "unified" 
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            Muvonark Solution
          </button>
        </div>
      </div>

      {/* Main visual display */}
      <div className="py-6">
        {viewMode === "comparison" && (
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/9] max-h-[420px] w-full bg-[#050811]">
              <img 
                src={complexityClarityImg} 
                alt="Chaotic Enterprise Complexity vs AI-Driven Operational Clarity" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-red-950/80 border border-red-500/30 text-red-300 backdrop-blur-md">
                  Legacy: Disjointed Chaos
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 backdrop-blur-md">
                  Muvonark: Unified Intelligence Fabric
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-2 mb-3 text-red-400 font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Without Muvonark: Friction & Lag</span>
                </div>
                <ul className="space-y-2.5">
                  {chaosPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-red-400 font-bold mt-0.5">✕</span>
                      <div>
                        <strong className="text-white font-medium">{pt.label}:</strong> {pt.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                <div className="flex items-center gap-2 mb-3 text-cyan-400 font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>With Muvonark Intelligence: Instant Clarity</span>
                </div>
                <ul className="space-y-2.5">
                  {muvonarkPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-medium">{pt.label}:</strong> {pt.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {viewMode === "chaotic" && (
          <div className="p-8 rounded-xl bg-[#0B1222] border border-amber-500/30 text-slate-200 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">The Root Cause: Tool Proliferation Without Context</h4>
                <p className="text-sm text-slate-400">Companies don't lack software — they have too much disconnected software.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {chaosPoints.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#101A30] border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h5 className="font-semibold text-white text-sm mb-1">{pt.label}</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {viewMode === "unified" && (
          <div className="p-8 rounded-xl bg-[#0A1428] border border-cyan-500/30 text-slate-200 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">The Muvonark Paradigm: The Intelligence Layer</h4>
                <p className="text-sm text-slate-400">We place an intelligent reasoning tier between your systems and your execution.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {muvonarkPoints.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0E1E38] border border-cyan-500/20 hover:border-cyan-400/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h5 className="font-semibold text-white text-sm mb-1">{pt.label}</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Step Slider */}
      <div className="pt-6 border-t border-white/10">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
          Click to inspect the Muvonark transformation flow:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pipelineStages.map((st, i) => {
            const Icon = st.icon;
            const isSelected = activeStep === i;
            return (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`p-3.5 rounded-xl text-left transition-all border ${
                  isSelected 
                    ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/10" 
                    : "bg-[#090E1B] border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono ${st.color}`}>{st.stage}</span>
                  <Icon className={`w-4 h-4 ${st.color}`} />
                </div>
                <div className="text-sm font-semibold text-white mb-0.5">{st.title}</div>
                <div className="text-[11px] text-slate-400 leading-snug">{st.desc}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
