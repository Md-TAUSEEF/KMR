import React from "react";

import {
  ShieldCheck,
  FlaskConical,
  Microscope,
  Factory,
  Package,
  Truck,
  ShoppingCart,
  Award,
  Cog,
  Leaf,
  Users,
  ChevronRight,
} from "lucide-react";

//first image ye h
import main from "../../../assets/manufac/main.webp";

import rawMaterialImage from "../../../assets/manufac/raw-material.webp";
import researchDevelopmentImage from "../../../assets/manufac/research-development.webp";
import advancedProductionImage from "../../../assets/manufac/advanced-production.webp";
import qualityTestingImage from "../../../assets/manufac/quality-testing.webp";
import packagingImage from "../../../assets/manufac/packaging.webp";
import deliveryImage from "../../../assets/manufac/delivery.webp";

const ManufacturingProcess = () => {
  // =========================================================
  // MANUFACTURING PROCESS DATA
  // =========================================================

 const processSteps = [
  {
    number: "01",
    title: "Raw Material",
    subtitle: "Selection",
    icon: ShoppingCart,
    image: rawMaterialImage,
    color: "#0EA5E9", // Sky
    description: "...",
  },
  {
    number: "02",
    title: "Research &",
    subtitle: "Development",
    icon: Microscope,
    image: researchDevelopmentImage,
    color: "#8B5CF6", // Violet
    description: "...",
  },
  {
    number: "03",
    title: "Advanced",
    subtitle: "Production",
    icon: Factory,
    image: advancedProductionImage,
    color: "#F97316", // Orange
    description: "...",
  },
  {
    number: "04",
    title: "Quality",
    subtitle: "Testing",
    icon: ShieldCheck,
    image: qualityTestingImage,
    color: "#10B981", // Emerald
    description: "...",
  },
  {
    number: "05",
    title: "Packaging",
    subtitle: "",
    icon: Package,
    image: packagingImage,
    color: "#EC4899", // Pink
    description: "...",
  },
  {
    number: "06",
    title: "Delivery",
    subtitle: "",
    icon: Truck,
    image: deliveryImage,
    color: "#6366F1", // Indigo
    description: "...",
  },
];
  // =========================================================
  // BOTTOM QUALITY FEATURES
  // =========================================================

  const qualityFeatures = [
  {
    icon: Award,
    title: "Premium",
    subtitle: "Quality",
    text: "Guaranteed",
    color: "#F59E0B",
  },
  {
    icon: ShieldCheck,
    title: "International",
    subtitle: "Standards",
    text: "Compliant",
    color: "#10B981",
  },
  {
    icon: Cog,
    title: "Advanced",
    subtitle: "Manufacturing",
    text: "Technology",
    color: "#3B82F6",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    subtitle: "& Sustainable",
    text: "Solutions",
    color: "#22C55E",
  },
  {
    icon: Users,
    title: "Customer",
    subtitle: "Satisfaction",
    text: "Our Priority",
    color: "#EC4899",
  },
];

  // =========================================================
  // MAIN COMPONENT
  // =========================================================

  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-20 md:py-24">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left glow */}
        <div className="absolute -left-32 top-20 h-[450px] w-[450px] rounded-full bg-sky-100/50 blur-[110px]" />

        {/* Right glow */}
        <div className="absolute -right-32 top-[350px] h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[120px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 h-[350px] w-[800px] -translate-x-1/2 rounded-full bg-sky-100/30 blur-[120px]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mx-auto max-w-5xl text-center">
          {/* TOP BADGE */}

          <div className="mb-5 inline-flex items-center rounded-full border-2 border-sky-400 bg-white px-6 py-2 shadow-[0_5px_20px_rgba(14,165,233,0.08)]">
            <span className="text-sm font-bold tracking-wide text-sky-500 md:text-base">
              OUR MANUFACTURING PROCESS
            </span>
          </div>

          {/* MAIN TITLE */}

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#102944] sm:text-5xl md:text-6xl">
            Manufacturing Excellence
          </h2>

          {/* SUB TITLE */}

          <h3 className="mt-3 text-2xl font-bold leading-tight text-[#102944] sm:text-3xl">
            Built on <span className="text-sky-500">Innovation</span>. Driven by{" "}
            <span className="text-sky-500">Quality</span>.
          </h3>

          {/* DIVIDER */}

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-14 bg-sky-300" />

            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(14,165,233,0.6)]" />

            <span className="h-[2px] w-14 bg-sky-300" />
          </div>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            At KMR Conchem, every product goes through a carefully controlled
            manufacturing process to deliver superior performance, reliability
            and long-term value.
          </p>
        </div>

        {/* ===================================================
            HERO FACTORY IMAGE WRAPPER
        ==================================================== */}

        <div className="relative mx-auto mt-10 max-w-[1200px]">
          {/* =================================================
              LEFT FLOATING CARD
          ================================================== */}

          <div className="absolute -left-20 top-12 z-30 hidden w-[155px] rounded-[25px] border border-white/80 bg-white/95 p-5 text-center shadow-[0_15px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl xl:block">
            {/* Icon */}

            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50">
              <ShieldCheck
                size={48}
                strokeWidth={1.5}
                className="text-sky-500"
              />
            </div>

            {/* Text */}

            <p className="text-sm font-bold leading-5 text-[#102944]">
              Premium Quality
              <br />
              At Every Step
            </p>
          </div>

          {/* =================================================
              RIGHT FLOATING CARD
          ================================================== */}

          <div className="absolute -right-20 top-12 z-30 hidden w-[155px] rounded-[25px] border border-white/80 bg-white/95 p-5 text-center shadow-[0_15px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl xl:block">
            {/* Icon */}

            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50">
              <FlaskConical
                size={48}
                strokeWidth={1.5}
                className="text-sky-500"
              />
            </div>

            {/* Text */}

            <p className="text-sm font-bold leading-5 text-[#102944]">
              Advanced Technology
              <br />
              Trusted Results
            </p>
          </div>

          {/* =================================================
              MAIN FACTORY IMAGE
          ================================================== */}

          <div className="relative h-[260px] overflow-hidden rounded-[30px] sm:h-[320px] md:h-[380px] lg:h-[410px]">
            <img
              src={main}
              alt="KMR Conchem Manufacturing Facility"
              className="h-full w-full object-cover"
            />

            {/* Top fade */}

            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#f8fbff] via-white/20 to-transparent" />

            {/* Bottom fade */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8fbff] via-white/10 to-transparent" />

            {/* Left fade */}

            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f8fbff] via-[#f8fbff]/50 to-transparent" />

            {/* Right fade */}

            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f8fbff] via-[#f8fbff]/50 to-transparent" />
          </div>
        </div>

        {/* ===================================================
            MANUFACTURING PROCESS STEPS
        ==================================================== */}

        <div className="relative mt-12">
          {/* =================================================
              CONNECTING DOTTED LINE
          ================================================== */}

          <div className="pointer-events-none absolute left-[7%] right-[7%] top-[95px] hidden border-t-2 border-dashed border-sky-200 xl:block" />

          {/* =================================================
              PROCESS GRID
          ================================================== */}

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative flex min-w-0 flex-col items-center"
                >
                  {/* =========================================
                      STEP NUMBER
                  ========================================== */}

                  <div className="relative z-30 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg"
style={{
  background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)`,
}}>
                    {step.number}
                  </div>

                  {/* =========================================
                      ROUND ICON
                  ========================================== */}

                  <div
  className="relative z-30 mt-3 flex h-[108px] w-[108px] shrink-0 items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:-translate-y-2"
  style={{
    border: `2px solid ${step.color}30`,
    boxShadow: `0 10px 30px ${step.color}22`,
  }}
>
                    {/* Inner Circle */}

                    <div
  className="absolute inset-[9px] rounded-full"
  style={{
    border: `1px solid ${step.color}25`,
  }}
/>

                    {/* Icon */}

                    <Icon
  size={53}
  strokeWidth={1.45}
  className="relative transition-transform duration-500 group-hover:scale-110"
  style={{
    color: step.color,
  }}
/>
                  </div>

                  {/* =========================================
                      BLUE ARROW
                  ========================================== */}

                  {index < processSteps.length - 1 && (
                    <div className="absolute right-[-17px] top-[86px] z-40 hidden h-8 w-8 items-center justify-center rounded-full text-white shadow-lg xl:flex"
style={{
  background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)`,
}}>
                      <ChevronRight size={17} strokeWidth={2.5} />
                    </div>
                  )}

                  {/* =========================================
                      PROCESS CARD
                  ========================================== */}

                  <div className="relative mt-[-2px] flex w-full flex-1 flex-col overflow-hidden rounded-[22px] border border-slate-100 bg-white px-2 pb-5 pt-5 shadow-[0_8px_28px_rgba(15,23,42,0.07)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_rgba(15,23,42,0.11)]">
                    {/* =====================================
                        CARD TITLE
                    ====================================== */}

                    <div className="flex min-h-[58px] items-center justify-center px-1 text-center">
                      <h4 className="text-[16px] font-extrabold leading-6 text-[#102944] md:text-[17px]">
                        {step.title}

                        {step.subtitle && (
                          <>
                            <br />
                            {step.subtitle}
                          </>
                        )}
                      </h4>
                    </div>

                    {/* =====================================
                        CARD IMAGE
                    ====================================== */}

                    <div className="relative mt-2 overflow-hidden rounded-[13px]">
                      <img
                        src={step.image}
                        alt={`${step.title} ${step.subtitle}`}
                        className="h-[145px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Image Overlay */}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-white/10" />
                    </div>

                    {/* =====================================
                        DESCRIPTION
                    ====================================== */}

                    <p className="mt-4 px-2 text-center text-[13px] leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            PREMIUM QUALITY FEATURES STRIP
        ==================================================== */}

        <div className="relative mt-10">
          {/* Background Glow */}

          <div className="pointer-events-none absolute -inset-4 rounded-[35px] bg-sky-100/30 blur-2xl" />

          {/* =================================================
              WHITE FEATURE CONTAINER
          ================================================== */}

          <div className="relative overflow-hidden rounded-[28px] border border-white bg-white px-5 py-7 shadow-[0_12px_40px_rgba(15,23,42,0.07)] md:px-8 lg:px-10 lg:py-8">
            {/* Top Highlight */}

            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />

            {/* =================================================
                FEATURE GRID
            ================================================== */}

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
              {qualityFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className={`
                      group relative flex items-center justify-center
                      gap-4 px-5 py-5
                      transition-all duration-300
                      lg:py-2
                      ${
                        index !== 0
                          ? "border-t border-sky-100 md:border-t-0 md:border-l"
                          : ""
                      }
                    `}
                  >
                    {/* =========================================
                        ICON
                    ========================================== */}

                    <div className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center">
                      {/* Glow */}

                      <div
  className="absolute inset-1 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
  style={{
    background: `${feature.color}25`,
  }}
/>
                      {/* Icon */}

                      <Icon
  size={49}
  strokeWidth={1.5}
  className="relative transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105"
  style={{
    color: feature.color,
  }}
/>
                    </div>

                    {/* =========================================
                        FEATURE TEXT
                    ========================================== */}

                    <div className="min-w-0 text-left">
                      <p className="text-sm font-bold leading-6 text-[#102944]">
                        {feature.title}

                        <br />

                        {feature.subtitle}

                        <br />

                        {feature.text}
                      </p>
                    </div>

                    {/* =========================================
                        MOBILE HOVER LINE
                    ========================================== */}

                    <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-sky-400 transition-all duration-300 group-hover:w-16 lg:hidden" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===================================================
            SECTION BOTTOM SPACING
        ==================================================== */}

        <div className="h-2" />
      </div>
    </section>
  );
};

export default ManufacturingProcess;
