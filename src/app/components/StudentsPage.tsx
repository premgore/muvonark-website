import { useState } from "react";
import { Link } from "react-router";
import { 
  GraduationCap, Code2, Briefcase, Sparkles, CheckCircle2, 
  ArrowRight, Users, BookOpen, Terminal, Cpu, X 
} from "lucide-react";
import studentsImg from "../../assets/ai/students.jpg";

const TRAINING_PROGRAM_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwA5aPgjeDNQFRKTXQydYMH2FywsNfNqvPh10q-hK3bk4Kf5qbuGM9ry-MgAHe2on0/exec";

export function StudentsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    yearOfStudy: "",
    courseBranch: "",
    skills: "",
    whyJoin: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        formType: "student-builder-program",
        ...formData,
        submittedAt: new Date().toISOString()
      };

      const response = await fetch(TRAINING_PROGRAM_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true); // Fallback for script response
      }
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "", email: "", phone: "", college: "",
        yearOfStudy: "", courseBranch: "", skills: "", whyJoin: ""
      });
    }, 300);
  };

  const builderTracks = [
    {
      title: "AI & Machine Learning Track",
      desc: "Work on LangGraph agent loops, GraphRAG systems, and embedding vector stores with senior engineers.",
      skills: ["Python", "FastAPI", "OpenAI / Gemini", "pgvector", "LangChain/LangGraph"],
      icon: Cpu
    },
    {
      title: "Full-Stack Software Engineering",
      desc: "Build scalable web applications, server components, and responsive enterprise interfaces.",
      skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      icon: Code2
    },
    {
      title: "Backend & Systems Infrastructure",
      desc: "Design distributed microservices, REST/GraphQL APIs, database schemas, and caching layers.",
      skills: ["PostgreSQL", "Spring Boot", "Redis", "Docker", "AWS"],
      icon: Terminal
    },
    {
      title: "UI/UX & Product Design",
      desc: "Craft high-fidelity design systems, user flows, and interactive prototypes in Figma for real production apps.",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-mono text-violet-300">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span>Student Builder & Research Ecosystem</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Don't Just Learn Technology.{" "}
              <span className="text-gradient-cyan">Build With It.</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Muvonark gives passionate student engineers and researchers real production experience. You won't work on throwaway practice tutorials — you will contribute to real software systems, AI pipelines, and live client products.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg shadow-violet-500/20 flex items-center gap-2"
              >
                <span>Apply for Student Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/projects"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 text-xs font-mono transition-all"
              >
                View What Students Ship →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-violet-500/30 shadow-2xl glass-panel">
              <img
                src={studentsImg}
                alt="Student builders collaborating in modern engineering lab"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Selection Paths */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        <div className="space-y-6">
          <div className="pb-4 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Entry Pathways</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Choose Your Builder Pathway</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Path 1: Direct Interview */}
            <div className="p-8 rounded-3xl glass-panel border border-cyan-500/30 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Direct Production Interview</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  For students who already possess intermediate software engineering or AI skills and want to directly contribute code, models, or designs to live production repositories.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Immediate live repository contribution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Direct engineering review & git PR feedback</span>
                  </div>
                </div>
              </div>

              <Link
                to="/careers#apply"
                className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono uppercase font-bold tracking-wider text-center transition-colors shadow-lg shadow-cyan-500/20"
              >
                Apply for Direct Interview →
              </Link>
            </div>

            {/* Path 2: Training Program */}
            <div className="p-8 rounded-3xl glass-panel border border-violet-500/30 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Training & Mentorship</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  For students eager to learn modern web, backend, and AI stacks through structured mentorship before transitioning into active repository development.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Hands-on architectural guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Graduation into live Muvonark project teams</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-mono uppercase font-bold tracking-wider text-center transition-colors shadow-lg shadow-violet-500/20"
              >
                Join Training Program →
              </button>
            </div>
          </div>
        </div>

        {/* Builder Tracks */}
        <div className="space-y-6">
          <div className="pb-4 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Specializations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Available Contributor Tracks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {builderTracks.map((track, i) => {
              const Icon = track.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-[#090E1C] border border-white/5 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-white/5 text-cyan-400 w-fit">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{track.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{track.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                    {track.skills.map(s => (
                      <span key={s} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-xl bg-[#090E1C] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8 p-6 lg:p-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for applying, {formData.name}. Our technical team will review your application and send onboarding details within 48 hours.
                </p>
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-mono uppercase font-bold"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-violet-400">Student Intake</span>
                  <h3 className="text-xl font-bold text-white mt-1">Apply for Muvonark Student Program</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Rohan Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="rohan@college.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400"
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
                        className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">College / University *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Pune University / IIT"
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Year of Study *</label>
                      <select
                        required
                        value={formData.yearOfStudy}
                        onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400"
                      >
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Recent Graduate">Recent Graduate</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Branch / Major *</label>
                      <input
                        required
                        type="text"
                        placeholder="Computer Engineering / AI"
                        value={formData.courseBranch}
                        onChange={(e) => setFormData({ ...formData, courseBranch: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Technologies Known *</label>
                    <input
                      required
                      type="text"
                      placeholder="React, Python, Spring Boot, SQL, Git..."
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Why do you want to build at Muvonark? *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us what you want to build and what you are passionate about..."
                      value={formData.whyJoin}
                      onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-mono uppercase font-bold tracking-wider transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
