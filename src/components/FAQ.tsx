import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Apa itu TK Monitoring App?",
    a: "TK Monitoring App adalah aplikasi Android yang membantu guru TK dalam mencatat, memantau, dan melaporkan perkembangan anak didik secara digital. Aplikasi ini menggantikan pencatatan manual di buku menjadi lebih terstruktur dan mudah dianalisis.",
  },
  {
    q: "Apakah aplikasi ini gratis?",
    a: "Kami menyediakan versi gratis dengan fitur dasar yang bisa digunakan selamanya. Untuk fitur lanjutan seperti laporan PDF, analisis pertumbuhan, dan multi-user, tersedia paket berlangganan yang sangat terjangkau untuk sekolah.",
  },
  {
    q: "Berapa banyak anak yang bisa dimonitor?",
    a: "Versi gratis mendukung hingga 30 anak per akun. Paket berbayar tidak memiliki batasan jumlah anak. Cocok untuk TK kecil hingga yayasan besar dengan banyak cabang.",
  },
  {
    q: "Apakah perlu koneksi internet?",
    a: "Aplikasi memerlukan koneksi internet untuk sinkronisasi data. Namun, input data harian bisa dilakukan secara offline dan akan otomatis tersinkronisasi ketika perangkat terhubung kembali ke internet.",
  },
  {
    q: "Bagaimana cara mendapatkan kode sekolah?",
    a: "Kode sekolah diberikan oleh admin yayasan atau kepala sekolah yang sudah terdaftar. Jika Anda adalah pendaftar pertama dari sekolah Anda, hubungi tim kami melalui WhatsApp untuk verifikasi dan aktivasi.",
  },
  {
    q: "Apakah data bisa diekspor?",
    a: "Ya. Semua data bisa diekspor dalam format PDF dan Excel. Laporan siap cetak untuk dibagikan kepada orang tua murid dan yayasan.",
  },
  {
    q: "Apakah bisa digunakan di tablet?",
    a: "Tentu. Aplikasi dioptimalkan untuk layar smartphone dan tablet Android. Tampilan akan menyesuaikan secara otomatis dengan ukuran layar perangkat Anda.",
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
