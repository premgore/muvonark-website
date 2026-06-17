import { Link } from "react-router";
import { Linkedin, Twitter, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/Muvonark.png";

const footerLinks = {
  Services: [
    { label: "Web Applications", href: "/services#web" },
    { label: "ERP & CRM Systems", href: "/services#erp" },
    { label: "AI & Automation", href: "/services#ai" },
    { label: "DevOps & Cloud", href: "/services#devops" },
    { label: "UI/UX Design", href: "/services#design" },
    { label: "Payment Integration", href: "/services#payments" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  "For Students": [
    { label: "Apply Now", href: "/careers#students" },
    { label: "Real Projects", href: "/projects" },
    { label: "Internships", href: "/careers#internship" },
    { label: "Part-Time Roles", href: "/careers#parttime" },
    { label: "Mentorship", href: "/about#mentors" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0D1B3E] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Muvonark"
                className="h-14 w-auto object-contain"
              />

              <div className="flex flex-col">
                <span
                  className="font-bold text-xl tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Muvonark
                </span>

                <span className="text-xs text-white/60">
                  Empowering Students & Startups
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Empowering Indian and global startups with cutting-edge technology. We build the software that runs your business.
            </p>
            <div className="flex items-center gap-1 mb-3">
              <MapPin className="w-4 h-4 text-[#2B7BE5] flex-shrink-0" />
              <span className="text-white/60 text-sm">India 🇮🇳 — Built with pride</span>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <Mail className="w-4 h-4 text-[#2B7BE5] flex-shrink-0" />
              <span className="text-white/60 text-sm">muvonark@premgore.in</span>
            </div>
            <div className="flex items-center gap-1 mb-6">
              <Phone className="w-4 h-4 text-[#2B7BE5] flex-shrink-0" />
              <span className="text-white/60 text-sm">+91 7666760842</span>
            </div>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#2B7BE5] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">{section}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/40 text-sm">© 2026 Muvonark Talent Network All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-white/30 text-xs">Made in</span>
            <span className="text-sm">🇮🇳</span>
            <span className="text-white/30 text-xs">India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
