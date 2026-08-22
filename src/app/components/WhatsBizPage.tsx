import { useState } from "react";
import { Link } from "react-router";
import { 
  Bot, MessageSquare, Zap, Workflow, ArrowRight, 
  CheckCircle2, Shield, Database, Cpu, Sparkles, Terminal 
} from "lucide-react";
import whatsbizImg from "../../assets/ai/whatsbiz.jpg";
import { ProblemIntakeModal } from "./ui/ProblemIntakeModal";

export function WhatsBizPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");

  const capabilities = [
    {
      title: "AI Customer Conversations",
      desc: "Handles nuanced customer inquiries over WhatsApp and webchat with zero-shot context awareness and human-like clarity.",
      icon: MessageSquare
    },
    {
      title: "Automated Lead Qualification",
      desc: "Extracts intent, company scale, and budget directly from natural conversational exchanges, scoring high-intent leads instantly.",
      icon: Zap
    },
    {
      title: "Intelligent Triage & Routing",
      desc: "Determines whether an inquiry requires an autonomous agent response, an ERP query, or immediate escalation to a human account executive.",
      icon: Workflow
    },
    {
      title: "Bidirectional CRM & ERP Sync",
      desc: "Automatically updates contacts, pipelines, and historical conversation transcripts across HubSpot, Salesforce, and custom SQL databases.",
      icon: Database
    },
    {
      title: "Multi-Agent Sales Workflows",
      desc: "Deploys specialized agents to pull real-time inventory counts, generate custom PDF estimates, and issue payment links.",
      icon: Bot
    },
    {
      title: "Operational Analytics & Metrics",
      desc: "Provides real-time visibility into customer bottlenecks, frequent objections, conversion velocity, and resolution latency.",
      icon: Sparkles
    }
  ];

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwv4J5aiPFdsDzCR7nggJe8GP8JmBzPl5eVE8m6bteO4pk1j5Xqm-7C1pp2DiZ9hNsK/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          formType: "whatsbiz-early-access",
          email: waitlistEmail,
          submittedAt: new Date().toISOString()
        })
      });
      setEmailSubmitted(true);
    } catch {
      setEmailSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Header / Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8 mb-16">
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/products" className="text-xs font-mono text-cyan-400 hover:text-cyan-300">
            ← Products
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-xs font-mono text-slate-400 uppercase">AI Business Automation</span>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[11px] font-mono">
            Status: In Development (Alpha)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              WhatsBiz AI
            </h1>
            <p className="text-lg sm:text-xl text-cyan-300 font-medium">
              Turn everyday business communication into intelligent workflows.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Modern businesses lose valuable customer transactions because conversations remain trapped in chat apps without triggering backend business systems. WhatsBiz AI bridges this gap with an autonomous conversational intelligence engine.
            </p>

            {/* Early Access Intake Form */}
            <div className="pt-2">
              {emailSubmitted ? (
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>You're on the early access priority list. We will reach out as alpha cohorts open.</span>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md">
                  <input
                    required
                    type="email"
                    placeholder="Enter work email for Early Access"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-[#090E1C] border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0 shadow-lg shadow-cyan-500/20"
                  >
                    Request Access
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl glass-panel">
              <img
                src={whatsbizImg}
                alt="WhatsBiz AI System Architecture"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="py-16 bg-[#090E1C] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Core Capabilities</span>
            <h2 className="text-3xl font-bold text-white mt-1" style={{ fontFamily: "var(--font-display)" }}>
              Engineered for Enterprise Communication Workflows
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={i} 
                  className="p-6 rounded-2xl bg-[#0C1428] border border-white/5 hover:border-cyan-500/30 hover:bg-[#0F1B36] transition-all space-y-3"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Operates */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Execution Pipeline</span>
          <h2 className="text-3xl font-bold text-white">How WhatsBiz AI Processes Every Message</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: "01", title: "Ingestion", desc: "Captures messages from WhatsApp Business API, SMS, or webhooks in real-time." },
            { step: "02", title: "Context Synthesis", desc: "Matches incoming phone/email against CRM records and past customer conversation vector memory." },
            { step: "03", title: "Agentic Reasoning", desc: "Selects appropriate response path: direct answer, inventory check, or human routing." },
            { step: "04", title: "State Mutation", desc: "Dispatches API calls to billing, scheduling, or CRM systems with guaranteed audit trails." }
          ].map((s, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-[#090E1C] border border-white/5 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold">{s.step}</span>
              <h4 className="text-base font-bold text-white">{s.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-[#0A1224] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Ready to automate your communication workflows?</h3>
            <p className="text-xs text-slate-300">Schedule a scoping conversation with our engineering team.</p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider shrink-0 transition-colors"
          >
            Describe Your Workflow →
          </button>
        </div>
      </section>

      <ProblemIntakeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
