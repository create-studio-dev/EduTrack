import { Mail, MapPin, Phone } from "lucide-react";

const logoSrc = "/images/logo_no_background.png";

const footerLinks = {
  Produk: [
    { label: "Fitur", href: "#features" },
    { label: "Galeri", href: "#gallery" },
    { label: "Instalasi", href: "#installation" },
    { label: "Keamanan", href: "#security" },
    { label: "FAQ", href: "#faq" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Karir", href: "#" },
    { label: "Kontak", href: "#" },
  ],
  Legal: [
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat Layanan", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden bg-white shadow-md shadow-primary/15 border border-border/40">
                <img src={logoSrc} alt="EduTrack Logo" className="h-8 w-8 object-contain" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-primary">
                EduTrack
              </span>
            </a>
            <p className="text-[14px] leading-relaxed text-text-secondary max-w-sm mb-5">
              Buku penghubung digital untuk orang tua dan guru TK. Dibuat
              dengan sepenuh hati untuk membantu memantau kebahagiaan anak.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-[13px] text-text-secondary">
                <Mail className="h-4 w-4 text-text-muted" />
                hello@edutrack.id
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-text-secondary">
                <Phone className="h-4 w-4 text-text-muted" />
                +62 812-3456-7890
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-text-secondary">
                <MapPin className="h-4 w-4 text-text-muted" />
                Jakarta, Indonesia
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[13px] font-semibold text-primary mb-3 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#") && link.href !== "#") {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-[14px] text-text-secondary hover:text-primary transition-colors link-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-text-muted">
            &copy; {new Date().getFullYear()} EduTrack. Hak cipta dilindungi.
          </p>
          <p className="text-[13px] text-text-muted">
            Dibuat dengan ❤️ untuk pendidikan Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
