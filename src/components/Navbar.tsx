import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { Menu, X, SmartphoneIcon } from "lucide-react";

const logoSrc = "/assets/images/logo_no_background.png";

const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#preview", label: "Preview" },
  { href: "#features", label: "Fitur" },
  { href: "#gallery", label: "Galeri" },
  { href: "#how-it-works", label: "Cara Kerja" },
  { href: "#installation", label: "Instalasi" },
  { href: "#faq", label: "FAQ" },
];

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
}

export function Navbar({ scrolled, activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "top-3 left-4 right-4 md:left-8 md:right-8"
            : "top-0 left-0 right-0"
        )}
      >
        <nav
          className={cn(
            "mx-auto transition-all duration-500",
            scrolled
              ? "glass max-w-5xl rounded-2xl shadow-lg shadow-primary/5 px-4 py-3 md:px-6"
              : "max-w-full bg-transparent px-4 py-4 md:px-8"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2.5 group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden bg-white shadow-md shadow-primary/15 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300 border border-border/40">
                <img src={logoSrc} alt="EduTrack Logo" className="h-8 w-8 object-contain" />
              </div>
              <span className="hidden sm:block text-sm font-semibold tracking-tight text-primary">
                EduTrack
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300",
                        isActive
                          ? "text-primary bg-primary/6"
                          : "text-text-secondary hover:text-primary hover:bg-primary/4"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-primary rounded-full" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#installation"
                onClick={(e) => handleNavClick(e, "#installation")}
                className="hidden md:inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:bg-primary-light transition-all duration-300"
              >
                <SmartphoneIcon className="h-4 w-4" />
                Install Aplikasi
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary/5 text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-all duration-400",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl lg:hidden transition-transform duration-400 ease-out",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border-light">
          <span className="text-sm font-semibold text-primary">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-primary/5 text-primary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul className="flex flex-col gap-1 px-3 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 text-[14px] font-medium text-text-secondary hover:text-primary hover:bg-primary/4 rounded-lg transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3 px-2">
            <a
              href="#installation"
              onClick={(e) => handleNavClick(e, "#installation")}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-[14px] font-semibold text-white shadow-md shadow-primary/20"
            >
              <SmartphoneIcon className="h-4 w-4" />
              Install Aplikasi
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
