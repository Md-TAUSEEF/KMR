
import { ArrowRight, CheckCircle2, Handshake, Sparkles } from "lucide-react";

import { clientData } from "./clientData";

// ============================================================
// SPLIT CLIENTS INTO TWO ROWS
// ============================================================

const clientsRow1 = clientData.filter((_, index) => index % 2 === 0);
const clientsRow2 = clientData.filter((_, index) => index % 2 !== 0);

// ============================================================
// CLIENT CARD
// ============================================================

function ClientCard({ client }) {
  return (
    <div
      className="
        group relative flex h-[92px] w-[190px] shrink-0
        items-center justify-center
        overflow-hidden rounded-2xl
        border border-slate-200
        bg-white
        px-5
        shadow-[0_4px_18px_rgba(15,23,42,0.025)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-sky-300
        hover:shadow-[0_14px_35px_rgba(14,165,233,0.10)]
        sm:h-[98px]
        sm:w-[215px]
        lg:h-[105px]
        lg:w-[235px]
      "
    >
      {/* ======================================================
          CARD GLOW
      ====================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-28
          w-28
          rounded-full
          bg-sky-100/60
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-sky-200/80
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -bottom-12
          -left-12
          h-24
          w-24
          rounded-full
          bg-blue-100/50
          blur-3xl
        "
      />

      {/* ======================================================
          LOGO
      ====================================================== */}

      <img
        src={client.logo}
        alt={`${client.name} logo`}
        loading="lazy"
        draggable="false"
        className="
          relative
          z-10
          max-h-[54px]
          max-w-[145px]
          object-contain
          opacity-90
          transition-all
          duration-500
          group-hover:scale-105
          group-hover:opacity-100
          sm:max-h-[60px]
          sm:max-w-[165px]
          lg:max-h-[64px]
          lg:max-w-[180px]
        "
      />
    </div>
  );
}

// ============================================================
// MARQUEE ROW
// ============================================================

function MarqueeRow({ clients, direction = "left" }) {
  /*
    Duplicate the complete row multiple times.

    This creates a seamless continuous marquee without
    a visible jump when the animation restarts.
  */

  const items = [...clients, ...clients, ...clients];

  return (
    <div className="relative overflow-hidden">
      {/* ======================================================
          LEFT FADE
      ====================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-full
          w-14
          bg-gradient-to-r
          from-white
          to-transparent
          sm:w-20
          lg:w-28
        "
      />

      {/* ======================================================
          RIGHT FADE
      ====================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20
          h-full
          w-14
          bg-gradient-to-l
          from-white
          to-transparent
          sm:w-20
          lg:w-28
        "
      />

      {/* ======================================================
          MARQUEE TRACK
      ====================================================== */}

      <div
        className={`
          clients-marquee-track
          flex
          w-max
          items-center
          gap-3
          sm:gap-4
          lg:gap-5
          ${
            direction === "right"
              ? "clients-marquee-right"
              : "clients-marquee-left"
          }
        `}
      >
        {items.map((client, index) => (
          <ClientCard
            key={`${client.id}-${index}`}
            client={client}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

const Clients = () => {
  return (
    <section
      id="clients"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-[-170px]
            h-[430px]
            w-[760px]
            -translate-x-1/2
            rounded-full
            bg-sky-500/[0.035]
            blur-3xl
          "
        />

        {/* Subtle grid */}

        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #EEF1F6 1px, transparent 1px), linear-gradient(to bottom, #EEF1F6 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 15%, black 15%, transparent 100%)",
          }}
        />

        {/* Side glow */}

        <div
          className="
            absolute
            -left-40
            top-1/2
            h-[300px]
            w-[300px]
            -translate-y-1/2
            rounded-full
            bg-sky-100/40
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-40
            top-1/2
            h-[300px]
            w-[300px]
            -translate-y-1/2
            rounded-full
            bg-blue-100/40
            blur-[110px]
          "
        />
      </div>

      <div className="relative">
        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow */}

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-slate-900" />

              <div className="flex items-center gap-2">
                <Handshake
                  size={13}
                  className="text-sky-600"
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-slate-500
                  "
                >
                  Our Clients
                </span>
              </div>

              <span className="h-px w-8 bg-slate-900" />
            </div>

            {/* Heading */}

            <h2
              className="
                text-3xl
                font-semibold
                leading-[1.08]
                tracking-[-0.045em]
                text-slate-950
                sm:text-4xl
                lg:text-[3.15rem]
              "
            >
              Trusted by industry leaders.
              <span className="block text-slate-400">
                Built on lasting partnerships.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-slate-500
                sm:text-[15px]
              "
            >
              We are proud to work with construction companies,
              infrastructure developers, builders and organizations
              across diverse projects and industries.
            </p>
          </div>
        </div>

        {/* ====================================================
            CLIENT MARQUEE
        ==================================================== */}

        <div className="mt-12 space-y-3 sm:mt-14 sm:space-y-4">
          {/* ==================================================
              ROW 1
              LEFT → RIGHT
          ================================================== */}

          <MarqueeRow
            clients={clientsRow1}
            direction="right"
          />

          {/* ==================================================
              ROW 2
              RIGHT → LEFT
          ================================================== */}

          <MarqueeRow
            clients={clientsRow2}
            direction="left"
          />
        </div>

        {/* ====================================================
            TRUST STRIP
        ==================================================== */}

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              mx-auto
              mt-9
              flex
              flex-col
              items-center
              justify-between
              gap-5
              rounded-2xl
              border
              border-slate-200
              bg-slate-50/80
              px-5
              py-5
              sm:flex-row
              sm:px-7
            "
          >
            {/* Left */}

            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-500/10
                "
              >
                <CheckCircle2
                  size={16}
                  className="text-emerald-500"
                />
              </span>

              <div>
                <p className="text-[11px] font-semibold text-slate-800">
                  Trusted partnerships
                </p>

                <p className="mt-0.5 text-[9.5px] text-slate-400">
                  Construction • Infrastructure • Real Estate •
                  Industrial Projects
                </p>
              </div>
            </div>

            {/* Right */}

            <a
              href="#contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-semibold
                text-slate-700
                transition-colors
                hover:text-slate-950
              "
            >
              Work With Us

              <ArrowRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* ==================================================
              SUPPORTING TEXT
          ================================================== */}

          <div className="mt-5 flex items-center justify-center gap-2 text-center">
            <Sparkles
              size={11}
              className="shrink-0 text-sky-400"
            />

            <p className="text-[8.5px] leading-5 text-slate-400">
              A growing network of clients and project partners
              across construction and infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================
          MARQUEE ANIMATION
      ====================================================== */}

      <style>{`
        .clients-marquee-track {
          will-change: transform;
        }

        .clients-marquee-left {
          animation: clientsMarqueeLeft 42s linear infinite;
        }

        .clients-marquee-right {
          animation: clientsMarqueeRight 42s linear infinite;
        }

        .clients-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes clientsMarqueeLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333333%);
          }
        }

        @keyframes clientsMarqueeRight {
          from {
            transform: translateX(-33.333333%);
          }

          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 640px) {
          .clients-marquee-left {
            animation-duration: 32s;
          }

          .clients-marquee-right {
            animation-duration: 32s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clients-marquee-left,
          .clients-marquee-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;
