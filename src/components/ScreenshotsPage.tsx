import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  LayoutGrid,
  List,
} from "lucide-react";

const logoSrc = "/assets/images/logo_no_background.png";

// ─── Data semua 24 screenshot ─────────────────────────────────────────────────
type ScreenshotItem = {
  src: string;
  title: string;
  desc: string;
  category: string;
};

const allScreenshots: ScreenshotItem[] = [
  // Onboarding
  {
    src: "/assets/screenshots/screen_25.png",
    title: "Splash Screen",
    desc: "Layar pembuka EduTrack dengan logo animasi dan indikator loading yang elegan.",
    category: "Onboarding",
  },
  {
    src: "/assets/screenshots/screen_27.png",
    title: "Login — EduTrack",
    desc: "Halaman masuk dengan branding EduTrack terbaru. Email & kata sandi dienkripsi penuh.",
    category: "Onboarding",
  },
  {
    src: "/assets/screenshots/screen_23.png",
    title: "Login — TK Monitor",
    desc: "Versi login awal sebelum rebranding, menampilkan desain enterprise yang bersih.",
    category: "Onboarding",
  },

  // Dashboard
  {
    src: "/assets/screenshots/screen_28.png",
    title: "Dashboard Utama",
    desc: "Ringkasan metrik kelas, grafik kehadiran interaktif, dan notifikasi terbaru.",
    category: "Dashboard",
  },

  // Siswa
  {
    src: "/assets/screenshots/screen_2.png",
    title: "Daftar Kelas",
    desc: "Halaman Kelola Siswa menampilkan semua kelas yang tersedia beserta jumlah siswa dan tingkat.",
    category: "Siswa",
  },
  {
    src: "/assets/screenshots/screen_3.png",
    title: "Daftar Siswa per Kelas",
    desc: "List siswa dalam kelas TK B2–Kenanga dengan info gender, usia, dan search bar.",
    category: "Siswa",
  },
  {
    src: "/assets/screenshots/screen_4.png",
    title: "Detail & Aksi Siswa",
    desc: "Profil siswa dengan shortcut ke Timeline, Indikator, Data Fisik, Export PDF, dan kirim WhatsApp.",
    category: "Siswa",
  },
  {
    src: "/assets/screenshots/screen_16.png",
    title: "Manajemen Siswa",
    desc: "Tampilan kelola siswa per kelas dengan tombol edit dan hapus untuk setiap entri.",
    category: "Siswa",
  },
  {
    src: "/assets/screenshots/screen_17.png",
    title: "Edit Data Siswa",
    desc: "Form edit profil siswa mencakup nama lengkap, nama panggilan, tanggal lahir, jenis kelamin, dan kontak orang tua.",
    category: "Siswa",
  },
  {
    src: "/assets/screenshots/screen_18.png",
    title: "Tambah Siswa Baru",
    desc: "Form penambahan siswa baru dengan semua field informasi dasar dan kontak wali.",
    category: "Siswa",
  },

  // Absensi
  {
    src: "/assets/screenshots/screen_14.png",
    title: "Input Absensi Kelas",
    desc: "Input kehadiran harian seluruh siswa di kelas dalam satu layar — Hadir, Sakit, Izin, Libur, Alfa.",
    category: "Absensi",
  },
  {
    src: "/assets/screenshots/screen_12.png",
    title: "Riwayat Absensi",
    desc: "Rekap kehadiran kelas dengan filter rentang tanggal dan persentase kehadiran harian.",
    category: "Absensi",
  },
  {
    src: "/assets/screenshots/screen_13.png",
    title: "Detail Absensi per Hari",
    desc: "Rincian status kehadiran setiap siswa pada hari tertentu — collapsed & expanded view.",
    category: "Absensi",
  },

  // Indikator
  {
    src: "/assets/screenshots/screen_6.png",
    title: "Indikator Kesehatan",
    desc: "Penilaian indikator kesehatan siswa harian: kebersihan diri, alergi, dan kualitas tidur.",
    category: "Indikator",
  },
  {
    src: "/assets/screenshots/screen_7.png",
    title: "Indikator Akademik",
    desc: "Checklist kesiapan akademik — menulis nama, berhitung, mengenal geometri, dan penilaian bintang.",
    category: "Indikator",
  },
  {
    src: "/assets/screenshots/screen_8.png",
    title: "Indikator Fisik & Kognitif",
    desc: "Asesmen perkembangan motorik kasar, koordinasi kaki-mata, dan kemampuan keseimbangan.",
    category: "Indikator",
  },

  // Pertumbuhan
  {
    src: "/assets/screenshots/screen_9.png",
    title: "Grafik Pertumbuhan",
    desc: "Visualisasi riwayat tinggi dan berat badan anak dalam grafik garis yang akurat.",
    category: "Pertumbuhan",
  },

  // Timeline
  {
    src: "/assets/screenshots/screen_5.png",
    title: "Timeline Siswa",
    desc: "Tambah catatan perkembangan harian siswa — kategori Umum, Pencapaian, atau Perhatian.",
    category: "Timeline",
  },

  // Laporan & Export
  {
    src: "/assets/screenshots/screen_10.png",
    title: "Export Laporan Siswa",
    desc: "Pilih rentang tanggal dan format ekspor — PDF siap cetak atau Excel untuk analisis lanjutan.",
    category: "Laporan",
  },
  {
    src: "/assets/screenshots/screen_11.png",
    title: "Kirim Laporan via WhatsApp",
    desc: "Bottom sheet untuk memilih format pengiriman laporan: pesan teks, PDF, Excel, atau buka chat WA langsung.",
    category: "Laporan",
  },
  {
    src: "/assets/screenshots/screen_15.png",
    title: "Laporan Kehadiran Kelas",
    desc: "Laporan kehadiran kelas dengan pilihan kelas, periode, dan ekspor PDF atau Excel.",
    category: "Laporan",
  },

  // Import
  {
    src: "/assets/screenshots/screen_20.png",
    title: "Import Data Siswa",
    desc: "Panduan format kolom Excel dan pilihan pengaturan kelas untuk import data massal.",
    category: "Import",
  },
  {
    src: "/assets/screenshots/screen_19.png",
    title: "Konfigurasi Import Kelas",
    desc: "Pilih kelas tujuan import — gunakan kelas yang ada, buat kelas baru, atau tahun ajaran baru.",
    category: "Import",
  },

  // Profil
  {
    src: "/assets/screenshots/screen_21.png",
    title: "Profil Guru",
    desc: "Halaman profil guru dengan edit foto, info akun, status kehadiran, dan tombol simpan perubahan.",
    category: "Profil",
  },
  {
    src: "/assets/screenshots/screen_22.png",
    title: "Riwayat Kehadiran Guru",
    desc: "Bagian bawah profil yang menampilkan ringkasan kehadiran dan riwayat per kelas.",
    category: "Profil",
  },
];

const CATEGORIES = [
  "Semua",
  "Onboarding",
  "Dashboard",
  "Siswa",
  "Absensi",
  "Indikator",
  "Pertumbuhan",
  "Timeline",
  "Laporan",
  "Import",
  "Profil",
];

const categoryColors: Record<string, string> = {
  Onboarding: "bg-violet-100 text-violet-700 border-violet-200",
  Dashboard: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
  Siswa: "bg-blue-100 text-blue-700 border-blue-200",
  Absensi: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Indikator: "bg-amber-100 text-amber-700 border-amber-200",
  Pertumbuhan: "bg-rose-100 text-rose-700 border-rose-200",
  Timeline: "bg-indigo-100 text-indigo-700 border-indigo-200",
  Laporan: "bg-cyan-100 text-cyan-700 border-cyan-200",
  Import: "bg-orange-100 text-orange-700 border-orange-200",
  Profil: "bg-teal-100 text-teal-700 border-teal-200",
};

export function ScreenshotsPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selected, setSelected] = useState<number | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered =
    activeCategory === "Semua"
      ? allScreenshots
      : allScreenshots.filter((s) => s.category === activeCategory);

  // lightbox: prev/next within filtered array
  const close = () => setSelected(null);
  const prev = () =>
    setSelected((s) =>
      s === null ? null : (s - 1 + filtered.length) % filtered.length
    );
  const next = () =>
    setSelected((s) => (s === null ? null : (s + 1) % filtered.length));

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Back + Logo */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-[13px] font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Kembali</span>
            </a>
            <div className="w-px h-5 bg-border/60" />
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg overflow-hidden bg-white border border-border/40 shadow-sm flex items-center justify-center">
                <img src={logoSrc} alt="EduTrack" className="h-6 w-6 object-contain" />
              </div>
              <span className="text-[13px] font-semibold text-primary hidden sm:block">
                EduTrack
              </span>
            </a>
          </div>

          {/* Title */}
          <div className="text-center flex-1">
            <span className="text-[14px] font-semibold text-primary hidden md:block">
              Showcase Lengkap Aplikasi
            </span>
            <span className="text-[11px] text-text-muted hidden md:block">
              {allScreenshots.length} halaman terdokumentasi
            </span>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 bg-bg-alt rounded-xl p-1 border border-border/40">
            <button
              onClick={() => setView("grid")}
              className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all ${view === "grid"
                ? "bg-white shadow-sm text-primary border border-border/30"
                : "text-text-muted hover:text-primary"
                }`}
              aria-label="Grid view"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all ${view === "list"
                ? "bg-white shadow-sm text-primary border border-border/30"
                : "text-text-muted hover:text-primary"
                }`}
              aria-label="List view"
            >
              <List className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary to-[#043B5C] py-16 px-6">
        {/* decorative blobs */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[12px] font-medium text-white/80 backdrop-blur-sm mb-5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              {allScreenshots.length} Screenshot Terdokumentasi
            </div>
            <h1 className="font-['Plus_Jakarta_Sans'] text-[clamp(2rem,5vw,3.25rem)] font-extrabold text-white leading-tight tracking-tight mb-4">
              Semua Halaman{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0A9396, #94D2BD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                EduTrack
              </span>
            </h1>
            <p className="text-white/65 text-[16px] leading-relaxed max-w-lg mx-auto">
              Dokumentasi visual lengkap setiap layar aplikasi — dari onboarding
              hingga laporan, ditata berdasarkan kategori fitur.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Category Filter ── */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-xl border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setSelected(null); }}
                className={`shrink-0 rounded-full px-4 py-1.5 text-[12px] font-semibold border transition-all duration-200 ${activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "bg-white text-text-secondary border-border/50 hover:border-primary/30 hover:text-primary"
                  }`}
              >
                {cat}
                {cat !== "Semua" && (
                  <span className={`ml-1.5 opacity-60 font-normal`}>
                    {allScreenshots.filter((s) => s.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        {/* Count info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-[13px] text-text-muted">
            Menampilkan{" "}
            <span className="font-semibold text-primary">{filtered.length}</span>{" "}
            halaman
            {activeCategory !== "Semua" && (
              <span> dalam kategori <span className="font-semibold text-primary">{activeCategory}</span></span>
            )}
          </p>
        </div>

        {/* Grid View */}
        {view === "grid" && (
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.button
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                  onClick={() => setSelected(i)}
                  className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-white border border-border/40 hover:border-primary/25 shadow-sm hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 cursor-pointer"
                >
                  {/* Screenshot */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    loading="lazy"
                  />

                  {/* Category badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${categoryColors[item.category] ?? "bg-gray-100 text-gray-600 border-gray-200"
                        }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Index number */}
                  <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-[10px] font-bold text-white border border-white/20">
                      {i + 1}
                    </span>
                  </div>

                  {/* Title on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[11px] md:text-[12px] font-semibold text-white leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.title}
                    </p>
                  </div>

                  {/* Static bottom label (always visible) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent pt-4 pb-2.5 px-2.5 group-hover:opacity-0 transition-opacity duration-200">
                    <p className="text-[10px] md:text-[11px] font-semibold text-primary leading-tight line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* List View */}
        {view === "list" && (
          <motion.div
            layout
            className="flex flex-col gap-2"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.button
                  key={item.src}
                  layout
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.2, delay: i * 0.02 }}
                  onClick={() => setSelected(i)}
                  className="group flex items-center gap-4 bg-white border border-border/40 rounded-2xl p-3 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 text-left cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="shrink-0 h-16 w-9 rounded-lg overflow-hidden border border-border/30 shadow-sm">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide shrink-0 ${categoryColors[item.category] ?? "bg-gray-100 text-gray-600 border-gray-200"
                          }`}
                      >
                        {item.category}
                      </span>
                      <span className="text-[11px] text-text-muted">#{i + 1}</span>
                    </div>
                    <p className="text-[13px] font-semibold text-primary group-hover:text-secondary transition-colors line-clamp-1">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-text-muted leading-relaxed line-clamp-1 mt-0.5 hidden sm:block">
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className="h-4 w-4 text-text-muted shrink-0 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected !== null && filtered[selected] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#021D30]/90 backdrop-blur-2xl"
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="rounded-full bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-1.5 text-[12px] font-medium text-white/80">
                {selected + 1} / {filtered.length}
              </span>
            </div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            {/* Content */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 px-16 md:px-24"
            >
              {/* Phone */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  className="relative shrink-0"
                >
                  <div className="phone-mockup">
                    <div className="phone-mockup-inner">
                      <img
                        src={filtered[selected].src}
                        alt={filtered[selected].title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 -z-10 rounded-[44px] bg-secondary/25 blur-3xl scale-110 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${selected}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="max-w-sm text-center lg:text-left"
                >
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide mb-4 ${categoryColors[filtered[selected].category] ?? "bg-gray-100 text-gray-600 border-gray-200"
                      }`}
                  >
                    {filtered[selected].category}
                  </span>
                  <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] md:text-[32px] font-bold text-white leading-tight mb-3">
                    {filtered[selected].title}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-white/65">
                    {filtered[selected].desc}
                  </p>

                  {/* Dot nav */}
                  <div className="mt-7 flex items-center gap-1.5 justify-center lg:justify-start flex-wrap">
                    {filtered.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelected(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === selected
                          ? "w-6 bg-secondary"
                          : "w-1.5 bg-white/25 hover:bg-white/45"
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
    </div>
  );
}
