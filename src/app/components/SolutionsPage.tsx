import { useState } from "react";
import { Link } from "react-router";
import { 
  Bot, Sparkles, Workflow, Zap, Code2, Database, 
  Shield, CheckCircle2, ArrowRight, Server, Terminal, Layers 
} from "lucide-react";
import { ProblemIntakeModal } from "./ui/ProblemIntakeModal";

export function SolutionsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const solutions = [
    {
      id: "automation",
      title: "AI Business Automation",
      tagline: "Automate repetitive, high-touch operational workflows",
      desc: "We analyze your recurring operational workflows — customer communication, order reconciliation, lead qualification, and reporting — and implement automated reasoning pipelines that connect directly to your databases and APIs.",
      capabilities: [
        "Conversational WhatsApp & Email Routing",
        "Autonomous Lead Scoring & Routing",
        "Cross-System Data Reconciliation",
        "Invoice & Document Ingestion (OCR + LLM)",
        "Automated Calendar & Task Scheduling",
        "Zero-Downtime Webhook Event Dispatch"
      ],
      icon: Zap,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"
    },
    {
      id: "software",
      title: "AI-Native Software Engineering",
      tagline: "Applications designed from the ground up around machine intelligence",
      desc: "Instead of treating AI as a tacked-on chatbot widget, we architect web portals, enterprise platforms, and internal tools where vector search, real-time embeddings, and probabilistic reasoning are foundational layers.",
      capabilities: [
        "Next.js & React 19 High-Performance Frontends",
        "FastAPI & Async Python High-Throughput Backends",
        "PostgreSQL + pgvector Hybrid Search",
        "Granular Role-Based Access & Tenant Isolation",
        "Hermetic Sandboxed Tool Execution",
        "End-to-End Type Safety (TypeScript 5.x)"
      ],
      icon: Code2,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/30"
    },
    {
      id: "agents",
      title: "Agentic AI & Multi-Agent Swarms",
      tagline: "Autonomous systems capable of planning, executing tools, and self-correcting",
      desc: "We design multi-agent architectures that understand broad enterprise objectives, decompose tasks into dynamic execution graphs, call external software tools, observe environment feedback, and complete multi-step goals.",
      capabilities: [
        "Cyclic ReAct & LangGraph State Machines",
        "Domain-Specific Fine-Tuned Agent Workers",
        "Deterministic Tool Execution Guardrails",
        "Self-Correction & Human-in-the-Loop Fallbacks",
        "Temporal Knowledge Graph Memory (GraphRAG)",
        "Audit Trail & Complete Execution Telemetry"
      ],
      icon: Bot,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30"
    },
    {
      id: "operations",
      title: "Enterprise Operations & Integration",
      tagline: "Unify fragmented ERP, CRM, and communication data silos",
      desc: "Break down the wall between disparate business software. We build the connective intelligence layer that pulls from legacy databases, CRMs, spreadsheets, and meeting transcripts to provide unified operational clarity.",
      capabilities: [
        "Custom Legacy ERP Connectors",
        "HubSpot, Salesforce, & Zoho Bi-directional Sync",
        "Event-Driven Architecture with Kafka / Redis",
        "Meeting Audio to Structured Decision Graphs",
        "Executive KPI Synthesis Dashboards",
        "Secure Enterprise Cloud Hosting (AWS / GCP)"
      ],
      icon: Server,
      color: "text-violet-400 bg-violet-500/10 border-violet-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Enterprise Solutions & Scoping</span>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Build Intelligent Systems With Us.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We partner with businesses to diagnose operational bottlenecks, architect intelligent software layers, and deploy reliable machine intelligence that drives measurable business outcomes.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap gap-4">
          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
          >
            <span>Describe Your Operational Problem</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Solutions Breakdown */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {solutions.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div 
              key={s.id} 
              id={s.id}
              className="p-8 lg:p-12 rounded-3xl glass-panel border border-white/10 space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className={`p-3.5 rounded-2xl border ${s.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase font-bold">Solution 0{idx + 1}</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mt-0.5">{s.title}</h2>
                  </div>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-slate-200 transition-colors shrink-0"
                >
                  Scope This Solution →
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="text-base font-semibold text-cyan-300">{s.tagline}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{s.desc}</p>
                </div>

                <div className="lg:col-span-7">
                  <div className="p-6 rounded-2xl bg-[#090E1C] border border-white/5 space-y-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                      Production Capabilities Delivered:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Diagnostic Intake Box */}
        <div className="p-10 rounded-3xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-[#0A1224] border border-cyan-500/30 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Problem-First Approach</span>
            <h2 className="text-3xl font-bold text-white">Don't Start With Technology. Start With The Problem.</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Tell us about your team's operational friction, repetitive data handling, or system bottlenecks. Our engineers will prepare an architectural scoping blueprint.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-mono uppercase font-bold tracking-wider transition-all shadow-xl shadow-cyan-500/20 inline-flex items-center gap-2"
          >
            <span>Describe Your Problem →</span>
          </button>
        </div>
      </div>

      <ProblemIntakeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
