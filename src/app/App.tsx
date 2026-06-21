import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { InsightsPage } from "./components/InsightsPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { AboutPage } from "./components/AboutPage";
import { CareersPage } from "./components/CareersPage";
import { ContactPage } from "./components/ContactPage";
import { AffiSpherePage } from "./components/AffiSpherePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/affisphere" element={<AffiSpherePage />} />
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
