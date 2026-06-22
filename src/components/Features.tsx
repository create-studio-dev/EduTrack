import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ClipboardCheck,
  TrendingUp,
  Clock,
  FileText,
  UserRound,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Ringkas",
    desc: "Lihat ringkasan perkembangan seluruh anak didik dalam satu layar. Informasi penting langsung terlihat.",
  },
  {
    icon: ClipboardCheck,
    title: "Pencatatan Harian",
    desc: "Catat kehadiran, aktivitas, dan perkembangan anak dengan cepat melalui form yang dioptimalkan.",
  },
  {
    icon: TrendingUp,
    title: "Indikator Pertumbuhan",
    desc: "Pantau tinggi, berat badan, dan indikator tumbuh kembang dengan grafik yang informatif.",
  },
  {
    icon: Clock,
    title: "Timeline Aktivitas",
    desc: "Lihat kronologi aktivitas dan pencapaian setiap anak sepanjang semester.",
  },
  {
    icon: FileText,
    title: "Laporan Otomatis",
    desc: "Generate laporan perkembangan anak dalam format PDF siap cetak untuk orang tua dan yayasan.",
  },
  {
    icon: UserRound,
    title: "Profil Anak Lengkap",
    desc: "Setiap anak memiliki profil detail dengan riwayat perkembangan, catatan khusus, dan foto.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      data-section="features"
      className="snap-section relative flex min-h-screen items-center bg-[#F8FAFC] overflow-hidden"
    >
      {/* Ambient */}
      <div className="gradient-blob -top-32 right-0 h-[400px] w-[400px] bg-primary/5" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[13px] font-medium text-primary mb-4">
            Fitur Unggulan
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-primary">
            Semua yang Dibutuhkan{" "}
            <span className="gradient-text">Guru TK</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-text-secondary">
            Dirancang berdasarkan riset mendalam dengan puluhan guru TK untuk memastikan setiap fitur benar-benar berguna.
          </p>
        </motion.div>

        {/* Feature grid — 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover group relative rounded-2xl bg-white p-6 md:p-7 border border-border/60 hover:border-primary/15"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/6 group-hover:bg-primary/10 transition-colors duration-300 mb-4">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-[16px] font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-text-secondary">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
