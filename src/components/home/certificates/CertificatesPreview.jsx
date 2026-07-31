import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Award,
  BadgeCheck,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  Building2,
  CalendarDays,
  FileCheck2,
  Search,
  X,
  ArrowRight,
  FlaskConical,
  Factory,
  Microscope,
  Shield,
  PackageCheck,
  Headphones,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

// ============================================================
// CERTIFICATE DATA
// ============================================================

const certificates = [
  {
    id: 1,

    title: "ISO 9001:2015",

    subtitle: "Quality Management System",

    image: "/certificates/certificate-1.jpg",

    icon: BadgeCheck,

    certificationBody: "QRO Certification LLP",

    certificateNumber: "305024060136Q",

    certificationDate: "1st June 2024",

    firstAudit: "31st May 2025",

    secondAudit: "31st May 2026",

    expiry: "31st May 2027",

    scope:
      "Manufacturing, trading, produce, refine, process, formulate, import, export of all kinds of chemical used for construction and industrial purpose.",
  },

  {
    id: 2,

    title: "ISO 14001:2015",

    subtitle: "Environmental Management System",

    image: "/certificates/certificate-2.jpg",

    icon: ShieldCheck,

    certificationBody: "QRO Certification LLP",

    certificateNumber: "305024060138E",

    certificationDate: "1st June 2024",

    firstAudit: "31st May 2025",

    secondAudit: "31st May 2026",

    expiry: "31st May 2026",

    scope:
      "Manufacturing, trading, produce, refine, process, formulate, import, export of all kinds of chemical used for construction and industrial purpose.",
  },
];

// ============================================================
// TRUST CARDS
// ============================================================

const trustCards = [
  {
    icon: Shield,
    value: "02+",
    title: "Certifications",
    description: "Recognized management standards",
  },

  {
    icon: Globe2,
    value: "ISO",
    title: "Standards",
    description: "Quality & environmental management",
  },

  {
    icon: Award,
    value: "100%",
    title: "Quality Focused",
    description: "Consistent quality assurance",
  },

  {
    icon: CheckCircle2,
    value: "Verified",
    title: "Standards",
    description: "Audited & certified systems",
  },
];

// ============================================================
// QUALITY PROCESS
// ============================================================

const qualityProcess = [
  {
    number: "01",
    icon: FlaskConical,
    title: "Raw Materials",
    description: "Carefully selected and quality-verified raw materials.",
  },

  {
    number: "02",
    icon: Factory,
    title: "Manufacturing",
    description: "Controlled and advanced production processes.",
  },

  {
    number: "03",
    icon: Microscope,
    title: "Quality Testing",
    description: "Rigorous testing at every stage of production.",
  },

  {
    number: "04",
    icon: Shield,
    title: "Process Control",
    description: "Continuous monitoring and process validation.",
  },

  {
    number: "05",
    icon: PackageCheck,
    title: "Final Product",
    description: "Reliable, consistent and high-performance solutions.",
  },
];

// ============================================================
// CERTIFICATES PAGE
// ============================================================

const CertificatesPage = () => {
  // ============================================================
  // STATE
  // ============================================================

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const [activeCertificate, setActiveCertificate] = useState(0);

  // ============================================================
  // NEXT CERTIFICATE
  // ============================================================

  const nextCertificate = () => {
    setActiveCertificate((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1,
    );
  };

  // ============================================================
  // PREVIOUS CERTIFICATE
  // ============================================================

  const previousCertificate = () => {
    setActiveCertificate((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1,
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* ========================================================
          GLOBAL BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-64 top-[500px] h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-[150px]" />

        <div className="absolute -right-64 top-[1100px] h-[550px] w-[550px] rounded-full bg-cyan-100/40 blur-[160px]" />

        <div className="absolute left-1/2 top-[1900px] h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[160px]" />
      </div>

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative overflow-hidden bg-[#061A35]">
        {/* Hero Background Glow */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[130px]" />

          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

          <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        {/* Hero Content */}

        <div className="relative mx-auto max-w-[1500px] px-5 pb-28 pt-32 sm:px-7 sm:pb-32 sm:pt-36 lg:px-10 lg:pb-40 lg:pt-40">
          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <span>/</span>

            <span className="text-white">Certificates</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            {/* ==================================================
                LEFT HERO
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2">
                <Award size={17} className="text-cyan-300" />

                <span className="text-xs font-extrabold uppercase tracking-[2px] text-cyan-300">
                  Certifications & Quality
                </span>
              </div>

              {/* Heading */}

              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[68px]">
                Quality Standards Behind
                <span className="block">
                  Every{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                    KMR Conchem
                  </span>{" "}
                  Solution
                </span>
              </h1>

              {/* Description */}

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Our certifications represent our commitment to consistent
                quality, responsible manufacturing and dependable construction
                chemical solutions.
              </p>

              {/* Trust Points */}

              <div className="mt-9 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                    <Globe2 size={18} className="text-cyan-300" />
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    International Standards
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                    <BadgeCheck size={18} className="text-cyan-300" />
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    Trusted & Verified
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ==================================================
                RIGHT HERO CERTIFICATES
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="relative flex min-h-[360px] items-center justify-center"
            >
              {/* Glow */}

              <div className="absolute left-1/2 top-1/2 h-[300px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/15 blur-[90px]" />

              {/* Certificate 1 */}

              <motion.div
                initial={{
                  rotate: -8,
                  x: -20,
                }}
                animate={{
                  rotate: -7,
                  x: -35,
                }}
                whileHover={{
                  rotate: -3,
                  scale: 1.03,
                  x: -40,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute left-[8%] top-5 z-10 w-[46%] overflow-hidden rounded-xl border-[5px] border-slate-700 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
              >
                <img
                  src="/certificates/certificate-1.jpg"
                  alt="ISO 9001:2015 Certificate"
                  className="block aspect-[3/4] w-full object-cover"
                />
              </motion.div>

              {/* Certificate 2 */}

              <motion.div
                initial={{
                  rotate: 7,
                  x: 20,
                }}
                animate={{
                  rotate: 7,
                  x: 35,
                }}
                whileHover={{
                  rotate: 3,
                  scale: 1.03,
                  x: 40,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute right-[8%] top-10 z-20 w-[46%] overflow-hidden rounded-xl border-[5px] border-slate-700 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
              >
                <img
                  src="/certificates/certificate-2.jpg"
                  alt="ISO 14001:2015 Certificate"
                  className="block aspect-[3/4] w-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          TRUST STATS
      ======================================================== */}

      <section className="relative z-30 -mt-14 px-5 sm:px-7 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {trustCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                    <Icon size={27} />
                  </div>

                  <div>
                    <div className="text-3xl font-black text-[#123B79]">
                      {item.value}
                    </div>

                    <div className="text-sm font-extrabold text-[#102944]">
                      {item.title}
                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          OUR CERTIFICATIONS
      ======================================================== */}

      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">
          {/* Section Header */}

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
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-sky-300" />

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                Our Certifications
              </span>

              <span className="h-px w-12 bg-sky-300" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#102944] sm:text-5xl">
              Recognized Standards
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Our certification standards reflect our commitment to quality
              management and environmental responsibility.
            </p>
          </motion.div>

          {/* Certificate Slider */}

          <div className="relative mt-14">
            {/* Previous */}

            <button
              type="button"
              onClick={previousCertificate}
              aria-label="Previous certificate"
              className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B4DA2] text-white shadow-xl transition hover:scale-105 sm:flex"
            >
              <ChevronLeft size={21} />
            </button>

            {/* Next */}

            <button
              type="button"
              onClick={nextCertificate}
              aria-label="Next certificate"
              className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B4DA2] text-white shadow-xl transition hover:scale-105 sm:flex"
            >
              <ChevronRight size={21} />
            </button>

            {/* Certificate */}

            <AnimatePresence mode="wait">
              <motion.div
                key={certificates[activeCertificate].id}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="mx-auto grid max-w-[1100px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:grid-cols-[.85fr_1.15fr]"
              >
                {/* Image */}

                <div className="relative flex min-h-[480px] items-center justify-center bg-slate-50 p-7 sm:p-10">
                  <div className="relative h-full max-h-[530px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                    <img
                      src={certificates[activeCertificate].image}
                      alt={certificates[activeCertificate].title}
                      className="h-full max-h-[530px] w-full object-contain"
                    />

                    {/* Zoom */}

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCertificate(certificates[activeCertificate])
                      }
                      className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0B4DA2] px-4 py-2.5 text-xs font-bold text-white shadow-xl transition hover:-translate-y-1"
                    >
                      <Search size={15} />
                      View Certificate
                    </button>
                  </div>
                </div>

                {/* Information */}

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  {/* Icon */}

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    {(() => {
                      const Icon = certificates[activeCertificate].icon;

                      return <Icon size={28} />;
                    })()}
                  </div>

                  {/* Title */}

                  <h3 className="text-3xl font-black text-[#102944] sm:text-4xl">
                    {certificates[activeCertificate].title}
                  </h3>

                  <p className="mt-2 text-lg font-bold text-sky-600">
                    {certificates[activeCertificate].subtitle}
                  </p>

                  {/* Description */}

                  <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">
                    This certification demonstrates KMR Conchem's commitment to
                    maintaining structured systems, consistent processes and
                    dependable standards.
                  </p>

                  {/* Validity */}

                  <div className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-sky-50 px-4 py-2.5 text-xs font-bold text-sky-700">
                    <CalendarDays size={15} />
                    Valid until {certificates[activeCertificate].expiry}
                  </div>

                  {/* Button */}

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCertificate(certificates[activeCertificate])
                    }
                    className="group mt-7 flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-[#0B4DA2] to-sky-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    View Full Certificate
                    <Search
                      size={17}
                      className="transition-transform group-hover:scale-110"
                    />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}

            <div className="mt-7 flex justify-center gap-2">
              {certificates.map((certificate, index) => (
                <button
                  key={certificate.id}
                  type="button"
                  aria-label={`Show certificate ${index + 1}`}
                  onClick={() => setActiveCertificate(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeCertificate === index
                      ? "w-8 bg-sky-600"
                      : "w-2.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CERTIFICATION DETAILS
      ======================================================== */}

      <section className="relative bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
          {/* Header */}

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
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-sky-300" />

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                Certificate Details
              </span>

              <span className="h-px w-12 bg-sky-300" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#102944] sm:text-5xl">
              Certification Information
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Detailed information from our current certification records.
            </p>
          </motion.div>

          {/* Details Grid */}

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {certificates.map((certificate, index) => {
              const Icon = certificate.icon;

              return (
                <motion.article
                  key={certificate.id}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.06)]"
                >
                  {/* Header */}

                  <div className="flex items-center gap-4 border-b border-slate-200 bg-gradient-to-r from-sky-50 to-blue-50 px-6 py-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="text-base font-black text-[#102944]">
                        {certificate.title}
                      </h3>

                      <p className="mt-0.5 text-xs font-semibold text-slate-500">
                        {certificate.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Information */}

                  <div className="divide-y divide-slate-100">
                    {/* Certification Body */}

                    <div className="grid grid-cols-[32px_1fr_auto] items-start gap-3 px-6 py-4">
                      <Building2 size={18} className="mt-0.5 text-sky-600" />

                      <span className="text-sm font-semibold text-slate-600">
                        Certification Body
                      </span>

                      <span className="text-right text-sm font-bold text-[#102944]">
                        {certificate.certificationBody}
                      </span>
                    </div>

                    {/* Certificate Number */}

                    <div className="grid grid-cols-[32px_1fr_auto] items-start gap-3 px-6 py-4">
                      <FileCheck2 size={18} className="mt-0.5 text-sky-600" />

                      <span className="text-sm font-semibold text-slate-600">
                        Certificate Number
                      </span>

                      <span className="text-right text-sm font-bold text-[#102944]">
                        {certificate.certificateNumber}
                      </span>
                    </div>

                    {/* Date */}

                    <div className="grid grid-cols-[32px_1fr_auto] items-start gap-3 px-6 py-4">
                      <CalendarDays size={18} className="mt-0.5 text-sky-600" />

                      <span className="text-sm font-semibold text-slate-600">
                        Date of Certification
                      </span>

                      <span className="text-right text-sm font-bold text-[#102944]">
                        {certificate.certificationDate}
                      </span>
                    </div>

                    {/* First Audit */}

                    <div className="grid grid-cols-[32px_1fr_auto] items-start gap-3 px-6 py-4">
                      <Search size={18} className="mt-0.5 text-sky-600" />

                      <span className="text-sm font-semibold text-slate-600">
                        1st Surveillance Audit
                      </span>

                      <span className="text-right text-sm font-bold text-[#102944]">
                        {certificate.firstAudit}
                      </span>
                    </div>

                    {/* Second Audit */}

                    <div className="grid grid-cols-[32px_1fr_auto] items-start gap-3 px-6 py-4">
                      <Search size={18} className="mt-0.5 text-sky-600" />

                      <span className="text-sm font-semibold text-slate-600">
                        2nd Surveillance Audit
                      </span>

                      <span className="text-right text-sm font-bold text-[#102944]">
                        {certificate.secondAudit}
                      </span>
                    </div>

                    {/* Expiry */}

                    <div className="grid grid-cols-[32px_1fr_auto] items-start gap-3 px-6 py-4">
                      <BadgeCheck
                        size={18}
                        className="mt-0.5 text-emerald-500"
                      />

                      <span className="text-sm font-semibold text-slate-600">
                        Certificate Expiry
                      </span>

                      <span className="text-right text-sm font-black text-emerald-600">
                        {certificate.expiry}
                      </span>
                    </div>

                    {/* Scope */}

                    <div className="grid grid-cols-[32px_1fr] items-start gap-3 px-6 py-5">
                      <ShieldCheck size={18} className="mt-0.5 text-sky-600" />

                      <div>
                        <p className="text-sm font-semibold text-slate-600">
                          Scope of Certification
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {certificate.scope}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          QUALITY COMMITMENT
      ======================================================== */}

      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">
          {/* Header */}

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
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-sky-300" />

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                Our Commitment
              </span>

              <span className="h-px w-12 bg-sky-300" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#102944] sm:text-5xl">
              Our Commitment to Quality
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              From raw material to final product, quality is built into every
              step.
            </p>
          </motion.div>

          {/* Process */}

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {qualityProcess.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative text-center"
                >
                  {/* Connector */}

                  {index < qualityProcess.length - 1 && (
                    <div className="absolute left-[calc(50%+45px)] top-12 hidden h-px w-[calc(100%-70px)] bg-gradient-to-r from-sky-300 to-blue-300 lg:block" />
                  )}

                  {/* Icon */}

                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-sky-100 bg-sky-50 text-sky-700 shadow-[0_10px_35px_rgba(14,165,233,0.10)]">
                    <Icon size={32} />

                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#0B4DA2] text-[9px] font-black text-white">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-black text-[#102944]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          FINAL CTA
      ======================================================== */}

      <section className="relative px-5 pb-20 sm:px-7 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-[#061A35] px-7 py-10 shadow-[0_25px_70px_rgba(6,26,53,0.22)] sm:px-10 sm:py-12 lg:px-14"
        >
          {/* Glow */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/15 blur-[80px]" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            {/* Left */}

            <div className="flex items-start gap-5">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/5 sm:flex">
                <Headphones size={25} className="text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-white sm:text-3xl">
                  Looking for dependable construction chemical solutions?
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  Our certified products are engineered to deliver performance,
                  durability and trust.
                </p>
              </div>
            </div>

            {/* Buttons */}

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Our Products
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/10"
              >
                Contact Our Team
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================
          FULLSCREEN CERTIFICATE MODAL
      ======================================================== */}

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setSelectedCertificate(null)}
          >
            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-7 sm:top-7"
              aria-label="Close certificate preview"
            >
              <X size={22} />
            </button>

            {/* Certificate */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[94vh] max-w-[92vw] items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-2xl"
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[90vh] max-w-[88vw] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default CertificatesPage;
