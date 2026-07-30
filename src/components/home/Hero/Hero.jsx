import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { heroSlides } from "./heroData";
import HeroLeft from "./HeroLeft";

// ============================================================
// HERO COMPONENT
// KMR CONCHEM
// ============================================================

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = heroSlides[activeSlide] || heroSlides[0];

  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-[#020b16]
      "
    >
      {/* ========================================================
          BACKGROUND SLIDER
      ======================================================== */}

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1400}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        className="
          absolute
          inset-0
          h-full
          min-h-screen
          w-full
        "
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full w-full">
            <div className="relative h-full min-h-screen w-full overflow-hidden">
              {/* ====================================================
                  HERO IMAGE
              ==================================================== */}

              <motion.img
                src={slide.image}
                alt={`${slide.title} ${slide.highlight}`}
                initial={{
                  scale: 1.08,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 5.5,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* ====================================================
                  DARK OVERLAY
              ==================================================== */}

   <div
  className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/10"
/>

              {/* ====================================================
                  LEFT CONTENT GRADIENT
              ==================================================== */}

              <div
                className="
                  absolute
                  inset-y-0
                  left-0
                  w-full
                  lg:w-[55%]

from-[#020b16]/92
via-[#020b16]/45
to-transparent
                  bg-gradient-to-r
                 
                "
              />

              {/* ====================================================
                  TOP GRADIENT
              ==================================================== */}

              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-52
                  bg-gradient-to-b
                  from-[#020b16]/45
                  to-transparent
                "
              />

              {/* ====================================================
                  BOTTOM GRADIENT
              ==================================================== */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-72
                  bg-gradient-to-t
                  from-[#020b16]/70
via-[#020b16]/20
                  to-transparent
                "
              />

              {/* ====================================================
                  CYAN AMBIENT GLOW
              ==================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[12%]
                  top-[25%]
                  h-[300px]
                  w-[300px]
                  rounded-full
                  bg-cyan-400/5
blur-[100px]
                "
              />

              {/* ====================================================
                  BLUE AMBIENT GLOW
              ==================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[10%]
                  right-[8%]
                  h-[380px]
                  w-[380px]
                  rounded-full
                 bg-blue-600/5
                  blur-[140px]
                "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ========================================================
          DECORATIVE GRID
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* ========================================================
          TOP RIGHT CATEGORY
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-6
          top-28
          z-10
          hidden
          lg:block
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-white/10
            bg-black/20
            px-5
            py-2.5
            backdrop-blur-xl
          "
        >
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-cyan-400
              shadow-[0_0_14px_rgba(34,211,238,0.9)]
            "
          />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[2.5px]
              text-white/70
            "
          >
            {currentSlide.category}
          </span>
        </div>
      </div>

      {/* ========================================================
          SLIDE NUMBER
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-7
          top-44
          z-10
          hidden
          items-end
          gap-2
          lg:flex
        "
      >
        <span
          className="
            text-5xl
            font-black
            leading-none
            text-white/15
          "
        >
          {String(currentSlide.id).padStart(2, "0")}
        </span>

        <span
          className="
            mb-1
            text-xs
            font-semibold
            text-white/25
          "
        >
          / {String(heroSlides.length).padStart(2, "0")}
        </span>
      </div>

      {/* ========================================================
          MAIN CONTENT
      ======================================================== */}

      <div
        className="
    relative
    z-20
    flex
    h-full
    min-h-0
    items-center
  "
      >
        <div
          className="
    mx-auto
    flex
    h-full
    w-full
    max-w-[1500px]
    items-center

    pt-38
    pb-8

    lg:pt-28

    px-5
    sm:px-8
    lg:px-12
    xl:px-16
  "
        >
          <div
            className="
    grid
    w-full
    min-w-0
    items-center
    gap-8
    lg:grid-cols-[1.22fr_0.78fr]
    lg:gap-8
    xl:gap-10
  "
          >
            {/* ==================================================
                LEFT HERO
            ================================================== */}

            <HeroLeft
              currentSlide={currentSlide}
              activeSlide={activeSlide}
              heroSlides={heroSlides}
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          BOTTOM HERO CONTROLS
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-30
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1500px]
            items-end
            justify-between
            gap-6
            px-5
            pb-6
            sm:px-8
            lg:px-12
            xl:px-16
            xl:pb-8
          "
        >
          {/* ====================================================
              LEFT SLIDE INFO
          ==================================================== */}

          <div className="pointer-events-auto hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="flex items-end gap-1">
                <span
                  className="
                    text-3xl
                    font-black
                    leading-none
                    text-white
                    md:text-4xl
                  "
                >
                  {String(activeSlide + 1).padStart(2, "0")}
                </span>

                <span className="mb-0.5 text-sm text-white/30">/</span>

                <span className="mb-0.5 text-sm font-bold text-white/40">
                  {String(heroSlides.length).padStart(2, "0")}
                </span>
              </div>

              <div className="h-10 w-px bg-white/15" />

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[2.5px]
                    text-cyan-300
                  "
                >
                  Featured Solution
                </p>

                <p
                  className="
                    mt-1
                    max-w-[260px]
                    truncate
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {currentSlide.title}
                </p>
              </div>
            </div>
          </div>

          {/* ====================================================
              CENTER PROGRESS
          ==================================================== */}

          <div
            className="
              pointer-events-auto
              hidden
              flex-1
              max-w-md
              items-center
              justify-center
              gap-2
              md:flex
            "
          >
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  // Swiper navigation is handled by DOM buttons
                  const swiperElement = document.querySelector(".swiper");

                  if (swiperElement?.swiper) {
                    swiperElement.swiper.slideToLoop(index);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
                className="
                  group
                  flex
                  h-8
                  items-center
                  justify-center
                "
              >
                <span
                  className={`
                    relative
                    block
                    h-[2px]
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      index === activeSlide
                        ? "w-12 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.65)]"
                        : "w-5 bg-white/25 group-hover:w-8 group-hover:bg-white/50"
                    }
                  `}
                />
              </button>
            ))}
          </div>

          {/* ====================================================
              RIGHT TRUST INDICATOR
          ==================================================== */}

          <div
            className="
              pointer-events-auto
              hidden
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.06]
              px-4
              py-2.5
              backdrop-blur-xl
              lg:flex
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-emerald-400
                "
              />
            </span>

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[1.8px]
                text-slate-300
              "
            >
              Trusted Manufacturing
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          FLOATING QUALITY BADGE
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-20
          left-6
          z-30
          hidden
          lg:block
          xl:left-10
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-slate-950/50
            px-4
            py-3
            shadow-[0_15px_40px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-cyan-400/10
            "
          >
            <span className="text-lg">✓</span>
          </div>

          <div>
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[1.8px]
                text-cyan-300
              "
            >
              Quality First
            </p>

            <p className="mt-0.5 text-xs font-semibold text-white">
              Tested & Trusted Solutions
            </p>
          </div>
        </motion.div>
      </div>

      {/* ========================================================
          FLOATING EXPERIENCE BADGE
      ======================================================== */}

      <div
        className="
    pointer-events-none
    absolute
    right-32
    top-56
    z-30
    hidden
    xl:block
    2xl:right-20
  "
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-slate-950/45
            px-4
            py-3
            shadow-[0_15px_40px_rgba(0,0,0,0.22)]
            backdrop-blur-xl
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-amber-400/10
            "
          >
            <span className="text-lg">★</span>
          </div>

          <div>
            <p className="text-xl font-black leading-none text-white">20+</p>

            <p
              className="
                mt-1
                text-[9px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-slate-400
              "
            >
              Years Experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
