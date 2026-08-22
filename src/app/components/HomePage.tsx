import { useState } from "react";
import { Link } from "react-router";
import { 
  ArrowRight, Bot, Sparkles, Workflow, Cpu, Layers, 
  CheckCircle2, Terminal, Shield, Network, GraduationCap, 
  Building2, MessageSquare, ChevronRight, Zap, Code2, Database 
} from "lucide-react";
import heroImg from "../../assets/ai/hero.jpg";
import whatsbizImg from "../../assets/ai/whatsbiz.jpg";
import nirnayaImg from "../../assets/ai/nirnaya.jpg";
import researchImg from "../../assets/ai/research.jpg";
import studentImg from "../../assets/ai/students.jpg";

import { ComplexityClarityVisual } from "./ui/ComplexityClarityVisual";
import { IntelligenceLayerStack } from "./ui/IntelligenceLayerStack";
import { AgenticLoopSimulator } from "./ui/AgenticLoopSimulator";
import { TechRadar } from "./ui/TechRadar";
import { RoadmapTimeline } from "./ui/RoadmapTimeline";
import { ProblemIntakeModal } from "./ui/ProblemIntakeModal";

export function HomePage() {
  const [problemModalOpen, setProblemModalOpen] = useState(false);

  const complexityDrivers = [
    { label: "Customer Inquiries", count: "Across WhatsApp, Email, Web" },
    { label: "Executive Meetings", count: "Hours of audio, unrecorded action items" },
    { label: "Sales Conversations", count: "Unqualified leads & slow proposals" },
    { label: "Operations & Billing", count: "Manual reconciliation across DBs" },
    { label: "Documents & Data", count: "Unstructured PDFs, spreadsheets & SaaS" },
    { label: "Fragmented Tools", count: "10+ software systems without shared context" }
  ];

  const whatWeBuild = [
    {
      title: "AI Products",
      badge: "Flagship Software",
      desc: "Purpose-built intelligent platforms designed around acute enterprise bottlenecks and operational friction.",
      icon: Bot,
      color: "from-blue-600/20 to-blue-900/10",
      border: "border-blue-500/30",
      textColor: "text-blue-400",
      link: "/products"
    },
    {
      title: "Intelligent Automation",
      badge: "Operational Efficiency",
      desc: "Systems that eliminate repetitive administrative drag, auto-dispatch APIs, and synchronize state across legacy databases.",
      icon: Zap,
      color: "from-cyan-600/20 to-cyan-900/10",
      border: "border-cyan-500/30",
      textColor: "text-cyan-400",
      link: "/solutions#automation"
    },
    {
      title: "AI-Native Software",
      badge: "Architecture First",
      desc: "Custom applications where machine intelligence, vector memory, and reasoning models are core to the product topology.",
      icon: Code2,
      color: "from-indigo-600/20 to-indigo-900/10",
      border: "border-indigo-500/30",
      textColor: "text-indigo-400",
      link: "/solutions#software"
    },
    {
      title: "Intelligent Agents",
      badge: "Autonomous Workflows",
      desc: "Self-evaluating agent networks capable of decomposing complex goals, invoking external tools, and completing business tasks.",
      icon: Cpu,
      color: "from-violet-600/20 to-violet-900/10",
      border: "border-violet-500/30",
      textColor: "text-violet-400",
      link: "/solutions#agents"
    }
  ];

  const servicesList = [
    {
      title: "AI Product Development",
      desc: "Engineering ground-up, AI-native SaaS products with embedded reasoning pipelines.",
      icon: Bot
    },
    {
      title: "Generative AI Solutions",
      desc: "Integrating high-context LLMs, fine-tuned adapters, and domain alignment into business workflows.",
      icon: Sparkles
    },
    {
      title: "Agentic AI & Tool Networks",
      desc: "Designing autonomous multi-step agents with deterministic validation and tool execution guardrails.",
      icon: Cpu
    },
    {
      title: "Business Process Automation",
      desc: "Eliminating manual data transfer, auto-reconciling transactions, and orchestrating API event streams.",
      icon: Workflow
    },
    {
      title: "Custom Scalable Software",
      desc: "High-throughput web portals, distributed backends, and cloud microservices built with modern stacks.",
      icon: Terminal
    },
    {
      title: "Enterprise AI Strategy",
      desc: "Scoping workflows, measuring ROI, and mapping high-leverage machine intelligence opportunities.",
      icon: Shield
    }
  ];

  const engineeringPrinciples = [
    { number: "01", title: "Solve the Problem First", desc: "Technology is only valuable when it directly addresses an operational bottleneck." },
    { number: "02", title: "AI Must Create Measurable Value", desc: "We reject novelty AI demos; we deploy intelligence that saves real hours and prevents errors." },
    { number: "03", title: "Automation Should Reduce Complexity", desc: "Adding automation should simplify operations, never create a brittle maintenance nightmare." },
    { number: "04", title: "Designed Around Real Workflows", desc: "Interfaces and agents adapt to human operators, maintaining intuitive oversight and control." },
    { number: "05", title: "Scalable Distributed Foundations", desc: "Hermetic containerization, deterministic state transitions, and sub-millisecond execution." },
    { number: "06", title: "Research Must Lead to Useful Systems", desc: "Our research in agent loops and GraphRAG translates directly into production capabilities." },
    { number: "07", title: "Simplicity Beats Unnecessary Complexity", desc: "Clean architecture, explicit schemas, and minimal dependencies outlive convoluted systems." }
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-mesh-dark bg-grid-pattern">
        {/* Subtle glow circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>AI-First Technology Company</span>
              </div>

              {/* Primary Headline */}
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Turning Business Complexity{" "}
                <span className="text-gradient-cyan">
                  Into Intelligent Systems.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Muvonark builds AI-powered products and intelligent software that help businesses understand, automate and simplify complex operations.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/products"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold tracking-wide shadow-xl shadow-blue-500/20 flex items-center gap-2 transition-all group"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  onClick={() => setProblemModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 text-sm font-semibold transition-all"
                >
                  Build With Muvonark
                </button>

                <div className="w-full sm:w-auto pt-1 sm:pt-0">
                  <Link
                    to="/research"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Explore Our Research</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Design motif badge */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-cyan-400">COMPLEXITY</span>
                <span>→</span>
                <span className="text-blue-400">INTELLIGENCE</span>
                <span>→</span>
                <span className="text-indigo-400">AUTOMATION</span>
                <span>→</span>
                <span className="text-emerald-400">SIMPLICITY</span>
              </div>
            </div>

            {/* Right: Original AI Conceptual Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl glass-panel group">
                <img
                  src={heroImg}
                  alt="Computational Architecture transforming business complexity into automated action"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      Muvonark Intelligence Refinement Engine
                    </span>
                    <span className="text-emerald-400">● Live Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. IMMEDIATELY AFTER HERO: POSITIONING ─── */}
      <section className="py-24 bg-[#090E1C] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">The Problem</span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Businesses Are Becoming More Complex.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Modern organizations do not lack software. They operate across dozens of fragmented touchpoints — each generating isolated streams of data and communication without contextual alignment.
            </p>
          </div>

          {/* Complexity Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
            {complexityDrivers.map((c, i) => (
              <div 
                key={i} 
                className="p-4 rounded-xl bg-[#0C1428] border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div className="text-xs font-mono text-cyan-400 mb-2">0{i + 1}</div>
                <div className="text-sm font-bold text-white mb-1">{c.label}</div>
                <div className="text-[11px] text-slate-400 leading-snug">{c.count}</div>
              </div>
            ))}
          </div>

          {/* Core Transition */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-[#0C1428] border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">The Shift</span>
              <h3 className="text-xl font-bold text-white">The problem is not lack of tools. The problem is too much complexity.</h3>
              <p className="text-sm text-slate-300">
                Muvonark builds intelligent systems that connect information, understand context, and automate meaningful work.
              </p>
            </div>
            <button
              onClick={() => setProblemModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider shrink-0 transition-colors"
            >
              Analyze Your Workflow →
            </button>
          </div>
        </div>
      </section>

      {/* ─── 3. CORE IDEA: FROM COMPLEXITY TO CLARITY ─── */}
      <section className="py-24 bg-[#070B14] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Core Paradigm</span>
            <h2 
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              From Complexity to Clarity
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              How Muvonark replaces fragmented, manual operations with a single unified intelligence layer.
            </p>
          </div>

          <ComplexityClarityVisual />
        </div>
      </section>

      {/* ─── 4. WHAT MUVONARK BUILDS ─── */}
      <section className="py-24 bg-[#090E1C] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Four Core Pillars</span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Intelligence For Modern Business.
            </h2>
            <p className="text-slate-300 text-base">
              We design software architectures where machine intelligence is not an add-on, but the fundamental substrate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeBuild.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  to={item.link}
                  className={`p-6 rounded-2xl bg-gradient-to-b ${item.color} ${item.border} border glass-panel-hover flex flex-col justify-between group`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl bg-black/40 ${item.textColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                        {item.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
                    <span>Explore Pillar</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. FEATURED PRODUCTS ─── */}
      <section className="py-24 bg-[#070B14] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Proprietary Software</span>
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Products Built Around Real Problems.
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300"
            >
              <span>View All Products & Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product 1: WhatsBiz AI */}
            <div className="rounded-2xl glass-panel p-8 border border-cyan-500/30 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 uppercase font-bold">AI Business Automation</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono">
                    Status: In Development
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    WhatsBiz AI
                  </h3>
                  <p className="text-base text-cyan-200/90 font-medium">
                    Turn everyday business communication into intelligent workflows.
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Conversational AI routing, automated lead qualification, customer context graphs, and real-time CRM/ERP transaction dispatching.
                  </p>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/9] bg-[#050811]">
                  <img
                    src={whatsbizImg}
                    alt="WhatsBiz AI Conversational Routing Architecture"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Omnichannel Triage", "Lead Scoring", "CRM Sync", "Deterministic Dispatch"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  to="/products/whatsbiz"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore WhatsBiz AI</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-mono text-slate-500">v0.8 Core Alpha</span>
              </div>
            </div>

            {/* Product 2: Nirnaya */}
            <div className="rounded-2xl glass-panel p-8 border border-blue-500/30 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-blue-400 uppercase font-bold">Decision & Meeting Intelligence</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono">
                    Status: In Development
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    NIRNAYA
                  </h3>
                  <p className="text-base text-blue-200/90 font-medium">
                    Turn conversations into decisions, actions, and organizational intelligence.
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Speech audio extraction, multi-speaker conversational reasoning, decision dependency graphs, and organizational memory indexation.
                  </p>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/9] bg-[#050811]">
                  <img
                    src={nirnayaImg}
                    alt="Nirnaya Decision Intelligence Platform Architecture"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Meeting Intelligence", "Decision Extraction", "Action Tracking", "Knowledge Graphs"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  to="/products/nirnaya"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Explore Nirnaya</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-mono text-slate-500">v0.6 Audio Reasoning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. THE MUVONARK INTELLIGENCE LAYER ─── */}
      <section className="py-24 bg-[#090E1C] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Core Identity Motif</span>
            <h2 
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Muvonark Intelligence Layer
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              We do not build ordinary isolated dashboards. We deploy an intelligent middleware tier between business data and enterprise execution.
            </p>
          </div>

          <IntelligenceLayerStack />
        </div>
      </section>

      {/* ─── 7. AGENTIC AI ("BEYOND CHATBOTS") ─── */}
      <section className="py-24 bg-[#070B14] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Next Frontier</span>
            <h2 
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Beyond Chatbots: True Agentic Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Exploring how autonomous agents reason about multi-step goals, invoke external software tools, and complete workflows.
            </p>
          </div>

          <AgenticLoopSimulator />
        </div>
      </section>

      {/* ─── 8. MUVONARK RESEARCH ─── */}
      <section className="py-24 bg-[#090E1C] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">R&D Lab</span>
              <h2 
                className="text-3xl sm:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Muvonark Research: Exploring Intelligent Systems
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We believe applied AI requires continuous fundamental exploration. Our research focuses on high-reliability agent loops, retrieval-augmented context synthesis (GraphRAG), multimodal tensors, and deterministic safety guardrails.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Generative Context Optimization",
                  "Agentic Multi-Step Planning",
                  "GraphRAG Temporal Memory",
                  "Multimodal Audio-Text Ingest",
                  "Tool Sandboxing & Safety",
                  "Human-in-the-Loop Verification"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/research"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-500/20"
                >
                  <span>Explore Research Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 glass-panel group">
                <img
                  src={researchImg}
                  alt="Muvonark AI Research Lab Neural Visual"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md text-xs font-mono text-cyan-300 flex items-center justify-between">
                  <span>Muvonark Computational Intelligence R&D</span>
                  <span className="text-slate-400">Open Explorations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. ROADMAP ("WHAT WE'RE BUILDING TOWARD") ─── */}
      <section className="py-24 bg-[#070B14] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Horizon & Direction</span>
            <h2 
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What We're Building Toward
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              A transparent, grounded view of our active builds, near-term prototypes, and theoretical long-term research directions.
            </p>
          </div>

          <RoadmapTimeline />
        </div>
      </section>

      {/* ─── 10. SERVICES ("BUILD INTELLIGENT SYSTEMS WITH US") ─── */}
      <section className="py-24 bg-[#090E1C] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Engineering Collaboration</span>
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Build Intelligent Systems With Us.
              </h2>
            </div>
            <button
              onClick={() => setProblemModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300"
            >
              <span>Tell Us What You're Building →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((s, i) => {
              const Icon = s.icon;
              return (
                <div 
                  key={i}
                  className="p-6 rounded-2xl bg-[#0A1224] border border-white/5 hover:border-cyan-500/30 hover:bg-[#0E1A34] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-4 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 11. DUAL GATEWAYS: CLIENTS & STUDENTS ─── */}
      <section className="py-24 bg-[#070B14] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Client Gateway */}
          <div className="p-8 lg:p-10 rounded-2xl glass-panel border border-cyan-500/30 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                For Business Leaders & Founders
              </span>
              <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Have a Complex Business Problem?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Don't start with technology. Start with the problem. Muvonark helps businesses understand the workflow, identify opportunities for intelligence, and design the right technology solution.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Workflow & Bottleneck Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Architecture & Agent Scoping Blueprint</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setProblemModalOpen(true)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-mono uppercase font-bold tracking-wider transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              <span>Describe Your Problem →</span>
            </button>
          </div>

          {/* Student Gateway */}
          <div className="p-8 lg:p-10 rounded-2xl glass-panel border border-violet-500/30 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold">
                For Student Builders & Researchers
              </span>
              <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Don't Just Learn Technology. Build With It.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Work alongside engineers and researchers on live software systems, foundation AI integrations, and real-world product releases — not practice runs.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Real Production Engineering Repositories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Direct Technical Mentorship & Growth</span>
                </div>
              </div>
            </div>

            <Link
              to="/students"
              className="w-full py-4 rounded-xl bg-[#12182A] hover:bg-[#1A233D] text-white border border-violet-500/30 text-xs font-mono uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Student Opportunities →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 12. ENGINEERING PHILOSOPHY & TECH RADAR ─── */}
      <section className="py-24 bg-[#090E1C] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Engineering Manifesto</span>
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How We Think About Technology
              </h2>
              <p className="text-slate-300 text-base">
                Seven immutable principles that guide every architecture, agent, and line of code we write at Muvonark.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {engineeringPrinciples.map((p, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-xl bg-[#0C1428] border border-white/5 hover:border-cyan-500/20 transition-all space-y-2"
                >
                  <span className="text-xs font-mono text-cyan-400 font-bold">{p.number}</span>
                  <h4 className="text-base font-bold text-white">{p.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Technology Radar */}
          <TechRadar />
        </div>
      </section>

      {/* Global Problem Intake Modal */}
      <ProblemIntakeModal
        isOpen={problemModalOpen}
        onClose={() => setProblemModalOpen(false)}
      />
    </div>
  );
}
