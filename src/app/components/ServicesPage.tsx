import { Globe, Database, Cpu, Cloud, Code2, Palette, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Applications",
    subtitle: "From landing pages to SaaS platforms",
    desc: "We design and develop scalable, performant web applications using the latest frontend and backend technologies. Whether you need a customer-facing portal, an internal tool, or a full SaaS product, our full-stack engineers deliver it with care.",
    features: [
      "React, Next.js, Vue.js frontends",
      "Node.js, Django, FastAPI backends",
      "PostgreSQL, MongoDB, Redis databases",
      "REST APIs and GraphQL",
      "Responsive across all devices",
      "Performance-optimized and SEO-ready",
    ],
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "erp",
    icon: Database,
    title: "ERP & CRM Systems",
    subtitle: "Centralize your operations",
    desc: "Off-the-shelf software rarely fits. We build custom ERP and CRM systems that match exactly how your business runs — from inventory and billing to customer pipelines and HR, all in one integrated platform.",
    features: [
      "Custom ERP for your business flows",
      "CRM with pipeline management",
      "Billing and invoicing modules",
      "Inventory and supply chain tracking",
      "HR, attendance, and payroll",
      "Role-based access control",
    ],
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI & Automation",
    subtitle: "Work smarter, not harder",
    desc: "We help businesses automate repetitive workflows and integrate AI capabilities — from smart data processing and NLP to AI-powered customer support bots and predictive analytics dashboards.",
    features: [
      "Workflow automation with n8n / Zapier-style flows",
      "OpenAI / Gemini API integrations",
      "Document processing with AI (OCR + NLP)",
      "AI chatbots for customer support",
      "Predictive analytics dashboards",
      "Custom ML model deployment",
    ],
    img: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "devops",
    icon: Cloud,
    title: "DevOps & Cloud",
    subtitle: "Reliable infrastructure at any scale",
    desc: "We set up and manage cloud infrastructure, CI/CD pipelines, container orchestration, and monitoring so your team can ship fast without downtime. We work with AWS, GCP, Azure, and DigitalOcean.",
    features: [
      "AWS, GCP, Azure deployments",
      "Docker & Kubernetes orchestration",
      "CI/CD with GitHub Actions / GitLab",
      "Infrastructure as Code (Terraform)",
      "Monitoring with Grafana / Datadog",
      "Auto-scaling and cost optimization",
    ],
    img: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "payments",
    icon: Code2,
    title: "Payment Integration",
    subtitle: "Seamless, secure transaction flows",
    desc: "We integrate industry-leading payment gateways — Razorpay, Stripe, PayU, and UPI — with multi-currency support, automated reconciliation, and fraud detection baked in from the start.",
    features: [
      "Razorpay, Stripe, PayU, UPI",
      "Multi-currency and international payments",
      "Subscription and recurring billing",
      "Refund and dispute management",
      "PCI-compliant implementations",
      "Payment analytics and reporting",
    ],
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "Interfaces people love to use",
    desc: "Our senior UI/UX designers craft beautiful, conversion-optimized interfaces backed by user research. We deliver wireframes, high-fidelity Figma designs, interactive prototypes, and full design systems.",
    features: [
      "User research and persona mapping",
      "Wireframing and prototyping in Figma",
      "Design systems and component libraries",
      "Mobile-first responsive design",
      "A/B testing and usability studies",
      "Handoff-ready specs for developers",
    ],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&auto=format",
  },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] pt-20">
      {/* Header */}
      <div className="bg-[#0D1B3E] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-5xl lg:text-6xl text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Everything your startup needs to scale
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            One partner. Full stack. From design to deployment — our 150+ specialists cover every layer of your technology.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-24">
        {services.map((s, i) => (
          <div
            key={s.id}
            id={s.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}
          >
            <div className={i % 2 !== 0 ? "[direction:ltr]" : ""}>
              <div className="w-12 h-12 rounded-xl bg-[#EBF1FC] flex items-center justify-center mb-6">
                <s.icon className="w-6 h-6 text-[#2B7BE5]" />
              </div>
              <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-2">{s.subtitle}</p>
              <h2 className="text-4xl text-[#0D1B3E] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{s.title}</h2>
              <p className="text-[#5A6A8A] text-base leading-relaxed mb-7">{s.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2B7BE5] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#0D1B3E]">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0D1B3E] text-white font-semibold hover:bg-[#2B7BE5] transition-colors"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className={i % 2 !== 0 ? "[direction:ltr]" : ""}>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#0D1B3E]/10 bg-[#EEF1F6]">
                <img loading="lazy" src={s.img} alt={s.title} className="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#0D1B3E] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Not sure which service you need?</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">Talk to our consultants. We'll map out the right tech strategy for your business — free of charge.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2B7BE5] text-white font-semibold hover:bg-[#1E6DD4] transition-colors">
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
