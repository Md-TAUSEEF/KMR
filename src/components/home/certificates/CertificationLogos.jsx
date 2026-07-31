import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck } from "lucide-react";



const certificationLogos = [
  {
    id: 1,
    name: "ISO 9001",
    subtitle: "Quality Management",
    image: "/certificates/certification/iso9001.webp",
  },
  {
    id: 2,
    name: "ISO 14001",
    subtitle: "Environmental Management",
    image: "/certificates/certification/iso14001.webp",
  },
  {
    id: 3,
    name: "ISO 45001",
    subtitle: "Health & Safety",
    image: "/certificates/certification/iso45001.webp",
  },
  {
    id: 4,
    name: "Quality Standard",
    subtitle: "Certified Quality",
    image: "/certificates/certification/quality.webp",
  },
  {
    id: 5,
    name: "Safety Standard",
    subtitle: "Safety Certified",
    image: "/certificates/certification/quality.webp",
  },
  {
    id: 6,
    name: "Certified",
    subtitle: "Trusted Standards",
    image: "/certificates/certification/certified.webp",
  },
];


const sliderLogos = [...certificationLogos, ...certificationLogos];

const CertificationLogos = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16">
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-sky-100/40 blur-[100px]" />

        <div className="absolute -left-32 bottom-0 h-56 w-56 rounded-full bg-cyan-100/30 blur-[90px]" />

        <div className="absolute -right-32 bottom-0 h-56 w-56 rounded-full bg-blue-100/30 blur-[90px]" />
      </div>

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2">
            <Award size={17} className="text-sky-600" />

            <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-700">
              Certifications & Standards
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-tight text-[#102944] sm:text-4xl lg:text-5xl">
            Certified Quality.
            <span className="ml-2 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Trusted Performance.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Our commitment to quality, safety and reliable construction
            chemical solutions is supported by recognized standards and
            certifications.
          </p>
        </motion.div>
      </div>

      {/* ======================================================
          LOGO SLIDER
      ====================================================== */}

      <div className="relative mt-10">
        {/* Left Fade */}

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-28 lg:w-40" />

        {/* Right Fade */}

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-28 lg:w-40" />

        {/* Slider */}

        <motion.div
          className="flex w-max items-center gap-5"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{
            animationPlayState: "paused",
          }}
        >
          {sliderLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="group flex h-[125px] w-[190px] shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_18px_40px_rgba(14,165,233,0.12)] sm:h-[140px] sm:w-[220px]"
            >
              {/* Logo Image */}

              <img
                src={logo.image}
                alt={logo.name}
               className="max-h-[75px] max-w-[150px] object-contain transition-all duration-300 group-hover:scale-105 sm:max-h-[85px] sm:max-w-[170px]"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ======================================================
          BOTTOM TRUST LINE
      ====================================================== */}

      <div className="relative mx-auto mt-9 flex max-w-[1450px] items-center justify-center px-4">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5">
          <ShieldCheck size={17} className="text-sky-600" />

          <span className="text-xs font-bold text-slate-500 sm:text-sm">
            Quality • Safety • Reliability • Performance
          </span>

          <BadgeCheck size={17} className="text-emerald-500" />
        </div>
      </div>
    </section>
  );
};

export default CertificationLogos;