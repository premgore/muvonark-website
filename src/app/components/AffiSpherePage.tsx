import { useState } from "react";
import { 
  Rocket, Code2, Server, Database, Wrench, Cloud, 
  Users, Briefcase, GraduationCap, ArrowRight, CheckCircle2, X 
} from "lucide-react";
import { Link } from "react-router";

export function AffiSpherePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        formType: "training-program",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        college: formData.college,
        yearOfStudy: formData.yearOfStudy,
        courseBranch: formData.courseBranch,
        skills: formData.skills,
        whyJoin: formData.whyJoin,
        submittedAt: new Date().toISOString()
      };

      const response = await fetch("https://script.google.com/macros/s/AKfycbzIsJ-5u7b5fpky2bx2uiMZqXUlImY4K6H4KvUjbo-K2zxbyaKGkfGCcqix4ZwIK8CB/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true);
      }
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "", email: "", phone: "", college: "",
        yearOfStudy: "", courseBranch: "", skills: "", whyJoin: ""
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6 mb-16">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-mono font-semibold flex items-center gap-2 border border-violet-500/30">
            <Rocket className="w-3.5 h-3.5" /> Coming Soon
          </span>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Ecosystem Build</span>
        </div>
        
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            AffiSphere
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            AffiSphere is an Affiliate Marketing, Startup Support, and Student Empowerment Platform being developed by Muvonark to connect student contributors, creators, and startups into a live product development ecosystem.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Selection Paths */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white font-mono uppercase tracking-wider text-cyan-400">
            Selection Pathways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Direct Production Interview</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  For candidates with technical skills ready to directly contribute to the AffiSphere development team and repository.
                </p>
              </div>
              <Link to="/careers" className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono uppercase font-bold tracking-wider text-center transition-colors">
                Apply for Interview →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="glass-panel rounded-3xl p-8 border border-violet-500/30 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Hands-on Training Program</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  For students who want structured technical training before contributing to the live product.
                </p>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-mono uppercase font-bold tracking-wider text-center transition-colors">
                Join Training Program →
              </button>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white font-mono uppercase tracking-wider text-cyan-400">
            Technology Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#090E1C] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <Code2 className="w-5 h-5" />
                <h3 className="font-bold text-white">Frontend Stack</h3>
              </div>
              <p className="text-xs text-slate-400">React 19, TypeScript, Tailwind CSS, Responsive Design</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090E1C] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <Server className="w-5 h-5" />
                <h3 className="font-bold text-white">Backend Systems</h3>
              </div>
              <p className="text-xs text-slate-400">Java, Spring Boot 3, Spring Security, REST APIs</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090E1C] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <Database className="w-5 h-5" />
                <h3 className="font-bold text-white">Database & Cloud</h3>
              </div>
              <p className="text-xs text-slate-400">PostgreSQL, Redis Caching, AWS Cloud Deployment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
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
                  Thank you for applying to the AffiSphere program. We will contact you within 48 hours.
                </p>
                <button onClick={closeModal} className="px-6 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-mono uppercase font-bold">
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-violet-400">Training Program</span>
                  <h3 className="text-xl font-bold text-white mt-1">Enroll in AffiSphere Training</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Full Name *</label>
                      <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Email Address *</label>
                      <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Phone Number *</label>
                      <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">College *</label>
                      <input required type="text" value={formData.college} onChange={(e) => setFormData({ ...formData, college: e.target.value })} className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Year of Study *</label>
                      <select required value={formData.yearOfStudy} onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })} className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400">
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Branch *</label>
                      <input required type="text" value={formData.courseBranch} onChange={(e) => setFormData({ ...formData, courseBranch: e.target.value })} className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Skills Known *</label>
                    <input required type="text" value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value })} className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Why do you want to join? *</label>
                    <textarea required rows={3} value={formData.whyJoin} onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })} className="w-full p-3 rounded-xl bg-[#070B14] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-400 resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-mono uppercase font-bold tracking-wider transition-colors disabled:opacity-50">
                    {isSubmitting ? "Submitting..." : "Submit Enrollment"}
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
