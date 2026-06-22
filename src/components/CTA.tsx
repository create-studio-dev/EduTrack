import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

const logoSrc = "/assets/images/logo_no_background.png";

export function CTA() {
  return (
    <section
      id="cta"
      data-section="cta"
      className="snap-section relative flex min-h-screen items-center bg-[#F8FAFC] overflow-hidden"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-[0.03]" />

      {/* Blobs */}
      <div className="gradient-blob -top-40 -right-40 h-[500px] w-[500px] bg-secondary/10" />
      <div className="gradient-blob -bottom-40 -left-40 h-[500px] w-[500px] bg-primary/10" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #032B44 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative"
        >
          {/* Logo instead of icon */}
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-white shadow-xl shadow-primary/15 border border-border/40 mb-8 overflow-hidden">
            <img src={logoSrc} alt="EduTrack" className="h-14 w-14 object-contain" />
          </div>

          <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight text-primary">
            Mulai Pantau Perkembangan{" "}
            <span className="gradient-text">Anak Didik Anda</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-text-secondary">
            Unduh aplikasi sekarang dan rasakan kemudahan monitoring tumbuh
            kembang anak. Gratis untuk 30 anak pertama.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:bg-primary-light hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download className="h-[18px] w-[18px]" />
              Download APK Sekarang
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-primary border border-border hover:border-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              Hubungi Kami
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <p className="mt-6 text-[13px] text-text-muted">
            Versi 2.4.1 · Android 6.0+ · 12 MB · Update terakhir: Januari 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
