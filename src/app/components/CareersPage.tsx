import { useState } from "react";
import { Briefcase, Clock, GraduationCap, ArrowRight, Upload, CheckCircle2, Users, Star } from "lucide-react";
import { Link } from "react-router";

const jobListings = [
  { type: "full-time", role: "Senior Full-Stack Developer", skills: ["React", "Node.js", "PostgreSQL"], location: "Remote / India" },
  { type: "full-time", role: "DevOps Engineer", skills: ["AWS", "Docker", "Kubernetes", "Terraform"], location: "Remote / India" },
  { type: "full-time", role: "Senior UI/UX Designer", skills: ["Figma", "User Research", "Design Systems"], location: "Remote / India" },
  { type: "full-time", role: "Backend Engineer (Python)", skills: ["FastAPI", "Django", "PostgreSQL", "Redis"], location: "Remote / India" },
  { type: "part-time", role: "Frontend Developer", skills: ["React", "TypeScript", "Tailwind CSS"], location: "Remote" },
  { type: "part-time", role: "Data Analyst", skills: ["Python", "SQL", "Tableau", "Power BI"], location: "Remote" },
  { type: "internship", role: "Frontend Developer Intern", skills: ["HTML/CSS", "JavaScript", "React basics"], location: "Remote" },
  { type: "internship", role: "Backend Developer Intern", skills: ["Python or Node.js", "SQL", "REST APIs"], location: "Remote" },
  { type: "internship", role: "UI/UX Design Intern", skills: ["Figma", "Wireframing", "Basic Prototyping"], location: "Remote" },
  { type: "internship", role: "Data Science Intern", skills: ["Python", "Pandas", "Basic ML"], location: "Remote" },
];

const jobTypeConfig = {
  "full-time": { label: "Full-Time", icon: Briefcase, color: "bg-[#0D1B3E] text-white" },
  "part-time": { label: "Part-Time", icon: Clock, color: "bg-[#EBF1FC] text-[#2B7BE5]" },
  "internship": { label: "Internship", icon: GraduationCap, color: "bg-[#EEF1F6] text-[#5A6A8A]" },
};

const filterTypes = ["all", "full-time", "part-time", "internship"] as const;

const roles = [
  "Frontend Developer", "Backend Developer", "Full-Stack Developer",
  "UI/UX Designer", "DevOps Engineer", "Data Scientist",
  "Business Analyst", "Project Manager", "QA Engineer", "Other",
];

export function CareersPage() {
  const [filter, setFilter] = useState<string>("all");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", role: "", type: "internship",
    skills: "", message: "", resume: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const filtered = filter === "all" ? jobListings : jobListings.filter((j) => j.type === filter);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          reader.onerror = (error) => reject(error);
        });
      }

      const { resume, ...restFormData } = formData;
      const body = {
        formType: "careers",
        ...restFormData,
        ...(resumeBase64 && { resumeBase64, resumeFileName, resumeMimeType }),
      };

      const response = await fetch("https://script.google.com/macros/s/AKfycbz1cAqlZzRkh_d-vAd9F11of_rTmkUZQam3he1P5Xc37wzu_z36eY_LUpEtiXrNmYkE/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] pt-20">
      {/* Hero */}
      <div className="bg-[#0D1B3E] py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=600&fit=crop&auto=format"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/90 to-[#0D1B3E]/70" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-4">Careers</p>
          <h1 className="text-5xl lg:text-6xl text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Build real things. Grow with us.
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mb-8 leading-relaxed">
            Whether you're a working professional or a student looking for your first real project — Muvonark has a place for you. We work on live client projects, not practice runs.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Users, label: "150+ team members" },
              { icon: Star, label: "Real projects, real impact" },
              { icon: CheckCircle2, label: "Remote-first culture" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-[#2B7BE5]" />
                <span className="text-white/60 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Program Banner */}
      <div id="students" className="bg-[#2B7BE5] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Student Contributor Program</span>
            </div>
            <p className="text-white/70 text-sm">
              We're one of very few companies in India where students work on real, client-facing production projects — not internal practice tools.
            </p>
          </div>
          <a href="#apply" className="flex-shrink-0 px-6 py-3 rounded-xl bg-white text-[#2B7BE5] font-semibold text-sm hover:bg-white/90 transition-colors">
            Apply as Student
          </a>
        </div>
      </div>

      {/* Open Roles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-3">Open Positions</p>
            <h2 className="text-4xl text-[#0D1B3E]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Find your place at Muvonark</h2>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filterTypes.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                  filter === t
                    ? "bg-[#0D1B3E] text-white"
                    : "bg-white text-[#5A6A8A] border border-[#0D1B3E]/10 hover:border-[#2B7BE5]/30 hover:text-[#2B7BE5]"
                }`}
              >
                {t === "all" ? "All Roles" : t.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((job, i) => {
              const tc = jobTypeConfig[job.type as keyof typeof jobTypeConfig];
              return (
                <a
                  key={i}
                  href="#apply"
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-2xl border border-[#0D1B3E]/8 hover:border-[#2B7BE5]/30 hover:shadow-lg hover:shadow-[#0D1B3E]/5 transition-all gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 flex-shrink-0 ${tc.color}`}>
                      <tc.icon className="w-3.5 h-3.5" />
                      {tc.label}
                    </div>
                    <div>
                      <h3 className="text-[#0D1B3E] font-semibold mb-1" style={{ fontFamily: "var(--font-display)" }}>{job.role}</h3>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded bg-[#EEF1F6] text-[#5A6A8A] text-xs">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-auto">
                    <span className="text-[#5A6A8A] text-sm hidden md:block">{job.location}</span>
                    <div className="flex items-center gap-1 text-[#2B7BE5] text-sm font-semibold whitespace-nowrap group-hover:gap-2 transition-all">
                      Apply <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-3">Apply Now</p>
            <h2 className="text-4xl text-[#0D1B3E] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              Drop your application
            </h2>
            <p className="text-[#5A6A8A]">Fill in your details below — our team reviews every application within 48 hours.</p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl text-[#0D1B3E] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Application Received!</h3>
              <p className="text-[#5A6A8A] max-w-md mx-auto mb-6">
                Thank you for applying to Muvonark. Our team will review your application and reach out within 48 hours.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-[#2B7BE5] font-semibold">
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Arjun Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] placeholder-[#5A6A8A]/60 focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="arjun@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] placeholder-[#5A6A8A]/60 focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] placeholder-[#5A6A8A]/60 focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Role You're Applying For *</label>
                  <select
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all"
                  >
                    <option value="">Select a role</option>
                    {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Position Type *</label>
                <div className="flex flex-wrap gap-3">
                  {(["full-time", "part-time", "internship"] as const).map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setFormData({ ...formData, type: t })}
                      className={`px-5 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all border ${
                        formData.type === t
                          ? "bg-[#0D1B3E] text-white border-[#0D1B3E]"
                          : "bg-white text-[#5A6A8A] border-[#0D1B3E]/15 hover:border-[#2B7BE5]/30"
                      }`}
                    >
                      {t.replace("-", " ")}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Your Skills *</label>
                <input
                  required
                  type="text"
                  placeholder="React, Node.js, TypeScript, Figma..."
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] placeholder-[#5A6A8A]/60 focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">
                  Professional Summary / Why Muvonark? *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your background, what you've built, and why you want to join Muvonark. Be specific — what kind of projects excite you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] placeholder-[#5A6A8A]/60 focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Resume / CV *</label>
                <label className="flex flex-col items-center justify-center w-full h-36 rounded-xl border-2 border-dashed border-[#0D1B3E]/20 hover:border-[#2B7BE5]/50 bg-[#F8F9FB] cursor-pointer transition-all group">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                  />
                  <Upload className="w-8 h-8 text-[#5A6A8A] group-hover:text-[#2B7BE5] mb-2 transition-colors" />
                  {formData.resume ? (
                    <span className="text-[#2B7BE5] text-sm font-medium">{formData.resume.name}</span>
                  ) : (
                    <>
                      <span className="text-[#5A6A8A] text-sm">Drop your resume here or click to upload</span>
                      <span className="text-[#5A6A8A]/60 text-xs mt-1">PDF, DOC, DOCX — max 10MB</span>
                    </>
                  )}
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#2B7BE5] text-white font-semibold hover:bg-[#1E6DD4] transition-colors text-base shadow-lg shadow-[#2B7BE5]/20"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
