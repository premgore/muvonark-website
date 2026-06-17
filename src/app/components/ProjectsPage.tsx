import { useState } from "react";
import { CheckCircle2, Clock, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import crmImg from "../../assets/projects/crm.png";
import erpImg from "../../assets/projects/erp.png";

// If these files don't exist yet, comment them temporarily
// import saasImg from "../../assets/projects/saas.png";

import billingImg from "../../assets/projects/billing.png";
import paymentImg from "../../assets/projects/payment.png";
import foodDeliveryImg from "../../assets/projects/food-delivery.png";
import aiInterviewImg from "../../assets/projects/ai-interview.png";
import ecommerceImg from "../../assets/projects/ecommerce.png";

// If these files don't exist yet, comment them temporarily
// import affisphereImg from "../../assets/projects/affisphere.png";

import vendorBookingImg from "../../assets/projects/vendor-booking.png";

const projects = [
  /* ── Completed ── */
  {
    status: "completed",
    category: "Enterprise Software",
    title: "CRM System",
    desc: "End-to-end customer relationship management with pipeline tracking, automated follow-ups, analytics dashboards, and email integration. Built for a FinTech startup with 10,000+ monthly users.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    img: crmImg,
  },
  {
    status: "completed",
    category: "Enterprise Software",
    title: "ERP System",
    desc: "A full-featured ERP covering inventory, procurement, HR, payroll, billing, and financial reporting — replacing three legacy tools for a mid-size manufacturing company.",
    tags: ["Next.js", "Django", "PostgreSQL", "Celery"],
    img: erpImg,
  },
  {
    status: "completed",
    category: "Billing Software",
    title: "Billing & Invoicing System",
    desc: "Automated GST-compliant billing software with recurring invoices, overdue reminders, multi-currency support, and Tally integration for an exports business.",
    tags: ["Vue.js", "Node.js", "MySQL", "Razorpay"],
    img: billingImg,
  },
  {
    status: "completed",
    category: "Payment Integration",
    title: "Multi-Gateway Payment System",
    desc: "A unified payment layer handling Razorpay, Stripe, PayU, and UPI with auto-reconciliation, dispute management, and real-time transaction dashboards.",
    tags: ["Node.js", "Razorpay", "Stripe", "PostgreSQL"],
    img: paymentImg,
  },

  /* ── In Progress ── */
  {
    status: "in-progress",
    category: "Mobile App",
    title: "Food Delivery Application",
    desc: "A full-stack food delivery platform with real-time order tracking, restaurant management, rider app, and customer-facing mobile app (iOS + Android) — currently in beta testing.",
    tags: ["React Native", "Node.js", "Socket.io", "Google Maps"],
    img: foodDeliveryImg,
  },
  {
    status: "in-progress",
    category: "AI Platform",
    title: "AI Interview System",
    desc: "An AI-powered interview platform with real-time speech analysis, structured question banks, automated scoring, and detailed candidate reports — built to replace manual HR screening.",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    img: aiInterviewImg,
  },
  {
    status: "in-progress",
    category: "E-Commerce",
    title: "E-Commerce Marketplace",
    desc: "A B2B2C e-commerce marketplace with vendor management, product catalogue, bulk ordering, and integrated logistics — targeting D2C brands in tier-2 Indian cities.",
    tags: ["Next.js", "Medusa.js", "Stripe", "Elasticsearch"],
    img: ecommerceImg,
  },

  /* ── Coming Soon ── */
  {
    status: "coming-soon",
    category: "Affiliate Marketing",
    title: "Affisphere",
    desc: "A full-stack affiliate marketing platform with real-time click and conversion tracking, publisher dashboards, automated payout systems, and fraud detection. Signed and launching Q3 2025.",
    tags: ["Next.js", "Stripe Connect", "Redis", "ClickHouse"],
    img: "",
  },
  {
    status: "coming-soon",
    category: "Marketplace",
    title: "Vendors Booking Platform",
    desc: "A two-sided marketplace for booking verified vendors across events, catering, logistics, and services — with instant booking, smart matching, and escrow-backed payments. Launching Q4 2025.",
    tags: ["React", "Node.js", "Razorpay", "Algolia"],
    img: vendorBookingImg,
  },
];

const statusConfig = {
  "completed": {
    label: "Completed",
    icon: CheckCircle2,
    badge: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    accent: "text-emerald-600",
  },
  "in-progress": {
    label: "In Progress",
    icon: Clock,
    badge: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
    accent: "text-amber-600",
  },
  "coming-soon": {
    label: "Coming Soon",
    icon: Rocket,
    badge: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    accent: "text-blue-600",
  },
};

const filterOptions = [
  { id: "all", label: "All Projects" },
  { id: "completed", label: "Completed" },
  { id: "in-progress", label: "In Progress" },
  { id: "coming-soon", label: "Coming Soon" },
];

export function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.status === filter);

  const grouped = {
    completed: filtered.filter((p) => p.status === "completed"),
    "in-progress": filtered.filter((p) => p.status === "in-progress"),
    "coming-soon": filtered.filter((p) => p.status === "coming-soon"),
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] pt-20">
      {/* Header */}
      <div className="bg-[#0D1B3E] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-4">Our Projects</p>
          <h1 className="text-5xl lg:text-6xl text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Projects we've built, are building, and have signed
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            From completed production systems to active builds and upcoming launches — here's a transparent view of what we do.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-14">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${filter === f.id
                ? "bg-[#0D1B3E] text-white"
                : "bg-white text-[#5A6A8A] border border-[#0D1B3E]/10 hover:border-[#2B7BE5]/30 hover:text-[#2B7BE5]"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grouped sections */}
        {(["completed", "in-progress", "coming-soon"] as const).map((statusKey) => {
          const items = grouped[statusKey];
          if (items.length === 0) return null;
          const sc = statusConfig[statusKey];
          const Icon = sc.icon;

          return (
            <div key={statusKey} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Icon className={`w-5 h-5 ${sc.accent}`} />
                <h2 className="text-2xl text-[#0D1B3E]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                  {sc.label}
                </h2>
                <span className="px-3 py-1 rounded-full bg-[#EEF1F6] text-[#5A6A8A] text-sm font-medium">{items.length} project{items.length > 1 ? "s" : ""}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((p) => (
                  <div
                    key={p.title}
                    className={`bg-white rounded-2xl overflow-hidden border hover:shadow-xl hover:shadow-[#0D1B3E]/8 transition-all duration-300 ${sc.border}`}
                  >
                    <div className="relative h-48 overflow-hidden bg-[#EEF1F6]">
                      {p.img && <img src={p.img} alt={p.title} className="w-full h-full object-cover" />}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${sc.badge}`}>
                          <Icon className="w-3 h-3" />
                          {sc.label}
                        </span>
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
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA */}
        <div className="mt-10 p-10 bg-[#0D1B3E] rounded-2xl text-center">
          <h2 className="text-3xl text-white mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Have a project in mind?</h2>
          <p className="text-white/50 mb-7 max-w-md mx-auto">Tell us what you need — we'll scope it, quote it, and build it.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2B7BE5] text-white font-semibold hover:bg-[#1E6DD4] transition-colors">
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
