import { useState } from "react";
import { 
  Mail, Phone, MapPin, Linkedin, Twitter, Github, 
  Instagram, CheckCircle2, ArrowRight, Sparkles, Building2, Terminal 
} from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    domain: "AI Business Automation",
    problemDescription: "",
    currentSystems: "",
    targetOutcome: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const domains = [
    "AI Business Automation (WhatsBiz AI / Messaging)",
    "Decision & Meeting Intelligence (Nirnaya)",
    "AI-Native Custom Software",
    "Agentic AI & Multi-Agent Swarms",
    "Enterprise ERP / CRM Integration",
    "Applied AI Research Collaboration",
    "Other Business Problem"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwv4J5aiPFdsDzCR7nggJe8GP8JmBzPl5eVE8m6bteO4pk1j5Xqm-7C1pp2DiZ9hNsK/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          formType: "contact-scoping",
          ...formData,
          submittedAt: new Date().toISOString()
        })
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Client Problem Scoping Gateway</span>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Have a Complex Business Problem?
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Don't start with technology. Start with the problem. Muvonark helps businesses understand their workflows, identify opportunities for machine intelligence, and design the right architectural solution.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Info & Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white">Direct Engineering Inquiries</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Reach out directly for technical consultations, enterprise pilot requests, or collaborative research partnerships.
            </p>

            <div className="space-y-4 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#090E1C] border border-white/5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px]">Email</div>
                  <a href="mailto:team@muvonark.com" className="text-white hover:text-cyan-300 transition-colors">
                    team@muvonark.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#090E1C] border border-white/5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px]">Direct Line</div>
                  <span className="text-white">+91 7666760842</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#090E1C] border border-white/5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px]">Operations</div>
                  <span className="text-white">India · Remote-First Systems Engineering</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-3">Official Profiles</span>
              <div className="flex gap-2">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/company/muvonark" },
                  { icon: Twitter, href: "https://twitter.com/muvonark" },
                  { icon: Github, href: "https://github.com/muvonark" },
                  { icon: Instagram, href: "https://instagram.com/muvonark" }
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 flex items-center justify-center transition-all text-slate-400"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Problem Intake Scoping Form */}
        <div className="lg:col-span-7 p-8 lg:p-12 rounded-3xl glass-panel border border-cyan-500/30 space-y-6">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Problem Blueprint Request Received</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our solutions engineering team will review your workflow bottleneck and prepare an architectural proposal within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-cyan-400 hover:underline pt-2"
              >
                Submit another problem scoping request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Scoping Protocol</span>
                <h2 className="text-2xl font-bold text-white mt-1">Describe Your Operational Problem</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Priya Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Work Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="priya@startup.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="Acme Technologies"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Primary Operational Focus *</label>
                <select
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                >
                  {domains.map(d => (
                    <option key={d} value={d} className="bg-[#070B14] text-white">{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">What is the current manual bottleneck? *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe where time is lost, where data is disconnected, or what operational workflow you want to automate..."
                  value={formData.problemDescription}
                  onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">What tools & databases are currently in use?</label>
                <input
                  type="text"
                  placeholder="e.g. WhatsApp, Salesforce, PostgreSQL, Custom ERP, Slack..."
                  value={formData.currentSystems}
                  onChange={(e) => setFormData({ ...formData, currentSystems: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting Scoping Request..." : "Request Architecture Scoping →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
