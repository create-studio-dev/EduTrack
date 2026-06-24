import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Hanya 6 screenshot unggulan untuk preview section ini
const galleryItems = [
  {
    title: "Layar Pembuka",
    desc: "Tampilan awal EduTrack dengan logo yang cerah dan animasi yang menyenangkan.",
    src: "/screenshots/screen_25.png",
    tag: "Pembuka",
  },
  {
    title: "Halaman Utama",
    desc: "Semua informasi penting tersaji di satu layar agar guru bisa langsung bekerja.",
    src: "/screenshots/screen_28.png",
    tag: "Beranda",
  },
  {
    title: "Halaman Masuk",
    desc: "Masuk dengan mudah menggunakan akun yang aman dan terpercaya.",
    src: "/screenshots/screen_27.png",
    tag: "Masuk",
  },
  {
    title: "Catatan Kehadiran",
    desc: "Tandai kehadiran semua anak dengan mudah — cukup satu ketukan untuk tiap anak.",
    src: "/screenshots/screen_14.png",
    tag: "Kehadiran",
  },
  {
    title: "Halaman Anak",
    desc: "Lihat semua informasi anak, cerita hariannya, dan bagikan langsung ke orang tua.",
    src: "/screenshots/screen_4.png",
    tag: "Profil Anak",
  },
  {
    title: "Grafik Pertumbuhan",
    desc: "Lihat perkembangan tinggi dan berat badan anak dalam grafik yang cantik dan mudah dibaca.",
    src: "/screenshots/screen_9.png",
    tag: "Pertumbuhan",
  },
  {
    title: "Profil Guru",
    desc: "Lihat akun Anda, rangkuman kehadiran, dan riwayat kegiatan harian dalam satu tempat.",
    src: "/screenshots/screen_21.png",
    tag: "Profil",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = () => setSelected(null);
  const prev = () =>
    setSelected((s) =>
      s === null ? null : (s - 1 + galleryItems.length) % galleryItems.length
    );
  const next = () =>
    setSelected((s) => (s === null ? null : (s + 1) % galleryItems.length));

  const descOnLeft = selected !== null && selected % 2 === 1;

  return (
    <section
      id="gallery"
      data-section="gallery"
      className="snap-section relative flex min-h-screen items-center bg-white overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0A9396 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-secondary/5 px-4 py-1.5 text-[13px] font-medium text-secondary mb-4">
            Galeri
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-primary">
            Tampilan yang{" "}
            <span className="gradient-text">Ramah & Mudah</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-text-secondary">
            Dirancang agar semua orang bisa langsung menggunakannya tanpa perlu belajar lama.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              onClick={() => setSelected(i)}
              className="group relative aspect-[3/4.2] overflow-hidden rounded-2xl bg-[#F8FAFC] border border-border/40 hover:border-primary/20 cursor-pointer card-hover"
            >
              {/* Real screenshot */}
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />

              {/* Tag badge */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/20 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-white">
                  {item.tag}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 rounded-2xl" />

              {/* Expand icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm border border-white/20">
                  <Maximize2 className="h-3.5 w-3.5 text-white" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 md:p-4 z-10">
                <p className="text-[13px] md:text-[14px] font-semibold text-primary group-hover:text-white transition-colors duration-300">
                  {item.title}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA — see all screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="/screenshots"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-primary px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary-light hover:-translate-y-0.5 transition-all duration-300"
          >
            Lihat Semua {" "}
            <span className="opacity-75 font-normal">24 Halaman Aplikasi</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-dark/85 backdrop-blur-xl p-6"
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-5 right-5 md:top-7 md:right-7 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Prev / Next */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            {/* Content */}
            <div
              onClick={(e) => e.stopPropagation()}
              className={`relative flex flex-col items-center gap-8 lg:gap-16 ${
                descOnLeft ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Phone mockup */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ scale: 0.92, opacity: 0, y: 10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.92, opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                  className="relative shrink-0"
                >
                  <div className="phone-mockup">
                    <div className="phone-mockup-inner">
                      <img
                        src={galleryItems[selected].src}
                        alt={galleryItems[selected].title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 -z-10 rounded-[44px] bg-secondary/20 blur-3xl scale-110" />
                </motion.div>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${selected}`}
                  initial={{ opacity: 0, x: descOnLeft ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: descOnLeft ? 20 : -20 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className={`max-w-xs text-center lg:max-w-sm ${
                    descOnLeft ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm mb-4">
                    {galleryItems[selected].tag} &nbsp;·&nbsp;{" "}
                    {String(selected + 1).padStart(2, "0")} /{" "}
                    {String(galleryItems.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[28px] md:text-[34px] font-bold text-white leading-tight">
                    {galleryItems[selected].title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                    {galleryItems[selected].desc}
                  </p>

                  {/* Dot indicators */}
                  <div
                    className={`mt-6 flex items-center gap-1.5 justify-center ${
                      descOnLeft ? "lg:justify-end" : "lg:justify-start"
                    }`}
                  >
                    {galleryItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSelected(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === selected
                            ? "w-6 bg-secondary"
                            : "w-1.5 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
