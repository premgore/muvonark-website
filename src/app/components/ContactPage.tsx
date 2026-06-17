import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  "Web Application Development",
  "ERP / CRM System",
  "AI & Automation",
  "DevOps & Cloud",
  "UI/UX Design",
  "Payment Integration",
  "Mobile App",
  "Business Consulting",
  "Other",
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", service: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwv4J5aiPFdsDzCR7nggJe8GP8JmBzPl5eVE8m6bteO4pk1j5Xqm-7C1pp2DiZ9hNsK/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ formType: "contact", ...formData }),
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
      {/* Header */}
      <div className="bg-[#0D1B3E] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#2B7BE5] text-sm font-semibold uppercase tracking-widest mb-4">Contact Us</p>
          <h1 className="text-5xl lg:text-6xl text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Let's build something great together
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Whether you have a brief, a rough idea, or just want to talk — reach out. Our consultants respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl text-[#0D1B3E] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Get in touch</h2>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@muvonark.com", href: "mailto:hello@muvonark.com" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: MapPin, label: "Location", value: "India — Remote-First", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#0D1B3E]/8 hover:border-[#2B7BE5]/30 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EBF1FC] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2B7BE5] transition-colors">
                    <c.icon className="w-5 h-5 text-[#2B7BE5] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5A6A8A] mb-0.5">{c.label}</p>
                    <p className="text-[#0D1B3E] font-semibold text-sm">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#0D1B3E] font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>Follow us</h3>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white border border-[#0D1B3E]/10 hover:bg-[#2B7BE5] hover:border-[#2B7BE5] flex items-center justify-center transition-all group"
                >
                  <Icon className="w-4 h-4 text-[#5A6A8A] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D1B3E]">
            <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>Free consultation</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Not sure where to start? Book a free 30-minute strategy call with one of our consultants. No sales pitch — just honest advice.
            </p>
            <button className="w-full py-3 rounded-xl bg-[#2B7BE5] text-white text-sm font-semibold hover:bg-[#1E6DD4] transition-colors flex items-center justify-center gap-2">
              Book Free Call <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-[#0D1B3E]/8 p-8 lg:p-10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl text-[#0D1B3E] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Message sent!</h3>
              <p className="text-[#5A6A8A] max-w-sm mx-auto mb-6">
                Our team will get back to you within 24 hours. We look forward to learning about your project.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-[#2B7BE5] font-semibold text-sm">
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl text-[#0D1B3E] mb-7" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Tell us about your project</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Priya Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] placeholder-[#5A6A8A]/50 focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Work Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="priya@startup.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] placeholder-[#5A6A8A]/50 focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Company / Startup Name</label>
                    <input
                      type="text"
                      placeholder="Your Startup Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] placeholder-[#5A6A8A]/50 focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] placeholder-[#5A6A8A]/50 focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Service Needed *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all text-sm"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Approximate Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all text-sm"
                  >
                    <option value="">Select a budget range</option>
                    <option>Under ₹2 Lakhs</option>
                    <option>₹2–5 Lakhs</option>
                    <option>₹5–15 Lakhs</option>
                    <option>₹15–50 Lakhs</option>
                    <option>₹50 Lakhs+</option>
                    <option>Let's discuss</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-2">Describe Your Project *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what you want to build, the problem you're solving, any specific requirements, and your timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0D1B3E]/15 bg-[#F8F9FB] text-[#0D1B3E] placeholder-[#5A6A8A]/50 focus:outline-none focus:ring-2 focus:ring-[#2B7BE5]/30 focus:border-[#2B7BE5] transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#2B7BE5] text-white font-semibold hover:bg-[#1E6DD4] transition-colors text-base shadow-lg shadow-[#2B7BE5]/20 flex items-center justify-center gap-2"
                >
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
