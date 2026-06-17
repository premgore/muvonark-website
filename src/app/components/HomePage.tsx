import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, Globe, Database, Cpu, Cloud, Code2, Palette, CheckCircle2, ChevronRight, Star, Zap, Users, Briefcase, TrendingUp } from "lucide-react";

/* ─── Partners ─── */
const partners = [
  "Unstage", "Pringtrix", "Astro-AI", "Graduate Business Corp", "NexaForge", "DataPilot",
  "CloudNest", "Veridian Tech", "Luminos Systems", "OrbitSoft", "Pinnacle Labs", "QuantumByte",
  "SynapseIO", "TerraSync", "VaultEdge", "WaveStack", "XcelCore", "Zyntara", "Buildify",
  "Codematrix", "Deepflow Analytics", "EdgeMind", "FusionBase", "GridLogic", "HorizonAI",
  "IntelliForge", "JetStream Labs", "KodeVault", "LaunchPad.io", "MindBridge", "NodeSphere",
  "Opticraft", "ProximaX", "Rootsy",
];

/* ─── Services ─── */
const services = [
  { icon: Globe, title: "Web Applications", desc: "Scalable, responsive web apps built with modern frameworks — React, Next.js, Node.js.", color: "#2B7BE5" },
  { icon: Database, title: "ERP & CRM Systems", desc: "End-to-end enterprise systems that streamline operations, inventory, HR, and customer relationships.", color: "#0D1B3E" },
  { icon: Cpu, title: "AI & Automation", desc: "Automate repetitive workflows, deploy ML models, and build AI-powered features into your products.", color: "#2B7BE5" },
  { icon: Cloud, title: "DevOps & Cloud", desc: "CI/CD pipelines, containerization, AWS/GCP deployments — we keep your infrastructure rock solid.", color: "#0D1B3E" },
  { icon: Code2, title: "Payment Integration", desc: "Razorpay, Stripe, UPI, and multi-gateway payment systems with bulletproof security.", color: "#2B7BE5" },
  { icon: Palette, title: "UI/UX Design", desc: "Pixel-perfect interfaces crafted by senior designers with 10+ years of product design experience.", color: "#0D1B3E" },
];

/* ─── Insights ─── */
const insights = [
  {
    tag: "Enterprise Tech",
    title: "Why Indian Startups Are Finally Ready for ERP",
    date: "June 10, 2025",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=360&fit=crop&auto=format",
  },
  {
    tag: "AI & Automation",
    title: "How Automation Saved a 50-Person Ops Team 200 Hours/Month",
    date: "May 28, 2025",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=600&h=360&fit=crop&auto=format",
  },
  {
    tag: "Student Programs",
    title: "Real Projects, Real Impact: How Students Are Shipping at Muvonark",
    date: "May 15, 2025",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=360&fit=crop&auto=format",
  },
];

/* ─── Stats Counter ─── */
function useCounter(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

function StatBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const team = useCounter(150, 1800, visible);
  const projects = useCounter(48, 1600, visible);
  const clients = useCounter(34, 1400, visible);
  const years = useCounter(15, 1200, visible);

  const stats = [
    { value: team, suffix: "+", label: "Team Members", icon: Users },
    { value: projects, suffix: "+", label: "Projects Delivered", icon: Briefcase },
    { value: clients, suffix: "+", label: "Happy Clients", icon: Star },
    { value: years, suffix: "+", label: "Years of Combined Expertise", icon: TrendingUp },
  ];

  return (
    <div ref={ref} className="bg-[#0D1B3E] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#2B7BE5]/20 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-[#2B7BE5]" />
              </div>
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
              {s.value}{s.suffix}
            </div>
            <div className="text-white/50 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Partners Marquee ─── */
function PartnersMarquee() {
  return (
    <div className="bg-white py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#5A6A8A]">
          Trusted by 30+ partners across India and the world
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-10 animate-[marquee_35s_linear_infinite] whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-6 py-3 rounded-xl border border-[#0D1B3E]/10 bg-[#F8F9FB] text-[#0D1B3E] font-semibold text-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ─── Projects Preview ─── */
const featuredProjects = [
  {
    status: "completed",
    category: "Enterprise Software",
    title: "CRM System for FinTech Startup",
    desc: "End-to-end customer relationship management with pipeline tracking, analytics, and automated follow-ups.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&h=420&fit=crop&auto=format",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    status: "in-progress",
    category: "Mobile App",
    title: "AI Interview System",
    desc: "An AI-powered interview platform with real-time analysis, scoring, and candidate ranking — currently in active development.",
    img: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=700&h=420&fit=crop&auto=format",
    tags: ["Python", "OpenAI", "React Native"],
  },
  {
    status: "coming-soon",
    category: "Affiliate Marketing",
    title: "Affisphere — Affiliate Platform",
    desc: "A full-stack affiliate marketing platform with real-time tracking, payout automation, and publisher dashboards. Signed & launching soon.",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&h=420&fit=crop&auto=format",
    tags: ["Next.js", "Stripe", "Redis"],
  },
];

const statusConfig = {
  "completed": { label: "Completed", color: "bg-emerald-100 text-emerald-700" },
  "in-progress": { label: "In Progress", color: "bg-amber-100 text-amber-700" },
  "coming-soon": { label: "Coming Soon", color: "bg-blue-100 text-blue-700" },
};

/* ─── Main Component ─── */
export function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D1B3E]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1774069129040-05a274355383?w=1920&h=1080&fit=crop&auto=format"
            alt="Modern cityscape at dusk representing technology and growth"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E]/60 via-[#0D1B3E]/80 to-[#0D1B3E]" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "linear-gradient(rgba(43,123,229,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(43,123,229,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24">
          <div
            className="transition-all duration-1000"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(32px)" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B7BE5]/20 border border-[#2B7BE5]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#2B7BE5] animate-pulse" />
              <span className="text-[#93BEFF] text-sm font-medium">Made in India 🇮🇳 — Building for the World</span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Technology that{" "}
              <span className="text-[#2B7BE5]">powers</span>{" "}
              your startup's next chapter
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              We're a 150+ person Indian tech company building world-class software for startups — web apps, ERP systems, AI automation, and more. From idea to launch, we build it all.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2B7BE5] text-white font-semibold hover:bg-[#1E6DD4] transition-colors shadow-lg shadow-[#2B7BE5]/30"
              >
                View Our Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Start a Project
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-12 pt-12 border-t border-white/10">
              {["150+ expert team", "48+ projects shipped", "15+ years expertise", "India's best"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2B7BE5]" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* Stats */}
      <StatBar />

      {/* Services */}
      <section className="py-24 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl lg:text-5xl text-[#0D1B3E] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              Full-spectrum tech services for startups
            </h2>
            <p className="text-[#5A6A8A] text-lg leading-relaxed">
              From a simple web app to a full enterprise platform — our team of 150+ specialists delivers it end-to-end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to="/services"
                className="group bg-white rounded-2xl p-7 border border-[#0D1B3E]/8 hover:border-[#2B7BE5]/30 hover:shadow-xl hover:shadow-[#2B7BE5]/8 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{ background: i % 2 === 0 ? "#EBF1FC" : "#0D1B3E10" }}
                >
                  <s.icon className="w-6 h-6" style={{ color: s.color }} />
                </div>
                <h3 className="text-[#0D1B3E] mb-2.5" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{s.title}</h3>
                <p className="text-[#5A6A8A] text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1 text-[#2B7BE5] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#0D1B3E] text-[#0D1B3E] font-semibold hover:bg-[#0D1B3E] hover:text-white transition-all"
            >
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
              <h2 className="text-4xl lg:text-5xl text-[#0D1B3E]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                Projects that define us
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[#2B7BE5] font-semibold hover:gap-3 transition-all"
            >
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p) => {
              const sc = statusConfig[p.status as keyof typeof statusConfig];
              return (
                <Link
                  key={p.title}
                  to="/projects"
                  className="group rounded-2xl overflow-hidden border border-[#0D1B3E]/8 hover:shadow-xl hover:shadow-[#0D1B3E]/8 transition-all duration-300 bg-white"
                >
                  <div className="relative h-48 overflow-hidden bg-[#EEF1F6]">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${sc.color}`}>{sc.label}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#2B7BE5] text-xs font-semibold uppercase tracking-wider mb-2">{p.category}</p>
                    <h3 className="text-[#0D1B3E] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{p.title}</h3>
                    <p className="text-[#5A6A8A] text-sm leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg bg-[#EEF1F6] text-[#5A6A8A] text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <PartnersMarquee />

      {/* Insights */}
      <section className="py-24 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-3">Insights</p>
              <h2 className="text-4xl lg:text-5xl text-[#0D1B3E]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                Perspectives worth reading
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-[#2B7BE5] font-semibold hover:gap-3 transition-all"
            >
              All insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((a) => (
              <Link
                key={a.title}
                to="/insights"
                className="group bg-white rounded-2xl overflow-hidden border border-[#0D1B3E]/8 hover:shadow-xl hover:shadow-[#0D1B3E]/8 transition-all duration-300"
              >
                <div className="h-44 overflow-hidden bg-[#EEF1F6]">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#2B7BE5] text-xs font-semibold uppercase tracking-wider">{a.tag}</span>
                  <h3 className="text-[#0D1B3E] mt-2 mb-3 leading-snug" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{a.title}</h3>
                  <div className="flex items-center gap-3 text-[#5A6A8A] text-xs">
                    <span>{a.date}</span>
                    <span>·</span>
                    <span>{a.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0D1B3E] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #2B7BE5 0%, transparent 60%), radial-gradient(circle at 80% 50%, #2B7BE5 0%, transparent 60%)",
        }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B7BE5]/20 border border-[#2B7BE5]/30 mb-7">
            <Zap className="w-4 h-4 text-[#2B7BE5]" />
            <span className="text-[#93BEFF] text-sm font-medium">Ready to build something great?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-5 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Let's turn your vision into a product
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Whether you're a non-tech startup or a growing tech company — we bring the full team, the full stack, and the full commitment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2B7BE5] text-white font-semibold hover:bg-[#1E6DD4] transition-colors shadow-lg shadow-[#2B7BE5]/30"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
