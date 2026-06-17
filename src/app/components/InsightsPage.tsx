import { useState } from "react";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router";

const allInsights = [
  {
    id: 1,
    tag: "Enterprise Tech",
    category: "enterprise",
    title: "Why Indian Startups Are Finally Ready for ERP in 2026",
    excerpt: "Five years ago, an ERP felt like overkill for a 20-person startup. In 2026, the calculus has shifted — here's what changed and why you should care.",
    date: "June 10, 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=420&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 2,
    tag: "AI & Automation",
    category: "ai",
    title: "How Automation Saved a 50-Person Ops Team 200 Hours/Month",
    excerpt: "A case study on how we automated invoice processing, vendor follow-ups, and daily reports for a logistics startup in Pune.",
    date: "May 28, 2026",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=700&h=420&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 3,
    tag: "Student Programs",
    category: "culture",
    title: "Real Projects, Real Impact: How Students Are Shipping at Muvonark",
    excerpt: "We don't run fake projects at Muvonark. Every student who joins us works on a live client project from day one. Here's how that model works.",
    date: "May 15, 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=420&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 4,
    tag: "Web Dev",
    category: "dev",
    title: "Next.js vs Remix in 2026: Which Should Your Startup Pick?",
    excerpt: "Both frameworks are excellent. The right choice depends on your team's size, your data model, and your deployment target. We break it down.",
    date: "May 5, 2026",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=700&h=420&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 5,
    tag: "Business Strategy",
    category: "business",
    title: "The Non-Tech Founder's Guide to Hiring a Software Agency",
    excerpt: "Red flags, green flags, and the 10 questions you must ask before signing any contract. Written for founders who are great at their business but new to tech.",
    date: "April 22, 2026",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&h=420&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 6,
    tag: "DevOps",
    category: "dev",
    title: "Why Your Startup Needs a Proper Staging Environment (And How to Build One)",
    excerpt: "Shipping directly to production is a rite of passage for early-stage startups. At some point, it stops being brave and starts being reckless.",
    date: "April 10, 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&h=420&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 7,
    tag: "AI & Automation",
    category: "ai",
    title: "Building an AI Interview System: What We Learned After 3 Months",
    excerpt: "We're building Muvonark's own AI interview platform. Here's a behind-the-scenes look at the architecture decisions, the mistakes, and what's left.",
    date: "March 30, 2026",
    readTime: "9 min read",
    img: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=700&h=420&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 8,
    tag: "Enterprise Tech",
    category: "enterprise",
    title: "Payment Reconciliation in India: Why It's Harder Than You Think",
    excerpt: "Multi-gateway, multi-bank, UPI, NEFT, IMPS — reconciling payments in India is a unique challenge. Here's how we solved it for a B2B SaaS company.",
    date: "March 15, 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=420&fit=crop&auto=format",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "enterprise", label: "Enterprise Tech" },
  { id: "ai", label: "AI & Automation" },
  { id: "dev", label: "Development" },
  { id: "business", label: "Business Strategy" },
  { id: "culture", label: "Culture" },
];

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? allInsights
    : allInsights.filter((a) => a.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-[#F8F9FB] pt-20">
      {/* Header */}
      <div className="bg-[#0D1B3E] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-4">Insights</p>
          <h1 className="text-5xl lg:text-6xl text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Ideas, perspectives & deep dives
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Written by our engineers, designers, and business consultants — for founders who want to build smarter.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === c.id
                ? "bg-[#0D1B3E] text-white"
                : "bg-white text-[#5A6A8A] border border-[#0D1B3E]/10 hover:border-[#2B7BE5]/30 hover:text-[#2B7BE5]"
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {featured && (
          <Link to="/insights" className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#0D1B3E]/8 bg-white mb-10 hover:shadow-xl hover:shadow-[#0D1B3E]/8 transition-all duration-300">
            <div className="h-64 lg:h-auto overflow-hidden bg-[#EEF1F6]">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-3.5 h-3.5 text-[#2B7BE5]" />
                <span className="text-[#2B7BE5] text-xs font-semibold uppercase tracking-wider">{featured.tag}</span>
                <span className="text-[#5A6A8A] text-xs">· Featured</span>
              </div>
              <h2 className="text-3xl text-[#0D1B3E] mb-4 leading-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{featured.title}</h2>
              <p className="text-[#5A6A8A] mb-6 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-[#5A6A8A] text-sm">
                <span>{featured.date}</span>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featured.readTime}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[#2B7BE5] font-semibold text-sm group-hover:gap-3 transition-all">
                Read article <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((a) => (
            <Link
              key={a.id}
              to="/insights"
              className="group bg-white rounded-2xl overflow-hidden border border-[#0D1B3E]/8 hover:shadow-xl hover:shadow-[#0D1B3E]/8 transition-all duration-300"
            >
              <div className="h-44 overflow-hidden bg-[#EEF1F6]">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-3 h-3 text-[#2B7BE5]" />
                  <span className="text-[#2B7BE5] text-xs font-semibold uppercase tracking-wider">{a.tag}</span>
                </div>
                <h3 className="text-[#0D1B3E] mb-2 leading-snug" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{a.title}</h3>
                <p className="text-[#5A6A8A] text-sm leading-relaxed mb-4 line-clamp-2">{a.excerpt}</p>
                <div className="flex items-center gap-3 text-[#5A6A8A] text-xs">
                  <span>{a.date}</span>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{a.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
