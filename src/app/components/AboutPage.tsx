import { Link } from "react-router";
import { 
  Building2, Shield, Sparkles, Users, Target, 
  ArrowRight, CheckCircle2, Zap, Network, Heart 
} from "lucide-react";
import complexityClarityImg from "../../assets/ai/complexity_clarity.jpg";
import intelligenceImg from "../../assets/ai/intelligence_layer.jpg";

export function AboutPage() {
  const complexityPillars = [
    "SaaS Platforms & Disparate Tools",
    "Customer Communication Channels",
    "Legacy & Cloud Databases",
    "Executive Meetings & Audio Streams",
    "Manual Spreadsheets & PDFs",
    "Employee Task Handoffs",
    "Fragmented API Webhooks",
    "Siloed Operational Decisions"
  ];

  const advisors = [
    {
      title: "Business Intelligence & Strategy Lead",
      exp: "18+ Years Experience",
      background: "Former enterprise VP and consultant for 60+ startups across fintech, supply chain, and SaaS operations."
    },
    {
      title: "Technology Architecture Advisor",
      exp: "20+ Years Experience",
      background: "Architected distributed systems at scale for Fortune 500 companies before guiding Muvonark's infrastructure and DevOps practice."
    },
    {
      title: "Startup Growth & Go-to-Market Advisor",
      exp: "15+ Years Experience",
      background: "Serial entrepreneur and ecosystem mentor guiding product-market positioning, operational scaling, and unit economics."
    },
    {
      title: "Systems & Enterprise Operations Consultant",
      exp: "16+ Years Experience",
      background: "Specialized in operational re-engineering, ERP migrations, and workflow automation across manufacturing and commerce."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Why Muvonark Exists</span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Turning Business Complexity Into Intelligent Systems.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Muvonark was founded on a simple observation: modern businesses are not struggling from a lack of software — they are drowning in operational complexity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
        {/* The Complexity Problem */}
        <div className="p-8 lg:p-12 rounded-3xl glass-panel border border-cyan-500/30 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                The Enterprise Bottleneck
              </span>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                The Complexity Problem
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                As organizations grow, they adopt specialized tools for every department: a CRM for sales, an ERP for finance, messaging apps for communication, video tools for meetings, and cloud drives for documents.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Yet these systems remain fundamentally disconnected. Context is lost, employees spend hours manually reconciling information, and critical decisions get buried.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {complexityPillars.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-[#050811]">
                <img
                  src={complexityClarityImg}
                  alt="Enterprise Complexity vs Operational Clarity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-[#090E1C] border border-white/5 space-y-3">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect intelligence, software, and automation to make complex enterprise operations intuitive to understand and effortless to execute.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#090E1C] border border-white/5 space-y-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">The Intelligence Layer</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We do not build another static dashboard. We build an intelligent reasoning layer between business data and enterprise action.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#090E1C] border border-white/5 space-y-3">
            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 w-fit">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Builder Culture</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We foster an environment where engineers, researchers, and student contributors work together on live systems and real emerging technologies.
            </p>
          </div>
        </div>

        {/* Business Intelligence Advisors */}
        <div className="space-y-6">
          <div className="pb-4 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Guiding Experience</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Business Intelligence & Technology Advisors</h2>
            <p className="text-xs text-slate-400 mt-1">Guided by senior practitioners with decades of enterprise experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisors.map((a, i) => (
              <div key={i} className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{a.title}</h3>
                  <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {a.exp}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{a.background}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-blue-950/40 to-[#0C1428] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Want to learn more about our technology vision?</h3>
            <p className="text-xs text-slate-300">Explore our research lab or connect with our engineering leadership.</p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider shrink-0 transition-colors"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </div>
  );
}
