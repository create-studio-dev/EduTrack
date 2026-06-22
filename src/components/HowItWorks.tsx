import { motion } from "framer-motion";
import { ClipboardList, Upload, LineChart, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Input Data Harian",
    desc: "Guru mencatat aktivitas, kehadiran, dan observasi harian setiap anak melalui form yang ringkas.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Sinkronisasi Cloud",
    desc: "Data otomatis tersimpan dan tersinkronisasi. Kepala sekolah dapat mengakses dashboard real-time.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Analisis Otomatis",
    desc: "Sistem mengolah data menjadi grafik pertumbuhan, indikator perkembangan, dan alert jika ada anomali.",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Laporan & Insight",
    desc: "Generate laporan perkembangan anak dalam satu klik. Siap dibagikan ke orang tua dan yayasan.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-section="how-it-works"
      className="snap-section relative flex min-h-screen items-center bg-[#F8FAFC] overflow-hidden"
    >
      {/* Ambient blob */}
      <div className="gradient-blob -bottom-32 right-0 h-[500px] w-[500px] bg-secondary/8" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[13px] font-medium text-primary mb-4">
            Cara Kerja
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-primary">
            Proses yang{" "}
            <span className="gradient-text">Sederhana & Efisien</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-text-secondary">
            Dari pencatatan hingga laporan, semua berjalan dalam alur yang sudah dioptimalkan untuk kebutuhan TK.
          </p>
        </motion.div>

        {/* Alternating timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex items-center ${
                    isLeft
                      ? "md:flex-row md:justify-start"
                      : "md:flex-row-reverse md:justify-start"
                  }`}
                >
                  {/* Card — takes half width on desktop */}
                  <div
                    className={`flex-1 md:flex-none md:w-[calc(50%-28px)] ${
                      isLeft ? "md:pr-0" : "md:pl-0"
                    }`}
                  >
                    <div className="card-hover group rounded-2xl bg-white border border-border/60 p-6 md:p-7">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/6 group-hover:bg-primary/10 transition-colors">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-[16px] font-semibold text-primary mb-1.5">
                            {step.title}
                          </h3>
                          <p className="text-[14px] leading-relaxed text-text-secondary">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center badge */}
                  <div className="hidden md:flex relative z-10 mx-3 h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-2 border-primary/15 shadow-md">
                    <span className="text-[13px] font-bold gradient-text">
                      {step.number}
                    </span>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block flex-1 md:w-[calc(50%-28px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
