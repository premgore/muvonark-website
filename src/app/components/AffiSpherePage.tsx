import { useState } from "react";
import { Rocket, Code2, Server, Database, Wrench, Cloud, Users, Briefcase, GraduationCap, ArrowRight, CheckCircle2, X } from "lucide-react";
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

      const response = await fetch("https://script.google.com/macros/s/AKfycbwJ0Jb_doqnZnA-wsWyw6PVz_2V47t5FPw8M7134or7JutSLxZHwfphxMVDjVg2kkNZ/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
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
    <div className="min-h-screen bg-[#F8F9FB] pt-20">
      {/* Hero Section */}
      <div className="bg-[#0D1B3E] py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/90 to-[#0D1B3E]/70" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold flex items-center gap-2 border border-blue-500/30">
              <Rocket className="w-4 h-4" /> Coming Soon
            </span>
            <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest">Project</p>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6 max-w-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            AffiSphere
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed mb-6">
            AffiSphere is a next-generation Affiliate Marketing, Startup Support, and Student Empowerment Platform being developed by Muvonark.
          </p>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed mb-6">
            The platform aims to connect students, startups, creators, businesses, and affiliates into a single ecosystem where users can learn, collaborate, earn, and contribute to real-world products.
          </p>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed mb-6">
            Unlike traditional learning platforms, AffiSphere provides hands-on product development opportunities where students work alongside developers, designers, marketers, and business teams to build a live industry product.
          </p>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            This project is designed to help students gain practical experience, strengthen their technical and professional skills, and become part of a growing technology ecosystem.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Selection Paths */}
        <div className="mb-20">
          <h2 className="text-3xl text-[#0D1B3E] mb-8" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Selection Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[#0D1B3E]/10 shadow-lg hover:shadow-xl transition-all flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl bg-[#EBF1FC] text-[#2B7BE5] flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-2xl text-[#0D1B3E] font-semibold mb-4">Direct Interview</h3>
              <p className="text-[#5A6A8A] flex-grow mb-8 leading-relaxed">
                For candidates who already possess technical or professional skills and want to directly contribute to the AffiSphere development team.
              </p>
              <Link to="/careers" className="w-full py-4 rounded-xl bg-[#2B7BE5] text-white font-semibold hover:bg-[#1E6DD4] transition-colors flex items-center justify-center gap-2">
                Apply for Interview <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[#0D1B3E]/10 shadow-lg hover:shadow-xl transition-all flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl bg-[#EEF1F6] text-[#0D1B3E] flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl text-[#0D1B3E] font-semibold mb-4">Training Program</h3>
              <p className="text-[#5A6A8A] flex-grow mb-8 leading-relaxed">
                For candidates who are passionate about learning and want training before contributing to the project.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 rounded-xl bg-[#0D1B3E] text-white font-semibold hover:bg-[#1A2E63] transition-colors flex items-center justify-center gap-2">
                Join Training Program <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-3xl text-[#0D1B3E] mb-8" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#0D1B3E]/10">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-[#2B7BE5]" />
                <h3 className="font-semibold text-[#0D1B3E] text-lg">Frontend</h3>
              </div>
              <ul className="space-y-2 text-[#5A6A8A]">
                <li>• HTML5 & CSS3</li>
                <li>• JavaScript</li>
                <li>• React.js</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-[#0D1B3E]/10">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-[#2B7BE5]" />
                <h3 className="font-semibold text-[#0D1B3E] text-lg">Backend</h3>
              </div>
              <ul className="space-y-2 text-[#5A6A8A]">
                <li>• Java</li>
                <li>• Spring Boot</li>
                <li>• Spring Security</li>
                <li>• REST APIs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#0D1B3E]/10">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-[#2B7BE5]" />
                <h3 className="font-semibold text-[#0D1B3E] text-lg">Database</h3>
              </div>
              <ul className="space-y-2 text-[#5A6A8A]">
                <li>• PostgreSQL</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#0D1B3E]/10">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-[#2B7BE5]" />
                <h3 className="font-semibold text-[#0D1B3E] text-lg">Development Tools</h3>
              </div>
              <ul className="space-y-2 text-[#5A6A8A]">
                <li>• Git & GitHub</li>
                <li>• Postman</li>
                <li>• Maven</li>
                <li>• IntelliJ IDEA</li>
                <li>• VS Code</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#0D1B3E]/10">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-6 h-6 text-[#2B7BE5]" />
                <h3 className="font-semibold text-[#0D1B3E] text-lg">Cloud & Deployment</h3>
              </div>
              <ul className="space-y-2 text-[#5A6A8A]">
                <li>• AWS</li>
                <li>• CI/CD Pipeline</li>
                <li>• Cloud Hosting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Available Roles & What you'll learn */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl text-[#0D1B3E] mb-8" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              Available Roles
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-[#0D1B3E] text-xl flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-[#2B7BE5]" /> Technical Team
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Frontend Developer", "Backend Developer (Spring Boot)", "Full Stack Developer", "Database Developer", "QA / Software Tester", "UI/UX Designer", "DevOps Engineer"].map((role) => (
                    <span key={role} className="px-3 py-1.5 bg-white border border-[#0D1B3E]/10 rounded-lg text-sm text-[#5A6A8A]">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#0D1B3E] text-xl flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-[#2B7BE5]" /> Business & Growth Team
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Digital Marketing Executive", "Affiliate Growth Associate", "Business Development Associate", "Content Writer", "Community Manager", "HR & Talent Acquisition Associate", "Project Coordinator"].map((role) => (
                    <span key={role} className="px-3 py-1.5 bg-white border border-[#0D1B3E]/10 rounded-lg text-sm text-[#5A6A8A]">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl text-[#0D1B3E] mb-8" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              What You Will Learn
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-[#0D1B3E]/10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Enterprise Application Development",
                  "React.js Development",
                  "Spring Boot Development",
                  "REST API Development",
                  "Database Design",
                  "Authentication & Authorization",
                  "Git & GitHub Collaboration",
                  "Team Collaboration",
                  "Real Product Development Lifecycle"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2B7BE5] flex-shrink-0 mt-0.5" />
                    <span className="text-[#5A6A8A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-[#0D1B3E]/60 p-4 md:p-6 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl mt-10 mb-10 overflow-hidden">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#0D1B3E] rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8">
              {isSuccess ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl text-[#0D1B3E] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                    Application Submitted!
                  </h3>
                  <p className="text-[#5A6A8A] max-w-md mx-auto mb-8">
                    Thank you for applying to the Affisphere Training Program. Our team will review your application and get back to you within 48 hours. Keep an eye on your email.
                  </p>
                  <button onClick={closeModal} className="px-8 py-3 rounded-xl bg-[#0D1B3E] text-white font-semibold hover:bg-[#1A2E63] transition-colors">
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl text-[#0D1B3E] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                      Join Training Program
                    </h3>
                    <p className="text-[#5A6A8A] text-sm">
                      Fill in your details below to apply.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Full Name *</label>
                        <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Email Address *</label>
                        <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Phone Number *</label>
                        <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">College / University *</label>
                        <input required type="text" value={formData.college} onChange={(e) => setFormData({...formData, college: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Year of Study *</label>
                        <select required value={formData.yearOfStudy} onChange={(e) => setFormData({...formData, yearOfStudy: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all">
                          <option value="" disabled>Select Year</option>
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year</option>
                          <option value="Postgraduate">Postgraduate</option>
                          <option value="Recent Graduate">Recent Graduate</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Course / Branch *</label>
                        <input required type="text" placeholder="e.g. Computer Engineering" value={formData.courseBranch} onChange={(e) => setFormData({...formData, courseBranch: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Skills / Technologies known *</label>
                      <input required type="text" placeholder="e.g. React, Node.js, SQL" value={formData.skills} onChange={(e) => setFormData({...formData, skills: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Why do you want to join this training? *</label>
                      <textarea required rows={4} value={formData.whyJoin} onChange={(e) => setFormData({...formData, whyJoin: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-[#2B7BE5] text-white font-semibold hover:bg-[#1E6DD4] transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
