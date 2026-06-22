import { motion } from "framer-motion";
import { Shield, Lock, Server, Fingerprint, Eye, FileKey2 } from "lucide-react";

const securityItems = [
  {
    icon: Lock,
    title: "Enkripsi End-to-End",
    desc: "Semua data anak dienkripsi menggunakan AES-256, standar yang sama digunakan oleh perbankan.",
  },
  {
    icon: Server,
    title: "Server Indonesia",
    desc: "Data disimpan di server lokal Indonesia. Latensi rendah dan sesuai regulasi PDP.",
  },
  {
    icon: Fingerprint,
    title: "Autentikasi Aman",
    desc: "Login dengan kode unik sekolah. Hanya guru terdaftar yang dapat mengakses data.",
  },
  {
    icon: Eye,
    title: "Privasi Terjaga",
    desc: "Data setiap anak hanya dapat diakses oleh wali kelas dan kepala sekolah yang berwenang.",
  },
  {
    icon: FileKey2,
    title: "Backup Otomatis",
    desc: "Data dicadangkan setiap hari. Tidak ada risiko kehilangan data karena kesalahan teknis.",
  },
  {
    icon: Shield,
    title: "Audit Berkala",
    desc: "Sistem melalui security audit rutin untuk memastikan tidak ada celah keamanan.",
  },
];

export function Security() {
  return (
    <section
      id="security"
      data-section="security"
      className="snap-section relative flex min-h-screen items-center bg-[#F8FAFC] overflow-hidden"
    >
      <div className="gradient-blob -top-32 -left-32 h-[400px] w-[400px] bg-primary/5" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[13px] font-medium text-primary mb-4">
            <Shield className="h-3.5 w-3.5" />
            Keamanan
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-primary">
            Data Anak adalah{" "}
            <span className="gradient-text">Prioritas Kami</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-text-secondary">
            Kami memahami bahwa data tumbuh kembang anak bersifat sensitif. Keamanan dan privasi adalah fondasi utama platform ini.
          </p>
        </motion.div>

        {/* 2x3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {securityItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover group rounded-2xl bg-white border border-border/60 p-6 md:p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/8 mb-4">
                <item.icon className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-[15px] font-semibold text-primary mb-1.5">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-text-secondary">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 rounded-2xl bg-primary/4 border border-primary/10 p-6 md:p-8 text-center"
        >
          <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
          <p className="text-[16px] font-semibold text-primary">
            Sesuai dengan UU Perlindungan Data Pribadi Indonesia
          </p>
          <p className="text-[14px] text-text-secondary mt-1.5 max-w-lg mx-auto">
            Platform ini dirancang memenuhi standar regulasi perlindungan data
            terbaru di Indonesia. Data Anda adalah milik Anda sepenuhnya.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
