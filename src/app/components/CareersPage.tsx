import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { 
  Briefcase, Clock, GraduationCap, ArrowRight, Upload, 
  CheckCircle2, Users, Star, Sparkles, Code2, Terminal, ShieldCheck 
} from "lucide-react";

const CAREERS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwv4J5aiPFdsDzCR7nggJe8GP8JmBzPl5eVE8m6bteO4pk1j5Xqm-7C1pp2DiZ9hNsK/exec";

interface JobListing {
  type: "full-time" | "part-time" | "internship";
  role: string;
  department: string;
  skills: string[];
  location: string;
}

const jobListings: JobListing[] = [
  { type: "full-time", department: "AI & ML", role: "AI Systems & Agentic Engineer", skills: ["Python", "LangGraph", "FastAPI", "pgvector", "RAG"], location: "Remote / India" },
  { type: "full-time", department: "Frontend", role: "Senior Frontend Engineer (React 19/Next.js)", skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion"], location: "Remote / India" },
  { type: "full-time", department: "Backend", role: "Distributed Backend Engineer", skills: ["Spring Boot", "Go / Node.js", "PostgreSQL", "Kafka"], location: "Remote / India" },
  { type: "full-time", department: "Infrastructure", role: "Cloud & DevOps Reliability Engineer", skills: ["AWS", "Docker", "Terraform", "CI/CD"], location: "Remote / India" },
  { type: "part-time", department: "Frontend", role: "Frontend UI Specialist", skills: ["React", "TypeScript", "Tailwind CSS"], location: "Remote" },
  { type: "part-time", department: "AI & ML", role: "Applied AI Research Contributor", skills: ["Python", "LoRA Fine-Tuning", "Vector Search"], location: "Remote" },
  { type: "internship", department: "AI & ML", role: "AI Systems Engineering Intern", skills: ["Python", "FastAPI", "LLM APIs", "SQL"], location: "Remote" },
  { type: "internship", department: "Frontend", role: "Frontend Development Intern", skills: ["React", "TypeScript", "Tailwind CSS"], location: "Remote" },
  { type: "internship", department: "Backend", role: "Backend Systems Intern", skills: ["Java / Node.js", "PostgreSQL", "REST APIs"], location: "Remote" },
  { type: "internship", department: "Product", role: "UI/UX Product Design Intern", skills: ["Figma", "Design Systems", "Prototyping"], location: "Remote" },
];

export function CareersPage() {
  const { hash } = useLocation();
  const [filter, setFilter] = useState<string>("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    skills: "",
    portfolio: "",
    github: "",
    qualification: "",
    resume: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (hash === "#apply") {
      setTimeout(() => {
        const applyEl = document.getElementById("apply");
        if (applyEl) applyEl.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

  const filtered = filter === "all" ? jobListings : jobListings.filter(j => j.type === filter);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let resumeBase64 = "";
      let resumeFileName = "";
      let resumeMimeType = "";

      if (formData.resume) {
        resumeFileName = formData.resume.name;
        resumeMimeType = formData.resume.type;
        resumeBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(formData.resume as File);
          reader.onload = () => {
            const base64String = (reader.result as string).split(",")[1];
            resolve(base64String);
          };
          reader.onerror = (err) => reject(err);
        });
      }

      const { resume, ...restFormData } = formData;
      const body = {
        formType: "careers",
        ...restFormData,
        ...(resumeBase64 && { resumeBase64, resumeFileName, resumeMimeType }),
        submittedAt: new Date().toISOString()
      };

      await fetch(CAREERS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(body),
      });

      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whyMuvonark = [
    {
      title: "Build",
      tagline: "Work on products instead of only isolated tasks",
      desc: "Move closer to the whole system. You will understand how business logic, AI models, and customer interfaces interlock in production.",
      icon: Terminal
    },
    {
      title: "Experiment",
      tagline: "Explore emerging technologies",
      desc: "We actively test modern AI agent loops, vector retrieval architectures, and local models rather than sticking to legacy dogma.",
      icon: Sparkles
    },
    {
      title: "Own",
      tagline: "Take responsibility for meaningful parts of a system",
      desc: "No bureaucratic red tape. You have ownership over real modules, architectures, and features shipped directly to users.",
      icon: ShieldCheck
    },
    {
      title: "Learn",
      tagline: "Grow through real engineering and research",
      desc: "Learn from working professionals and senior advisors with decades of real-world enterprise engineering experience.",
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Talent & Careers</span>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Build Real Things. Grow With Us.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Muvonark is an AI-first technology company where you move closer to the problem, the product, and the technology.
          </p>
        </div>
      </div>

      {/* Why Muvonark (4 Core Ideas) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
        <div className="space-y-6">
          <div className="pb-4 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Culture & Philosophy</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Why Build at Muvonark?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMuvonark.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={i} className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{w.title}</h3>
                      <p className="text-xs font-mono text-cyan-400 mt-0.5">{w.tagline}</p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Open Roles</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Active Positions</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Roles" },
                { id: "full-time", label: "Full-Time" },
                { id: "part-time", label: "Part-Time" },
                { id: "internship", label: "Internships" }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                    filter === f.id
                      ? "bg-blue-600 border-blue-500 text-white font-bold"
                      : "bg-[#090E1C] border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filtered.map((job, idx) => (
              <a
                key={idx}
                href="#apply"
                className="p-5 rounded-2xl bg-[#090E1C] border border-white/5 hover:border-cyan-500/30 hover:bg-[#0D162C] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {job.role}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 capitalize">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.skills.map(s => (
                      <span key={s} className="px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-slate-400">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-mono text-slate-400">{job.location}</span>
                  <div className="flex items-center gap-1 text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="apply" className="p-8 lg:p-12 rounded-3xl glass-panel border border-white/10 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Application Gateway</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Submit Your Profile</h2>
            <p className="text-xs text-slate-400 mt-1">We review every application thoroughly within 48 hours.</p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">Application Received!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for applying. Our talent and engineering team will review your background and reach out regarding interview steps.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-cyan-400 hover:underline pt-2"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Arjun Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="arjun@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">College / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. Pune University / Company"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">GitHub / Portfolio Link</label>
                  <input
                    type="url"
                    placeholder="https://github.com/yourhandle"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Key Skills *</label>
                  <input
                    required
                    type="text"
                    placeholder="Python, React, TypeScript, LangGraph..."
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Resume / CV *</label>
                <label className="flex flex-col items-center justify-center w-full h-32 rounded-xl border-2 border-dashed border-white/15 hover:border-cyan-400/50 bg-[#070B14] cursor-pointer transition-all">
                  <input
                    required
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                  />
                  <Upload className="w-6 h-6 text-slate-400 mb-1" />
                  {formData.resume ? (
                    <span className="text-cyan-400 text-xs font-mono">{formData.resume.name}</span>
                  ) : (
                    <span className="text-xs text-slate-400 font-mono">Upload PDF or DOCX (Max 10MB)</span>
                  )}
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
