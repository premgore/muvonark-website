import { CheckCircle2, Heart, Lightbulb, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router";

const values = [
  { icon: Heart, title: "Startup-First Mindset", desc: "We've built for bootstrapped founders and funded startups alike. We understand constraints, timelines, and the pressure of building with limited resources." },
  { icon: Lightbulb, title: "Mentorship Culture", desc: "Senior professionals with 15+ years of experience actively mentor our team and student contributors — making us one of India's best places to learn by doing." },
  { icon: Shield, title: "Transparency by Default", desc: "No surprises. Regular updates, honest timelines, and clear documentation — we keep clients informed at every stage of the build." },
  { icon: Zap, title: "Automation-First", desc: "Before writing a line of code, we ask: can this be automated? Eliminating manual work is baked into how we think about every project." },
  { icon: Users, title: "Diverse, Multidisciplinary Team", desc: "Web designers, frontend devs, backend engineers, DevOps, data scientists, UI/UX — our 150+ team covers every domain under one roof." },
  { icon: CheckCircle2, title: "Made in India", desc: "Proudly built in India, for the world. We bring international standards with an intimate understanding of the Indian business landscape." },
];

const domains = [
  { role: "UI/UX Designers", count: "12+" },
  { role: "Frontend Developers", count: "28+" },
  { role: "Backend Engineers", count: "32+" },
  { role: "Full-Stack Developers", count: "24+" },
  { role: "DevOps Engineers", count: "10+" },
  { role: "Data Scientists", count: "14+" },
  { role: "Business Consultants", count: "8+" },
  { role: "Product Managers", count: "6+" },
  { role: "Student Contributors", count: "40+" },
];

const mentors = [
  {
    title: "Business Intelligence Lead",
    exp: "18 years",
    background: "Former VP at a top-5 Indian IT firm, consultant for 60+ startups across fintech, logistics, and SaaS.",
  },
  {
    title: "Startup Ecosystem Advisor",
    exp: "15 years",
    background: "Serial entrepreneur with 3 successful exits, active angel investor, and advisor to India's startup accelerators.",
  },
  {
    title: "Technology Architect",
    exp: "20 years",
    background: "Built systems at scale for Fortune 500 companies before joining Muvonark to lead architecture and DevOps practice.",
  },
  {
    title: "Growth & Strategy Consultant",
    exp: "16 years",
    background: "Helped 30+ early-stage companies define their go-to-market, product-market fit, and scaling playbooks.",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] pt-20">
      {/* Header */}
      <div className="bg-[#0D1B3E] py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[#2B7BE5]/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-4">About Muvonark</p>
          <h1 className="text-5xl lg:text-6xl text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            An Indian startup, building for every startup
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            We are Muvonark — a 150+ strong technology company based in India, dedicated to giving every startup — tech or non-tech, Indian or global — access to the kind of engineering talent that was once reserved for funded unicorns.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-4xl text-[#0D1B3E] mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              Born from the startup struggle
            </h2>
            <div className="space-y-4 text-[#5A6A8A] leading-relaxed">
              <p>
                Muvonark was founded by professionals who spent years watching great startup ideas fail — not because the founders lacked vision, but because they couldn't access the right technical support at the right cost.
              </p>
              <p>
                We set out to fix that. We assembled a team of domain specialists — designers, engineers, data scientists, business consultants — and created a model where startups could get enterprise-grade technology without enterprise-scale budgets.
              </p>
              <p>
                Today, we're a 150+ person team supporting startups across India and worldwide. We build web applications, ERP systems, automation platforms, mobile apps, and AI tools. We also run one of India's most hands-on student contribution programs — giving aspiring engineers real production experience from day one.
              </p>
              <p>
                We're not just a technology company. We're a partner that ships with you, learns with you, and grows with you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-56 bg-[#EEF1F6]">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop&auto=format" alt="Team collaboration" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-56 mt-8 bg-[#EEF1F6]">
              <img src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=500&h=400&fit=crop&auto=format" alt="Office environment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="bg-[#0D1B3E] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl text-white mb-10 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            150+ specialists across every domain
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {domains.map((d) => (
              <div key={d.role} className="bg-white/6 rounded-2xl p-5 border border-white/8 hover:border-[#2B7BE5]/40 transition-colors">
                <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>{d.count}</div>
                <div className="text-white/50 text-sm">{d.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-3">What Makes Us Different</p>
            <h2 className="text-4xl text-[#0D1B3E]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              A model built for the real world
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-[#0D1B3E]/8">
                <div className="w-11 h-11 rounded-xl bg-[#EBF1FC] flex items-center justify-center mb-5">
                  <v.icon className="w-5 h-5 text-[#2B7BE5]" />
                </div>
                <h3 className="text-[#0D1B3E] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{v.title}</h3>
                <p className="text-[#5A6A8A] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors / Business Intelligence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-3">Our Advisors</p>
            <h2 className="text-4xl text-[#0D1B3E] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              Business intelligence with 15+ years of real-world expertise
            </h2>
            <p className="text-[#5A6A8A] leading-relaxed">
              We're guided by working professionals, startup founders, and business consultants who bring decades of real-world experience to every project — not just theoretical frameworks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mentors.map((m) => (
              <div key={m.title} className="p-7 rounded-2xl border border-[#0D1B3E]/8 hover:border-[#2B7BE5]/30 hover:shadow-xl hover:shadow-[#0D1B3E]/5 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0D1B3E] to-[#2B7BE5] flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#0D1B3E]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{m.title}</h3>
                    <span className="text-[#2B7BE5] text-sm font-semibold">{m.exp} experience</span>
                  </div>
                </div>
                <p className="text-[#5A6A8A] text-sm leading-relaxed">{m.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Program CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0D1B3E] to-[#1a3470] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #2B7BE5 0%, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-2">For Students</p>
            <h2 className="text-3xl text-white mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Work on live projects. Not internship-style practice runs.</h2>
            <p className="text-white/50 max-w-xl">
              We're one of the very few companies in India — and the world — where student contributors work on real, client-facing, production projects from day one.
            </p>
          </div>
          <Link to="/careers#students" className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2B7BE5] text-white font-semibold hover:bg-[#1E6DD4] transition-colors">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
