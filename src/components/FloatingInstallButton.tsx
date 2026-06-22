import { motion } from "framer-motion";
import { SmartphoneIcon } from "lucide-react";

export function FloatingInstallButton() {
  return (
    <motion.a
      href="#installation"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-primary px-5 py-3.5 text-[14px] font-semibold text-white shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:bg-primary-light hover:-translate-y-0.5 transition-all duration-300 float-anim max-sm:px-4 max-sm:py-3 max-sm:text-[13px] max-sm:gap-2 max-sm:rounded-xl"
    >
      <SmartphoneIcon className="h-[18px] w-[18px]" />
      <span className="hidden sm:inline">Install Aplikasi</span>
      <span className="sm:hidden">Install</span>
    </motion.a>
  );
}
