import React from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Droplets,
  Layers3,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

// ============================================================
// HERO RIGHT
// KMR CONCHEM
// ============================================================

export default function HeroRight({ currentSlide }) {
  const products = [
    {
      title: "Waterproofing Systems",
      description: "Roof, terrace & basement protection",
      icon: Droplets,
    },
    {
      title: "Concrete Repair Systems",
      description: "Repair mortars & bonding solutions",
      icon: Layers3,
    },
    {
      title: "Industrial Flooring",
      description: "Heavy-duty industrial floor systems",
      icon: Factory,
    },
    {
      title: "Protective Coatings",
      description: "Advanced surface protection",
      icon: ShieldCheck,
    },
    {
      title: "Tile Adhesives",
      description: "Reliable high-performance bonding",
      icon: CheckCircle2,
    },
    {
      title: "Cementitious Grouts",
      description: "Strong & dependable filling systems",
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-w-0">
      {/* ========================================================
          DESKTOP PANEL
      ======================================================== */}

      <motion.div
        key={currentSlide.id}
        initial={{
          opacity: 0,
          x: 55,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.85,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="relative"
      >
        {/* ======================================================
            OUTER GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-8
            rounded-[45px]
            bg-cyan-400/10
            blur-[70px]
          "
        />

        {/* ======================================================
            GLASS PANEL
        ====================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/15
            bg-[#071827]/70
            shadow-[0_30px_100px_rgba(0,0,0,0.4)]
            backdrop-blur-2xl
          "
        >
          {/* TOP LINE */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
            "
          />

          {/* CORNER GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-52
              w-52
              rounded-full
              bg-cyan-400/10
              blur-[70px]
            "
          />

          {/* ====================================================
              PANEL HEADER
          ==================================================== */}

          <div className="relative border-b border-white/10 p-7 xl:p-8">
            {/* COMPANY */}

            <div
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-cyan-400/15
                bg-cyan-400/[0.08]
                px-4
                py-2
              "
            >
              <div
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-cyan-400/15
                "
              >
                <Factory
                  size={15}
                  className="text-cyan-300"
                />
              </div>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[2.2px]
                  text-cyan-200
                "
              >
                KMR Conchem Pvt. Ltd.
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                mt-6
                text-3xl
                font-black
                leading-[1.05]
                tracking-tight
                text-white
                xl:text-[40px]
              "
            >
              Complete

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  to-sky-400
                  bg-clip-text
                  text-transparent
                "
              >
                Construction Solutions
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-slate-300/80
              "
            >
              High-performance chemical systems designed for
              waterproofing, repair, protection, flooring and modern
              infrastructure applications.
            </p>
          </div>

          {/* ====================================================
              FEATURED SOLUTION
          ==================================================== */}

          <div className="relative px-7 pt-6 xl:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-slate-500
                  "
                >
                  Featured Solution
                </p>

                <p className="mt-1.5 text-sm font-bold text-white">
                  {currentSlide.category}
                </p>
              </div>

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-400/15
                  bg-emerald-400/[0.07]
                  px-3
                  py-1.5
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_10px_rgba(52,211,153,0.8)]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[1.5px]
                    text-emerald-300
                  "
                >
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* ====================================================
              PRODUCTS
          ==================================================== */}

          <div className="space-y-2.5 px-7 py-6 xl:px-8">
            {products.map((product, index) => {
              const ProductIcon = product.icon;

              return (
                <motion.div
                  key={product.title}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.35 + index * 0.06,
                  }}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    gap-4
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.035]
                    px-4
                    py-3.5
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-cyan-400/25
                    hover:bg-cyan-400/[0.07]
                  "
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-cyan-400/10
                        bg-cyan-400/[0.08]
                        transition-all
                        duration-300
                        group-hover:border-cyan-400/20
                        group-hover:bg-cyan-400/15
                      "
                    >
                      <ProductIcon
                        size={18}
                        strokeWidth={1.8}
                        className="
                          text-cyan-300
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0">
                      <h4
                        className="
                          truncate
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        {product.title}
                      </h4>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-[11px]
                          text-slate-500
                        "
                      >
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={17}
                    className="
                      shrink-0
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-cyan-300
                    "
                  />
                </motion.div>
              );
            })}
          </div>

          {/* ====================================================
              STATS
          ==================================================== */}

          <div className="grid grid-cols-3 border-t border-white/10">
            {currentSlide.stats.map((stat, index) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className={`
                  px-3
                  py-5
                  text-center
                  ${index !== 0 ? "border-l border-white/10" : ""}
                `}
              >
                <div
                  className="
                    text-2xl
                    font-black
                    text-cyan-300
                    xl:text-3xl
                  "
                >
                  {stat.value}
                </div>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-medium
                    leading-4
                    text-slate-500
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* ====================================================
              FOOTER
          ==================================================== */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-5
              border-t
              border-white/10
              bg-white/[0.025]
              px-7
              py-5
              xl:px-8
            "
          >
            <div className="min-w-0">
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[1.5px]
                  text-slate-500
                "
              >
                Building With
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                Chemistry & Innovation
              </p>
            </div>

            <button
              type="button"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-full
                bg-cyan-500
                px-5
                py-2.5
                text-xs
                font-bold
                text-white
                shadow-[0_8px_25px_rgba(6,182,212,0.2)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-cyan-400
              "
            >
              View Products

              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}