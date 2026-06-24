import { motion } from "framer-motion";
import { ArrowDown, SmartphoneIcon, ShieldCheck, Users } from "lucide-react";

const fadeUpProps = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as const },
});

export function Hero() {
  const scrollToPreview = () => {
    document.querySelector("#preview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-section="hero"
      className="snap-section relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAFC]"
    >
      {/* Ambient blobs */}
      <div className="gradient-blob -top-40 -right-40 h-[600px] w-[600px] bg-secondary" />
      <div className="gradient-blob -bottom-40 -left-40 h-[500px] w-[500px] bg-primary" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #032B44 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
        <motion.div {...fadeUpProps(0)} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[13px] font-medium text-primary">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Aplikasi Tumbuh Kembang
          </span>
        </motion.div>

        <motion.h1
          {...fadeUpProps(0.1)}
          className="mx-auto max-w-4xl font-['Plus_Jakarta_Sans'] text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[1.08] tracking-tight text-primary"
        >
          Pantau Tumbuh Kembang Anak{" "}
          <span className="gradient-text">dengan Mudah</span>
        </motion.h1>

        <motion.p
          {...fadeUpProps(0.2)}
          className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary md:text-[18px]"
        >
          Teman terbaik guru dan orang tua untuk mencatat setiap momen berharga perkembangan anak di sekolah dengan mudah dan praktis.
        </motion.p>

        <motion.div
          {...fadeUpProps(0.3)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#installation"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#installation")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2.5 rounded-2xl bg-primary px-7 py-3.5 text-[14px] font-semibold text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:bg-primary-light hover:-translate-y-0.5 transition-all duration-300"
          >
            <SmartphoneIcon className="h-[18px] w-[18px]" />
            Download Aplikasi
          </a>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2.5 rounded-2xl bg-white px-7 py-3.5 text-[14px] font-semibold text-primary border border-border hover:border-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Lihat Fitur
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          {...fadeUpProps(0.4)}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { icon: Users, label: "500+ Guru TK", sub: "Pengguna Aktif" },
            { icon: ShieldCheck, label: "Aman", sub: "Data Terjaga" },
            { icon: SmartphoneIcon, label: "Praktis", sub: "Di Semua HP Android" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/6">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-primary">
                  {item.label}
                </p>
                <p className="text-[12px] text-text-muted">{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToPreview}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[11px] font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}
