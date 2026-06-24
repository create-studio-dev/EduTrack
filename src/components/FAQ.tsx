import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Apa itu EduTrack?",
    a: "EduTrack adalah aplikasi yang membantu guru TK dan orang tua mencatat, memantau, dan membagikan cerita perkembangan anak dengan mudah. Aplikasi ini menggantikan buku penghubung fisik menjadi lebih praktis dan tersimpan rapi.",
  },
  {
    q: "Apakah aplikasi ini gratis?",
    a: "Ada versi gratis yang bisa digunakan selamanya. Jika sekolah membutuhkan fitur tambahan seperti cetak rapor otomatis dan laporan tumbuh kembang, kami menyediakan paket berlangganan yang sangat terjangkau.",
  },
  {
    q: "Berapa banyak anak yang bisa didaftarkan?",
    a: "Versi gratis bisa digunakan hingga 30 anak per kelas. Jika menggunakan paket berbayar, jumlah anak tidak dibatasi, cocok untuk TK kecil hingga yayasan besar.",
  },
  {
    q: "Apakah butuh koneksi internet?",
    a: "Ya, aplikasi membutuhkan internet agar cerita anak bisa langsung dibagikan. Tapi jangan khawatir, guru tetap bisa mengisi catatan walau tanpa internet, dan akan tersimpan otomatis saat kembali online.",
  },
  {
    q: "Bagaimana cara mulai menggunakannya?",
    a: "Kode pendaftaran akan diberikan oleh kepala sekolah atau admin TK. Jika Anda baru pertama kali mendaftarkan sekolah Anda, silakan hubungi kami via WhatsApp untuk dibantu.",
  },
  {
    q: "Apakah laporan bisa dicetak?",
    a: "Tentu saja. Semua catatan perkembangan anak bisa dicetak dalam bentuk dokumen rapi untuk dibagikan kepada orang tua atau disimpan oleh sekolah.",
  },
  {
    q: "Apakah bisa digunakan di tablet atau HP?",
    a: "Bisa. Aplikasi ini dirancang agar nyaman digunakan baik di HP Android maupun tablet, dengan tampilan yang menyesuaikan layar secara otomatis.",
  },
];

function FaqItem({
  item,
  isOpen,
  onClick,
}: {
  item: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="rounded-2xl bg-white border border-border/60 overflow-hidden transition-all duration-300 hover:border-primary/15">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-[15px] font-medium text-primary pr-4">
          {item.q}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <p className="text-[14px] leading-relaxed text-text-secondary border-t border-border/40 pt-4">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      data-section="faq"
      className="snap-section relative flex min-h-screen items-center bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/50 via-white to-white" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-secondary/5 px-4 py-1.5 text-[13px] font-medium text-secondary mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-primary">
            Pertanyaan yang Sering{" "}
            <span className="gradient-text">Diajukan</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-text-secondary">
            Tidak menemukan jawaban? Hubungi tim support kami melalui WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              item={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
