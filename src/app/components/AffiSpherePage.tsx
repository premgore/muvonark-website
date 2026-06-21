import { Rocket, Code2, Server, Database, Wrench, Cloud, Users, Briefcase, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

export function AffiSpherePage() {
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
              <Link to="/careers?type=training" className="w-full py-4 rounded-xl bg-[#0D1B3E] text-white font-semibold hover:bg-[#1A2E63] transition-colors flex items-center justify-center gap-2">
                Join Training Program <ArrowRight className="w-4 h-4" />
              </Link>
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
    </div>
  );
}
