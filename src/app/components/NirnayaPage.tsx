import { useState } from "react";
import { Link } from "react-router";
import { 
  Sparkles, Mic, FileText, CheckCircle2, Network, 
  ArrowRight, ShieldCheck, Database, Cpu, Brain, Layers 
} from "lucide-react";
import nirnayaImg from "../../assets/ai/nirnaya.jpg";
import { ProblemIntakeModal } from "./ui/ProblemIntakeModal";

export function NirnayaPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [betaSubmitted, setBetaSubmitted] = useState(false);
  const [betaEmail, setBetaEmail] = useState("");

  const capabilities = [
    {
      title: "Audio Transcript & Acoustic Parsing",
      desc: "Captures multi-speaker audio streams, recognizing speaker identities, tone shifts, and implicit commitments.",
      icon: Mic
    },
    {
      title: "Autonomous Decision Extraction",
      desc: "Distinguishes between conversational chatter, temporary hypotheses, and binding consensus decisions.",
      icon: Brain
    },
    {
      title: "Action Item & Ownership Graph",
      desc: "Maps exact deliverables to assigned team owners with auto-computed dependencies and completion deadlines.",
      icon: CheckCircle2
    },
    {
      title: "Living Organizational Memory",
      desc: "Builds an interconnected knowledge graph of historical company decisions accessible via natural language queries.",
      icon: Network
    },
    {
      title: "Executive Follow-up Intelligence",
      desc: "Detects orphaned commitments before they slip, alerting executives with synthesized context and past commitments.",
      icon: Sparkles
    },
    {
      title: "Zero-Hallucination Summaries",
      desc: "Generates concise, bulletproof executive briefs with clickable source timestamp citations for every claim.",
      icon: ShieldCheck
    }
  ];

  const handleBetaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!betaEmail) return;
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwv4J5aiPFdsDzCR7nggJe8GP8JmBzPl5eVE8m6bteO4pk1j5Xqm-7C1pp2DiZ9hNsK/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          formType: "nirnaya-beta-access",
          email: betaEmail,
          submittedAt: new Date().toISOString()
        })
      });
      setBetaSubmitted(true);
    } catch {
      setBetaSubmitted(true);
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
          <span className="text-xs font-mono text-slate-400 uppercase">Decision & Meeting Intelligence</span>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[11px] font-mono">
            Status: In Development (Speech Reasoning Alpha)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              NIRNAYA
            </h1>
            <p className="text-lg sm:text-xl text-blue-300 font-medium">
              Turn conversations into decisions, actions, and organizational intelligence.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Organizations spend 40% of their leadership bandwidth in meetings. Yet decisions remain undocumented, context decays within days, and follow-ups are dropped. Nirnaya turns unstructured spoken meetings into permanent organizational intelligence.
            </p>

            {/* Beta Access Intake Form */}
            <div className="pt-2">
              {betaSubmitted ? (
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Your request has been logged. You'll receive private testing access for your executive team.</span>
                </div>
              ) : (
                <form onSubmit={handleBetaSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md">
                  <input
                    required
                    type="email"
                    placeholder="Enter executive email for Beta"
                    value={betaEmail}
                    onChange={(e) => setBetaEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-[#090E1C] border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-blue-400 placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0 shadow-lg shadow-blue-500/20"
                  >
                    Request Beta Access
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl glass-panel">
              <img
                src={nirnayaImg}
                alt="Nirnaya Decision Intelligence Platform Architecture"
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
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Core Capabilities</span>
            <h2 className="text-3xl font-bold text-white mt-1" style={{ fontFamily: "var(--font-display)" }}>
              From Spoken Audio to Executive Action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={i} 
                  className="p-6 rounded-2xl bg-[#0C1428] border border-white/5 hover:border-blue-500/30 hover:bg-[#0F1B36] transition-all space-y-3"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit">
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

      {/* Architecture Stages */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Reasoning Architecture</span>
          <h2 className="text-3xl font-bold text-white">How Nirnaya Builds Organizational Memory</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#090E1C] border border-white/5 space-y-3">
            <span className="text-xs font-mono text-blue-400 font-bold">STAGE 01</span>
            <h4 className="text-lg font-bold text-white">Multi-Stream Audio Convergent</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Accepts live audio feeds from Zoom, Google Meet, Teams, or uploaded in-person recordings, separating distinct voices and diarizing timeline markers.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#090E1C] border border-white/5 space-y-3">
            <span className="text-xs font-mono text-cyan-400 font-bold">STAGE 02</span>
            <h4 className="text-lg font-bold text-white">Intelligent Contextual Engine</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Extracts logical propositions, resolves implicit references against company history, and filters ephemeral banter from binding agreements.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#090E1C] border border-white/5 space-y-3">
            <span className="text-xs font-mono text-emerald-400 font-bold">STAGE 03</span>
            <h4 className="text-lg font-bold text-white">Decision & Knowledge Graph</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Links newly confirmed decisions into the company-wide vector graph, automatically notifying task assignees and configuring calendar milestone checks.
            </p>
          </div>
        </div>

        {/* Scoping CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-[#0A1224] border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Need custom meeting intelligence for your executive team?</h3>
            <p className="text-xs text-slate-300">Talk to our AI engineering team for tailored on-premise or cloud deployments.</p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider shrink-0 transition-colors shadow-lg shadow-blue-500/20"
          >
            Schedule Briefing →
          </button>
        </div>
      </section>

      <ProblemIntakeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
