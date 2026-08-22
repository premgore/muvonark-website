import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router";
import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ProductsPage } from "./components/ProductsPage";
import { WhatsBizPage } from "./components/WhatsBizPage";
import { NirnayaPage } from "./components/NirnayaPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { SolutionsPage } from "./components/SolutionsPage";
import { ResearchPage } from "./components/ResearchPage";
import { ResearchTopicPage } from "./components/ResearchTopicPage";
import { EngineeringPage } from "./components/EngineeringPage";
import { StudentsPage } from "./components/StudentsPage";
import { CareersPage } from "./components/CareersPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { AffiSpherePage } from "./components/AffiSpherePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070B14] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Routes>
          {/* Main Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Products Suite */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/whatsbiz" element={<WhatsBizPage />} />
          <Route path="/products/nirnaya" element={<NirnayaPage />} />

          {/* Solutions & Selected Builds */}
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/services" element={<Navigate to="/solutions" replace />} />
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Research & Investigations */}
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:topic" element={<ResearchTopicPage />} />
          <Route path="/insights" element={<Navigate to="/research" replace />} />

          {/* Engineering & Philosophy */}
          <Route path="/engineering" element={<EngineeringPage />} />

          {/* Ecosystem: Students & Careers */}
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/affisphere" element={<AffiSpherePage />} />

          {/* Company & Contact */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
