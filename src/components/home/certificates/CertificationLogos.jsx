import { Award, ShieldCheck, BadgeCheck } from "lucide-react";

/* ============================================================
   CERTIFICATION DATA
============================================================ */

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

/* ============================================================
   CERTIFICATION CARD
============================================================ */

function CertificationCard({ certification }) {
  return (
    <div className="group flex h-[120px] w-[175px] shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 shadow-[0_4px_18px_rgba(15,23,42,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:h-[132px] sm:w-[195px]">
      <img
        src={certification.image}
        alt={`${certification.name} certification`}
        loading="lazy"
        className="max-h-[78px] max-w-[135px] object-contain opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 sm:max-h-[88px] sm:max-w-[150px]"
      />
    </div>
  );
}

/* ============================================================
   MARQUEE ROW
============================================================ */

function MarqueeRow({
  certifications,
  direction = "left",
}) {
  /*
    Duplicate the complete set multiple times so the
    marquee can loop smoothly without an obvious jump.
  */

  const items = [
    ...certifications,
    ...certifications,
    ...certifications,
  ];

  return (
    <div className="relative overflow-hidden">
      {/* LEFT FADE */}

      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24 lg:w-32"
      />

      {/* RIGHT FADE */}

      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24 lg:w-32"
      />

      {/* TRACK */}

      <div
        className={`certification-marquee-track flex w-max items-center gap-3 sm:gap-4 ${
          direction === "right"
            ? "certification-marquee-right"
            : "certification-marquee-left"
        }`}
      >
        {items.map((certification, index) => (
          <CertificationCard
            key={`${certification.id}-${index}`}
            certification={certification}
          />
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

const CertificationLogos = () => {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        {/* CENTER GLOW */}

        <div className="absolute left-1/2 top-[-160px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-sky-500/[0.035] blur-3xl" />

        {/* LEFT GLOW */}

        <div className="absolute -left-40 top-[300px] h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-[120px]" />

        {/* RIGHT GLOW */}

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-[130px]" />

        {/* SUBTLE GRID */}

        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #EEF1F6 1px, transparent 1px), linear-gradient(to bottom, #EEF1F6 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 25%, black 15%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative">
        {/* ====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* SECTION LABEL */}

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-slate-900" />

              <div className="flex items-center gap-2">
                <Award
                  size={14}
                  strokeWidth={2}
                  className="text-sky-600"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500 sm:text-[11px]">
                  Certifications & Standards
                </span>
              </div>

              <span className="h-px w-8 bg-slate-900" />
            </div>

            {/* HEADING */}

            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.15rem]">
              Certified quality.
              <span className="block text-slate-400">
                Trusted performance.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px]">
              Our commitment to quality, safety and reliable construction
              chemical solutions is supported by recognized standards and
              certifications.
            </p>
          </div>
        </div>

        {/* ====================================================
            CERTIFICATION MARQUEE
        ===================================================== */}

        <div className="mt-12 space-y-3 sm:mt-14 sm:space-y-4">
          {/* ==================================================
              ROW 1
              LEFT → RIGHT
          ================================================== */}

          <MarqueeRow
            certifications={certificationLogos}
            direction="right"
          />

          {/* ==================================================
              ROW 2
              RIGHT → LEFT
          ================================================== */}

          <MarqueeRow
            certifications={certificationLogos}
            direction="left"
          />
        </div>

        {/* ====================================================
            BOTTOM TRUST STRIP
        ===================================================== */}

        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-8 max-w-6xl">
            <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-5 sm:flex-row sm:px-7">
              {/* LEFT */}

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10">
                  <ShieldCheck
                    size={16}
                    className="text-sky-600"
                  />
                </span>

                <div>
                  <p className="text-[11px] font-semibold text-slate-800">
                    Quality & safety standards
                  </p>

                  <p className="mt-0.5 text-[9.5px] text-slate-400">
                    Quality • Safety • Reliability • Performance
                  </p>
                </div>
              </div>

              {/* RIGHT */}

              <div className="flex items-center gap-2">
                <BadgeCheck
                  size={14}
                  className="text-emerald-500"
                />

                <span className="text-[10px] font-semibold text-slate-600">
                  Certified Standards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================
          MARQUEE ANIMATION
      ===================================================== */}

      <style>{`
        .certification-marquee-track {
          will-change: transform;
        }

        .certification-marquee-left {
          animation: certificationMarqueeLeft 32s linear infinite;
        }

        .certification-marquee-right {
          animation: certificationMarqueeRight 32s linear infinite;
        }

        .certification-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes certificationMarqueeLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333333%);
          }
        }

        @keyframes certificationMarqueeRight {
          from {
            transform: translateX(-33.333333%);
          }

          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 640px) {
          .certification-marquee-left {
            animation-duration: 26s;
          }

          .certification-marquee-right {
            animation-duration: 26s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .certification-marquee-left,
          .certification-marquee-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default CertificationLogos;