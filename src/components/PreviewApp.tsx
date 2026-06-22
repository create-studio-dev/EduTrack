import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const screens = [
  { src: "/assets/screenshots/screen_14.png", alt: "Attendance Input" },
  { src: "/assets/screenshots/screen_28.png", alt: "Dashboard" },
  { src: "/assets/screenshots/screen_4.png", alt: "Student Detail" },
];

export function PreviewApp() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Gentle parallax — side phones drift more than the center
  const ySide = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yCenter = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={ref}
      id="preview"
      data-section="preview"
      className="snap-section relative flex min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-secondary/5 px-4 py-1.5 text-[13px] font-medium text-secondary mb-4">
            <Play className="h-3.5 w-3.5" />
            Preview Aplikasi
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-primary">
            Antarmuka yang{" "}
            <span className="gradient-text">Intuitif & Bersih</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-text-secondary">
            Dirancang khusus untuk guru TK agar mudah digunakan tanpa pelatihan khusus.
          </p>
        </motion.div>

        {/* Phone mockups — staggered: center elevated, sides lower */}
        <motion.div
          style={{ opacity }}
          className="flex items-end justify-center gap-4 md:gap-8 lg:gap-10"
        >
          {/* Left phone — lower & smaller */}
          <motion.div
            style={{ y: ySide }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden sm:block translate-y-10 md:translate-y-14 scale-[0.82] md:scale-[0.85] origin-bottom"
          >
            <div className="phone-mockup opacity-90">
              <div className="phone-mockup-inner">
                <img
                  src={screens[0].src}
                  alt={screens[0].alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Center phone — elevated & highlighted */}
          <motion.div
            style={{ y: yCenter }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20 -translate-y-2"
          >
            <div className="phone-mockup">
              <div className="phone-mockup-inner ring-2 ring-secondary/20">
                <img
                  src={screens[1].src}
                  alt={screens[1].alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Glow behind center phone */}
            <div className="absolute inset-0 -z-10 rounded-[44px] bg-secondary/15 blur-3xl scale-110" />
          </motion.div>

          {/* Right phone — lower & smaller */}
          <motion.div
            style={{ y: ySide }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden sm:block translate-y-10 md:translate-y-14 scale-[0.82] md:scale-[0.85] origin-bottom"
          >
            <div className="phone-mockup opacity-90">
              <div className="phone-mockup-inner">
                <img
                  src={screens[2].src}
                  alt={screens[2].alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
