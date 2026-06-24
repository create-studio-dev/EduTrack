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
    title: "Informasi Anak Sekilas",
    desc: "Pantau perkembangan semua anak dalam satu layar yang mudah dipahami dan bebas ribet.",
  },
  {
    icon: ClipboardCheck,
    title: "Catatan Harian Praktis",
    desc: "Lebih mudah mencatat kehadiran dan aktivitas menyenangkan anak setiap hari tanpa perlu kertas.",
  },
  {
    icon: TrendingUp,
    title: "Pantau Pertumbuhan",
    desc: "Lihat perubahan tinggi dan berat badan anak melalui grafik yang cantik dan mudah dibaca orang tua.",
  },
  {
    icon: Clock,
    title: "Rekam Jejak Anak",
    desc: "Lihat semua momen penting, cerita lucu, dan pencapaian anak dari waktu ke waktu.",
  },
  {
    icon: FileText,
    title: "Laporan Instan",
    desc: "Buat laporan perkembangan anak yang cantik dan siap dibagikan ke orang tua hanya dengan satu klik.",
  },
  {
    icon: UserRound,
    title: "Buku Cerita Anak",
    desc: "Simpan cerita, foto, dan perjalanan perkembangan setiap anak di satu tempat yang rapi.",
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
            Kemudahan untuk{" "}
            <span className="gradient-text">Guru & Orang Tua</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-text-secondary">
            Fitur yang dirancang khusus agar guru dan orang tua bisa lebih fokus pada kebahagiaan dan perkembangan anak.
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
