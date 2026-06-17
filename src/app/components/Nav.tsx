import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Code2, Cpu, Globe, Database, Cloud, Palette } from "lucide-react";
import logo from "../../assets/Muvonark.png";

const services = [
  { icon: Globe, label: "Web Applications", href: "/services#web" },
  { icon: Database, label: "ERP & CRM Systems", href: "/services#erp" },
  { icon: Cpu, label: "AI & Automation", href: "/services#ai" },
  { icon: Cloud, label: "DevOps & Cloud", href: "/services#devops" },
  { icon: Code2, label: "Full-Stack Development", href: "/services#fullstack" },
  { icon: Palette, label: "UI/UX Design", href: "/services#design" },
];

const navLinks = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";
  const navBg = scrolled || !isHome
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#0D1B3E]/8"
    : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-[#0D1B3E]" : "text-white";
  const logoColor = scrolled || !isHome ? "text-[#0D1B3E]" : "text-white";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Company Logo */}
            <img
              src={logo}
              alt="Muvonark"
              className="h-12 w-auto object-contain transition-all duration-300"
            />

            {/* Company Name */}
            <div className="flex flex-col">
              <span
                className={`font-bold text-2xl tracking-tight transition-colors ${logoColor}`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                Muvonark
              </span>

              <span
                className={`text-xs font-medium transition-colors ${logoColor} opacity-70`}
              >
                Talent Network
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${textColor}`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white rounded-2xl shadow-2xl border border-[#0D1B3E]/8 p-3 w-72">
                        <p className="text-xs font-semibold text-[#5A6A8A] uppercase tracking-widest px-3 py-2">What we build</p>
                        {services.map((s) => (
                          <Link
                            key={s.label}
                            to={s.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#EBF1FC] group transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#EBF1FC] group-hover:bg-[#2B7BE5] flex items-center justify-center transition-colors">
                              <s.icon className="w-4 h-4 text-[#2B7BE5] group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-sm font-medium text-[#0D1B3E]">{s.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${textColor} ${location.pathname === link.href ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#2B7BE5] text-white text-sm font-semibold hover:bg-[#1E6DD4] transition-colors shadow-md shadow-[#2B7BE5]/20"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg ${textColor}`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#0D1B3E]/8 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block px-4 py-3 rounded-xl text-sm font-medium text-[#0D1B3E] hover:bg-[#EBF1FC] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              to="/contact"
              className="block w-full text-center px-5 py-3 rounded-xl bg-[#2B7BE5] text-white text-sm font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
