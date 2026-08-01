import React from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Factory,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

export default function HeroLeft({ currentSlide, activeSlide, heroSlides }) {

  const navigate=useNavigate();
  return (
    <div
      className="
        min-w-0
        w-full
       max-w-[1080px]
      "
    >
      <motion.div
        key={currentSlide.id}
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
       className="
  relative
  w-full
  pt-8
  lg:pt-12
"
      >
        {/* ======================================================
            COMPANY BADGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
            delay: 0.1,
          }}
          className="
            inline-flex
            max-w-full
            items-center
            gap-2.5
            rounded-full
            border
            border-cyan-400/25
            bg-white/[0.07]
           px-3 py-1.5
            shadow-[0_10px_35px_rgba(0,0,0,0.15)]
            backdrop-blur-xl

            sm:px-4
            sm:py-2.5
          "
        >
          <div
            className="
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-cyan-400/15

              sm:h-7
              sm:w-7
            "
          >
            <ShieldCheck size={13} className="text-cyan-300" />
          </div>

          <span
            className="
              truncate
              text-[7px]
              font-bold
              uppercase
              tracking-[1.6px]
              text-cyan-100

              sm:text-[9px]
              sm:tracking-[2px]
            "
          >
            {currentSlide.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.15,
          }}
          className="
            mt-4

            /* WIDTH INCREASED */
            w-full
            max-w-[880px]

            /* COMPACT FONT */
            text-[30px]
            font-black
            leading-[1.02]
            tracking-[-1.4px]
            text-white

           sm:text-[38px]
md:text-[44px]
lg:text-[50px]
xl:text-[56px]

            xl:tracking-[-2px]
          "
        >
          {currentSlide.title}

          <span
            className="
              mt-1
              block
              bg-gradient-to-r
              from-cyan-300
              via-cyan-400
              to-sky-400
              bg-clip-text
              text-transparent
            "
          >
            {currentSlide.highlight}
          </span>
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            width: 0,
          }}
          animate={{
            opacity: 1,
            width: "auto",
          }}
          transition={{
            duration: 0.65,
            delay: 0.35,
          }}
          className="
            mt-4
            flex
            items-center
            gap-2
          "
        >
          <span className="h-[2px] w-12 bg-cyan-400" />

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-cyan-400
              shadow-[0_0_12px_rgba(34,211,238,0.8)]
            "
          />

          <span className="h-[2px] w-7 bg-cyan-400/30" />
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.4,
          }}
          className="
            mt-5

            w-full
            max-w-[820px]

            text-[13px]
            leading-5
            text-slate-200/80

            sm:text-[15px]
            sm:leading-7

            lg:text-[15px]
          "
        >
          {currentSlide.subtitle}
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
            delay: 0.5,
          }}
          className="
            mt-4
            flex
            items-center
            gap-2
          "
        >
          <CheckCircle2
            size={16}
            strokeWidth={2.2}
            className="shrink-0 text-cyan-400"
          />

          <span
            className="
              text-xs
              font-semibold
              tracking-wide
              text-white/65

              sm:text-sm
            "
          >
            {currentSlide.badge}
          </span>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.6,
          }}
          className="
            mt-5
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          {/* PRIMARY CTA */}

          <button
            type="button"
            className="
              group
              inline-flex
              items-center
              gap-2.5
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-sky-500
              px-4
              py-2.5
              text-xs
              font-bold
              text-white
              shadow-[0_12px_35px_rgba(6,182,212,0.28)]
              transition-all
              duration-300

              hover:-translate-y-1
              hover:from-cyan-400
              hover:to-sky-400
              hover:shadow-[0_18px_40px_rgba(6,182,212,0.4)]

              sm:px-6
              sm:py-3.5
              sm:text-sm
            "

             onClick={()=>navigate("/products")}
          >
            Explore Products
            <ArrowRight
              size={17}
              strokeWidth={2.5}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1.5
              "
            />
          </button>

          {/* SECONDARY CTA */}

          <button 
            type="button"
            className="
              group
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-white/15
              bg-white/[0.07]
              px-4
              py-2.5
              text-[11px]
              font-bold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-cyan-400/40
              hover:bg-white/10

              sm:px-6
              sm:py-3.5
              sm:text-sm
            "

            onClick={()=>navigate("/contact")}
          >
            <Phone
              size={16}
              className="
                text-cyan-300
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
            Contact Us
          </button>
        </motion.div>

        {/* ======================================================
            TRUST LINE
            TRUSTED SOLUTIONS SLIGHTLY RIGHT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.65,
            delay: 0.75,
          }}
          className="
    mt-16

    flex
    items-center
    flex-nowrap

    gap-3

    whitespace-nowrap

    text-[11px]
    text-white/45

    sm:text-xs

    lg:ml-[180px]
    xl:ml-[240px]
  "
        >
          {/* ADVANCED MANUFACTURING */}

          <div className="flex items-center gap-1.5 shrink-0">
            <Factory size={14} className="text-cyan-400/80" />

            <span>Advanced Manufacturing</span>
          </div>

          {/* SEPARATOR */}

          <span
            className="
      h-1
      w-1
      shrink-0
      rounded-full
      bg-white/25
    "
          />

          {/* QUALITY FOCUSED */}

          <div className="flex items-center gap-1.5 shrink-0">
            <ShieldCheck size={14} className="text-cyan-400/80" />

            <span>Quality Focused</span>
          </div>

          {/* SEPARATOR */}

          <span
            className="
      h-1
      w-1
      shrink-0
      rounded-full
      bg-white/25
    "
          />

          {/* TRUSTED SOLUTIONS */}

          <div className="flex items-center gap-1.5 shrink-0">
            <Award size={14} className="text-cyan-400/80" />

            <span>Trusted Solutions</span>
          </div>
        </motion.div>
        {/* ======================================================
            MOBILE SLIDER INDICATOR
        ====================================================== */}

        <div
          className="
            mt-7
            flex
            items-center
            gap-2
            lg:hidden
          "
        >
          {heroSlides.map((slide, index) => (
            <span
              key={slide.id}
              className={`
                h-1
                rounded-full
                transition-all
                duration-500

                ${index === activeSlide ? "w-8 bg-cyan-400" : "w-2 bg-white/25"}
              `}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
