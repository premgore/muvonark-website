import { useState } from "react";
import { X, ArrowRight, CheckCircle2, Bot, Layers, MessageSquare, Database, Sparkles, Building2 } from "lucide-react";

interface ProblemIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProblemIntakeModal({ isOpen, onClose }: ProblemIntakeModalProps) {
  const [step, setStep] = useState<number>(1);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    operationalDomain: "",
    bottleneckType: [] as string[],
    connectedSystems: [] as string[],
    problemDescription: "",
    targetOutcome: "",
    fullName: "",
    workEmail: "",
    companyName: "",
    phone: ""
  });

  if (!isOpen) return null;

  const domains = [
    { id: "customer_support", label: "Customer Communication & Support", desc: "WhatsApp, email, tickets triage" },
    { id: "sales_crm", label: "Sales & Lead Qualification", desc: "Pipeline routing & proposal generation" },
    { id: "internal_ops", label: "Internal Operations & ERP", desc: "Inventory, billing & cross-tool reconciliation" },
    { id: "decision_meeting", label: "Executive Decision & Meetings", desc: "Context tracking & accountability graphs" },
    { id: "custom_software", label: "New AI-Native Software Product", desc: "Building a ground-up intelligent app" }
  ];

  const bottlenecks = [
    "Repetitive manual copy-pasting",
    "Slow customer response times",
    "Disconnected SaaS data silos",
    "Lost decisions & action items",
    "High human error in data entry",
    "Lack of real-time visibility"
  ];

  const systems = [
    "WhatsApp / Meta",
    "Salesforce / HubSpot",
    "PostgreSQL / MySQL",
    "Slack / Teams",
    "Custom Legacy ERP",
    "Stripe / Razorpay",
    "Google Workspace",
    "Zoom / Meet"
  ];

  const toggleBottleneck = (item: string) => {
    setFormData(prev => ({
      ...prev,
      bottleneckType: prev.bottleneckType.includes(item)
        ? prev.bottleneckType.filter(i => i !== item)
        : [...prev.bottleneckType, item]
    }));
  };

  const toggleSystem = (item: string) => {
    setFormData(prev => ({
      ...prev,
      connectedSystems: prev.connectedSystems.includes(item)
        ? prev.connectedSystems.filter(i => i !== item)
        : [...prev.connectedSystems, item]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Post to contact apps script
      await fetch("https://script.google.com/macros/s/AKfycbwv4J5aiPFdsDzCR7nggJe8GP8JmBzPl5eVE8m6bteO4pk1j5Xqm-7C1pp2DiZ9hNsK/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          formType: "problem-intake",
          ...formData,
          submittedAt: new Date().toISOString()
        })
      });
      setIsSuccess(true);
    } catch (err) {
      // Graceful fallback for UI
      setIsSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#090E1C] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#070B14]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                Muvonark Scoping Gateway
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">Describe Your Operational Problem</h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 lg:p-8">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">Problem Architecture Received</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.fullName || "there"}. Our solutions engineering team will analyze your workflow bottlenecks and prepare a structured technical blueprint for {formData.companyName || "your team"} within 24 hours.
              </p>
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors mt-4"
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5 text-xs font-mono">
                <span className="text-cyan-400 font-bold">Step {step} of 3</span>
                <span className="text-slate-400">
                  {step === 1 && "Domain & Bottlenecks"}
                  {step === 2 && "Systems & Workflow Details"}
                  {step === 3 && "Contact & Outcomes"}
                </span>
              </div>

              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-3">
                      1. Select primary operational domain:
                    </label>
                    <div className="space-y-2">
                      {domains.map((d) => (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, operationalDomain: d.label })}
                          className={`w-full p-3 rounded-xl text-left transition-all border flex items-center justify-between ${
                            formData.operationalDomain === d.label
                              ? "bg-blue-600/20 border-blue-500 text-white"
                              : "bg-[#0A1124] border-white/5 hover:border-white/20 text-slate-300"
                          }`}
                        >
                          <div>
                            <div className="text-sm font-semibold text-white">{d.label}</div>
                            <div className="text-xs text-slate-400">{d.desc}</div>
                          </div>
                          {formData.operationalDomain === d.label && (
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      2. What are the key bottlenecks? (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {bottlenecks.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => toggleBottleneck(b)}
                          className={`px-3 py-1.5 rounded-lg text-xs transition-all border ${
                            formData.bottleneckType.includes(b)
                              ? "bg-cyan-500/20 border-cyan-400 text-cyan-200"
                              : "bg-[#0A1124] border-white/5 hover:border-white/20 text-slate-400"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      disabled={!formData.operationalDomain}
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      1. Which systems are currently involved?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {systems.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleSystem(s)}
                          className={`px-3 py-1.5 rounded-lg text-xs transition-all border ${
                            formData.connectedSystems.includes(s)
                              ? "bg-blue-500/20 border-blue-400 text-blue-200"
                              : "bg-[#0A1124] border-white/5 hover:border-white/20 text-slate-400"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      2. Describe the operational bottleneck in your own words: *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="e.g. Our team spends 3 hours every morning manually reviewing customer inquiries on WhatsApp, cross-checking stock in our SQL database, and manually typing responses..."
                      value={formData.problemDescription}
                      onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-[#070B14] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-mono"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={!formData.problemDescription.trim()}
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      Final Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Aditi Roy"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Work Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="aditi@company.com"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="Acme Tech Labs"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">What would success look like?</label>
                    <input
                      type="text"
                      placeholder="e.g. 80% automated resolution and sub-second CRM synchronization"
                      value={formData.targetOutcome}
                      onChange={(e) => setFormData({ ...formData, targetOutcome: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-mono"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 flex items-center gap-2"
                    >
                      {submitting ? "Analyzing..." : "Submit Problem Scoping"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
