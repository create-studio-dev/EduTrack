import { useEffect, useState, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PreviewApp } from "@/components/PreviewApp";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { HowItWorks } from "@/components/HowItWorks";
import { Installation } from "@/components/Installation";
import { Security } from "@/components/Security";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingInstallButton } from "@/components/FloatingInstallButton";
import { ScreenshotsPage } from "@/components/ScreenshotsPage";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);

    const sections = document.querySelectorAll("[data-section]");
    let current = "hero";
    sections.forEach((section) => {
      const el = section as HTMLElement;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2) {
        current = el.dataset.section || "hero";
      }
    });
    setActiveSection(current);
  }, []);

  useEffect(() => {
    if (currentPath === "/") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll, currentPath]);

  // Route to screenshots page
  if (currentPath === "/screenshots") {
    return <ScreenshotsPage />;
  }

  // Main landing page
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F8FAFC]">
      <Navbar scrolled={scrolled} activeSection={activeSection} />

      <main>
        <Hero />
        <PreviewApp />
        <Features />
        <Gallery />
        <HowItWorks />
        <Installation />
        <Security />
        <FAQ />
        <CTA />
      </main>

      <Footer />

      <FloatingInstallButton />
    </div>
  );
}
