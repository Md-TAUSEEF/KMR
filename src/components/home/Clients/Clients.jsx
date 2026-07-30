import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Handshake,
} from "lucide-react";

import { clientData } from "./clientData";

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // ============================================================
  // RESPONSIVE VISIBLE CARDS
  // ============================================================

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(4);
      } else {
        // DESKTOP = 6 LOGOS
        setVisibleCount(6);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCount
      );
    };
  }, []);

  // ============================================================
  // MAX SLIDER INDEX
  // ============================================================

  const maxIndex = Math.max(
    0,
    clientData.length - visibleCount
  );

  // ============================================================
  // KEEP INDEX SAFE AFTER RESIZE
  // ============================================================

  useEffect(() => {
    setCurrentIndex((prev) =>
      Math.min(prev, maxIndex)
    );
  }, [maxIndex]);

  // ============================================================
  // AUTO SLIDE
  // EVERY 5 SECONDS
  // ============================================================

  useEffect(() => {
    if (
      isPaused ||
      clientData.length <= visibleCount
    ) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (direction === 1) {
          if (prev >= maxIndex) {
            setDirection(-1);
            return Math.max(0, prev - 1);
          }

          return prev + 1;
        }

        if (prev <= 0) {
          setDirection(1);
          return Math.min(maxIndex, prev + 1);
        }

        return prev - 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [
    direction,
    maxIndex,
    visibleCount,
    isPaused,
  ]);

  // ============================================================
  // NEXT
  // ============================================================

  const nextSlide = () => {
    setDirection(1);

    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;
    });
  };

  // ============================================================
  // PREVIOUS
  // ============================================================

  const previousSlide = () => {
    setDirection(-1);

    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;
    });
  };

  // ============================================================
  // CARD WIDTH
  // ============================================================

  const cardWidth = `${100 / visibleCount}%`;

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      {/* ========================================================
          BACKGROUND GLOW
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 top-0 h-[350px] w-[350px] rounded-full bg-sky-100/60 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[130px]" />

      </div>

      {/* ========================================================
          CONTAINER
      ======================================================== */}

      <div className="relative mx-auto max-w-[1550px] px-4 sm:px-8 lg:px-14 xl:px-20">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 shadow-sm">
            <Handshake
              size={17}
              className="text-sky-600"
            />

            <span className="text-xs font-bold uppercase tracking-[2px] text-sky-700">
              Our Clients
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Trusted By{" "}
            <span className="text-sky-600">
              Leading Companies
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We are proud to serve a growing network of
            construction companies, infrastructure developers,
            builders and industry leaders.
          </p>
        </motion.div>

        {/* ======================================================
            SLIDER AREA
        ====================================================== */}

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* ====================================================
              LEFT ARROW
              OUTSIDE CARDS
          ==================================================== */}

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous clients"
            className="absolute left-[-8px] top-1/2 z-30 hidden h-11 w-11 -translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_8px_25px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-sky-400 hover:bg-sky-600 hover:text-white hover:shadow-[0_12px_30px_rgba(14,165,233,0.25)] xl:flex"
          >
            <ChevronLeft size={21} />
          </button>

          {/* ====================================================
              RIGHT ARROW
              OUTSIDE CARDS
          ==================================================== */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next clients"
            className="absolute right-[-8px] top-1/2 z-30 hidden h-11 w-11 translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_8px_25px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-sky-400 hover:bg-sky-600 hover:text-white hover:shadow-[0_12px_30px_rgba(14,165,233,0.25)] xl:flex"
          >
            <ChevronRight size={21} />
          </button>

          {/* ====================================================
              VIEWPORT
          ==================================================== */}

          <div className="overflow-hidden px-1 py-4">

            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * (100 / visibleCount)}%`,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {clientData.map((client) => (
                <div
                  key={client.id}
                  className="shrink-0 px-2"
                  style={{
                    width: cardWidth,
                  }}
                >
                  {/* ==================================================
                      CLIENT LOGO CARD
                  ================================================== */}

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group relative flex h-[155px] items-center justify-center overflow-hidden rounded-[22px] border border-slate-200 bg-white px-5 py-5 shadow-[0_8px_28px_rgba(15,23,42,0.055)] transition-all duration-300 hover:border-sky-300 hover:shadow-[0_15px_35px_rgba(14,165,233,0.12)]"
                  >

                    {/* Background Glow */}

                    <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-sky-100/60 blur-3xl transition-all duration-500 group-hover:bg-sky-200" />

                    <div className="pointer-events-none absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-blue-100/50 blur-3xl" />

                    {/* ==================================================
                        ONLY LOGO
                    ================================================== */}

                    <img
                      src={client.logo}
                      alt={client.name}
                      className="relative max-h-[80px] w-auto max-w-[165px] object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                  </motion.div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ====================================================
              MOBILE / TABLET BUTTONS
          ==================================================== */}

          <div className="mt-4 flex justify-center gap-3 xl:hidden">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous clients"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:border-sky-400 hover:bg-sky-600 hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next clients"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:border-sky-400 hover:bg-sky-600 hover:text-white"
            >
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

        {/* ======================================================
            TRUST TEXT
        ====================================================== */}

        <div className="mt-7 text-center">
          <p className="text-sm font-semibold text-slate-500">
            Trusted by{" "}
            <span className="font-black text-sky-700">
              35+
            </span>{" "}
            companies & organizations
          </p>
        </div>

      </div>
    </section>
  );
};

export default Clients;

