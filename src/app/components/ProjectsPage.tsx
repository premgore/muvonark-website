import { useState } from "react";
import { Link } from "react-router";
import { 
  CheckCircle2, Clock, Rocket, ArrowRight, Layers, 
  Terminal, ShieldCheck, Database, Server, Code2 
} from "lucide-react";

import crmImg from "../../assets/crm 3.47.10 PM.jpg";
import erpImg from "../../assets/erp.jpg";
import billingImg from "../../assets/billing.jpg";
import paymentImg from "../../assets/payment.jpg";
import foodDeliveryImg from "../../assets/food-delivery 3.46.27 PM.jpg";
import vendorBookingImg from "../../assets/vendor-booking.jpg";
import studentLabImg from "../../assets/ai/students.jpg";

interface SelectedBuild {
  id: string;
  name: string;
  category: string;
  status: "Completed & Deployed" | "In Active Development" | "Prototype & Exploration";
  statusType: "completed" | "in-progress" | "coming-soon";
  problem: string;
  whatWeBuilt: string;
  techStack: string[];
  verifiedOutcome: string;
  image?: string;
  link?: string;
}

const selectedBuilds: SelectedBuild[] = [
  {
    id: "crm-fintech",
    name: "Enterprise CRM & Pipeline Engine",
    category: "Enterprise Software",
    status: "Completed & Deployed",
    statusType: "completed",
    problem: "A growing financial technology startup struggled with unorganized client follow-ups across disjointed spreadsheets and email inboxes.",
    whatWeBuilt: "A centralized customer relationship management platform featuring visual lead pipelines, automated follow-up reminders, role-based access, and analytics.",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis"],
    verifiedOutcome: "Deployed into production for the client team, standardizing their daily customer interaction pipeline.",
    image: crmImg
  },
  {
    id: "erp-manufacturing",
    name: "Integrated Manufacturing ERP",
    category: "Enterprise Operations",
    status: "Completed & Deployed",
    statusType: "completed",
    problem: "A mid-size manufacturing operation required unified tracking of inventory, procurement, payroll, and billing across three regional warehouses.",
    whatWeBuilt: "An end-to-end custom ERP unifying stock ledger, purchase order reconciliation, employee attendance, and real-time inventory alerts.",
    techStack: ["Next.js", "Django", "PostgreSQL", "Celery"],
    verifiedOutcome: "Replaced three disconnected legacy tools into a single source of operational truth.",
    image: erpImg
  },
  {
    id: "gst-billing",
    name: "Automated GST Invoicing System",
    category: "Billing & Finance",
    status: "Completed & Deployed",
    statusType: "completed",
    problem: "Manual generation of GST-compliant invoices and multi-currency export billings was causing high administrative lag and human calculation errors.",
    whatWeBuilt: "An automated billing application with recurring invoice generation, automated overdue notices, multi-currency ledger, and export compliance.",
    techStack: ["Vue.js", "Node.js", "MySQL", "Razorpay"],
    verifiedOutcome: "Eliminated manual spreadsheet calculations and automated recurring monthly client invoices.",
    image: billingImg
  },
  {
    id: "payment-gateway",
    name: "Unified Multi-Gateway Payment Layer",
    category: "Fintech Infrastructure",
    status: "Completed & Deployed",
    statusType: "completed",
    problem: "Businesses needed a unified API layer that could gracefully handle payment gateway failovers and webhook reconciliation.",
    whatWeBuilt: "A payment orchestration layer supporting Razorpay, Stripe, and UPI with automatic retries, webhook signature verification, and dispute dashboards.",
    techStack: ["Node.js", "Razorpay", "Stripe", "PostgreSQL"],
    verifiedOutcome: "Implemented automated webhook reconciliation across multi-provider checkout funnels.",
    image: paymentImg
  },
  {
    id: "ai-interview",
    name: "AI Candidate Evaluation System",
    category: "AI Platform",
    status: "In Active Development",
    statusType: "in-progress",
    problem: "Initial candidate resume screening and basic technical question rounds consumed massive senior engineering bandwidth.",
    whatWeBuilt: "An AI-assisted technical screening platform with structured dynamic questions, response transcription, scoring Rubrics, and candidate summaries.",
    techStack: ["Python", "FastAPI", "React", "OpenAI API"],
    verifiedOutcome: "In active internal testing for student contributor and developer screening cohorts.",
    image: studentLabImg
  },
  {
    id: "food-delivery",
    name: "Full-Stack Logistics & Delivery App",
    category: "Mobile & Logistics",
    status: "In Active Development",
    statusType: "in-progress",
    problem: "Regional food vendors needed an independent ordering and live rider dispatch tracking platform without high aggregator margins.",
    whatWeBuilt: "Cross-platform customer mobile application, restaurant order manager dashboard, and rider dispatch system with live GPS tracking.",
    techStack: ["React Native", "Node.js", "Socket.io", "Google Maps"],
    verifiedOutcome: "Mobile client application and driver routing engines currently in beta testing.",
    image: foodDeliveryImg
  },
  {
    id: "affisphere-platform",
    name: "AffiSphere Ecosystem Platform",
    category: "Affiliate & Education",
    status: "In Active Development",
    statusType: "in-progress",
    problem: "Students lack real production project exposure while early-stage startups struggle to source motivated technical contributors.",
    whatWeBuilt: "An ecosystem platform bridging student training programs, live industry builds, and affiliate growth tools into a unified community.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "AWS"],
    verifiedOutcome: "Training modules and project contributor intake pathways active with verified applicants.",
    link: "/affisphere"
  },
  {
    id: "vendor-booking",
    name: "Two-Sided Vendor Services Marketplace",
    category: "Marketplace Platform",
    status: "Prototype & Exploration",
    statusType: "coming-soon",
    problem: "Finding and booking verified vendors across logistics, catering, and corporate events involved high friction and uncertain pricing.",
    whatWeBuilt: "A marketplace prototype with vendor portfolio verifications, instant calendar availability, smart categorization, and deposit escrows.",
    techStack: ["React", "Node.js", "PostgreSQL", "Algolia"],
    verifiedOutcome: "Architecture prototype designed and scheduled for partner pilot testing.",
    image: vendorBookingImg
  }
];

export function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? selectedBuilds : selectedBuilds.filter(b => b.statusType === filter);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>Selected Builds Archive</span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built While We Were Learning. Built While We Were Growing.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Muvonark has continuously experimented across software engineering, business automation, commerce, education, and distributed systems. Here is an authentic, transparent record of what we built, what problem we solved, and the technologies we used.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 pt-4">
          {[
            { id: "all", label: "All Selected Builds" },
            { id: "completed", label: "Completed & Deployed" },
            { id: "in-progress", label: "In Active Development" },
            { id: "coming-soon", label: "Prototypes & Exploration" }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                filter === f.id
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/10 font-bold"
                  : "bg-[#090E1C] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => {
            const statusConfig = {
              "completed": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
              "in-progress": "bg-amber-500/15 text-amber-300 border-amber-500/30",
              "coming-soon": "bg-blue-500/15 text-blue-300 border-blue-500/30"
            }[item.statusType];

            const CardContent = (
              <div className="h-full flex flex-col justify-between p-6 rounded-2xl glass-panel border border-white/10 hover:border-blue-500/30 transition-all group space-y-6">
                <div className="space-y-4">
                  {/* Image if available */}
                  {item.image && (
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#050811] border border-white/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono border backdrop-blur-md ${statusConfig}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  )}

                  {!item.image && (
                    <div className="flex items-center justify-between pb-2">
                      <span className="text-xs font-mono text-cyan-400">{item.category}</span>
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono border ${statusConfig}`}>
                        {item.status}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 block mt-0.5">{item.category}</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <strong className="text-slate-300 font-mono">The Problem: </strong>
                      <span className="text-slate-400 leading-relaxed">{item.problem}</span>
                    </div>
                    <div>
                      <strong className="text-slate-300 font-mono">What We Built: </strong>
                      <span className="text-slate-400 leading-relaxed">{item.whatWeBuilt}</span>
                    </div>
                    <div>
                      <strong className="text-emerald-400 font-mono">Verified Outcome: </strong>
                      <span className="text-slate-400 leading-relaxed">{item.verifiedOutcome}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {item.link && (
                    <div className="flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300 pt-1">
                      <span>View Ecosystem Page</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </div>
              </div>
            );

            if (item.link) {
              return (
                <Link key={item.id} to={item.link} className="block">
                  {CardContent}
                </Link>
              );
            }

            return <div key={item.id}>{CardContent}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
