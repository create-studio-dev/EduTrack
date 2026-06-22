import { motion } from "framer-motion";
import {
  Download,
  BookOpen,
  HeadphonesIcon,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const installSteps = [
  {
    icon: Download,
    title: "Download APK",
    desc: "Unduh file APK langsung dari website resmi. File ringan, hanya 12 MB.",
  },
  {
    icon: ShieldCheck,
    title: "Izinkan Sumber Tidak Dikenal",
    desc: "Buka Pengaturan → Keamanan → Izinkan instalasi dari sumber tidak dikenal.",
  },
  {
    icon: CheckCircle2,
    title: "Install Aplikasi",
    desc: "Buka file APK yang sudah diunduh, lalu klik Install. Proses hanya beberapa detik.",
  },
  {
    icon: BookOpen,
    title: "Login & Mulai",
    desc: "Masukkan kode sekolah dari admin. Aplikasi siap digunakan dalam hitungan menit.",
  },
];

const faqInstall = [
  {
    q: "Apakah aplikasi aman?",
    a: "Ya. Aplikasi melalui proses security review dan hanya meminta izin yang relevan. Semua data dienkripsi.",
  },
  {
    q: "Minimal versi Android?",
    a: "Android 6.0 (Marshmallow) ke atas. Kompatibel dengan 98% perangkat Android yang beredar di Indonesia.",
  },
  {
    q: "Bagaimana jika ada kendala?",
    a: "Tim support kami siap membantu melalui WhatsApp dan telepon di jam kerja (Senin-Jumat, 08.00-17.00).",
  },
];

export function Installation() {
  return (
    <section
      id="installation"
      data-section="installation"
      className="snap-section relative flex min-h-screen items-center bg-white overflow-hidden"
    >
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/50 via-white to-white" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[13px] font-medium text-primary mb-4">
            Instalasi
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-primary">
            Siap Digunakan dalam{" "}
            <span className="gradient-text">5 Menit</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-text-secondary">
            Tidak perlu teknisi. Guru bisa install sendiri dengan panduan sederhana berikut.
          </p>
        </motion.div>

        {/* Install steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {installSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover group relative rounded-2xl bg-[#F8FAFC] border border-border/50 p-6 text-center"
            >
              {/* Step number */}
              <span className="absolute top-3 right-4 text-[11px] font-bold text-text-muted">
                {i + 1}/4
              </span>
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-primary/6 group-hover:bg-primary/10 transition-colors mb-3">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-[15px] font-semibold text-primary mb-1.5">
                {step.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-text-secondary">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-[14px] font-semibold text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:bg-primary-light hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Download className="h-[18px] w-[18px]" />
            Download APK (12 MB)
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-[14px] font-semibold text-primary border border-border hover:border-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <BookOpen className="h-[18px] w-[18px]" />
            Panduan Instalasi
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-[14px] font-semibold text-secondary border border-border hover:border-secondary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <HeadphonesIcon className="h-[18px] w-[18px]" />
            Hubungi Admin
          </a>
        </motion.div>

        {/* FAQ mini */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl bg-[#F8FAFC] border border-border/50 p-6 md:p-8">
            <h3 className="text-[15px] font-semibold text-primary mb-4">
              Pertanyaan Umum tentang Instalasi
            </h3>
            <div className="space-y-4">
              {faqInstall.map((item, i) => (
                <div key={i}>
                  <p className="text-[14px] font-medium text-primary">
                    {item.q}
                  </p>
                  <p className="text-[13px] leading-relaxed text-text-secondary mt-1">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
