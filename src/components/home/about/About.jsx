import React from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Factory,
  ShieldCheck,
  Beaker,
  Building2,
  FlaskConical,
  Users,
  Globe2,
  ChevronLeft,
  ChevronRight,
  Crown,
  Handshake,
  BriefcaseBusiness,
  UserCog,
  BadgeCheck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

// ============================================================
// SWIPER
// ============================================================

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ============================================================
// FACTORY VIDEO
// ============================================================

import factoryVideo from "../../../assets/hero/factory.mp4";

// ============================================================
// LEADERSHIP IMAGES
// ============================================================

import founderImage from "../../../assets/about/founder.webp";
import cofounderImage from "../../../assets/about/founder.webp";
import directorImage from "../../../assets/about/director.webp";
import director2Image from "../../../assets/about/founder.webp";
import advisorImage from "../../../assets/about/founder.webp";

// ============================================================
// ABOUT COMPONENT
// ============================================================

export default function About() {
  const navigate = useNavigate();

  // ==========================================================
  // LEADERSHIP
  // ==========================================================

  const leadership = [
    {
      name: "Founder Name",
      role: "Founder",
      image: founderImage,
      icon: Crown,

      // Founder icon color
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50",
      iconHover: "group-hover:bg-amber-500",

      description:
        "Visionary leadership focused on building a strong foundation, delivering quality products and creating long-term value for customers.",
    },

    {
      name: "Co-Founder Name",
      role: "Co-Founder",
      image: cofounderImage,
      icon: Handshake,

      // Co-Founder icon color
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-50",
      iconHover: "group-hover:bg-emerald-500",

      description:
        "Driving innovation, operational excellence and strategic growth with a strong focus on customer satisfaction.",
    },

    {
      name: "Director Name",
      role: "Director",
      image: directorImage,
      icon: BriefcaseBusiness,

      // Director icon color
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
      iconHover: "group-hover:bg-blue-500",

      description:
        "Overseeing strategic planning, quality standards and long-term partnerships supporting the company's growth.",
    },

    {
      name: "Director Name",
      role: "Director",
      image: director2Image,
      icon: UserCog,

      // Second Director icon color
      iconColor: "text-violet-500",
      iconBg: "bg-violet-50",
      iconHover: "group-hover:bg-violet-500",

      description:
        "Supporting business development and strengthening operational capabilities through a focused and responsible approach.",
    },

    {
      name: "Advisor Name",
      role: "Advisor",
      image: advisorImage,
      icon: BadgeCheck,

      // Advisor icon color
      iconColor: "text-rose-500",
      iconBg: "bg-rose-50",
      iconHover: "group-hover:bg-rose-500",

      description:
        "Providing valuable industry guidance and strategic insights to help the organization move forward with confidence.",
    },
  ];

  // ==========================================================
  // MAIN
  // ==========================================================

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8fbff] py-20 md:py-24 lg:py-28"
    >
      {/* ======================================================
          BACKGROUND DECORATION
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* LEFT GLOW */}

        <div className="absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-sky-100/70 blur-[120px]" />

        {/* RIGHT GLOW */}

        <div className="absolute -right-40 top-[420px] h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[140px]" />

        {/* BOTTOM GLOW */}

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-sky-100/40 blur-[130px]" />

        {/* LEFT DOTS */}

        <div
          className="absolute left-5 top-20 h-32 w-32 opacity-50 md:left-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,165,233,0.35) 2px, transparent 2px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* RIGHT DOTS */}

        <div
          className="absolute right-5 bottom-28 h-32 w-32 opacity-40 md:right-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,165,233,0.30) 2px, transparent 2px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* LARGE CIRCLES */}

        <div className="absolute left-1/2 top-[260px] h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-sky-100/60" />

        <div className="absolute left-1/2 top-[310px] h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-sky-100/40" />
      </div>

      {/* ======================================================
          MAIN CONTAINER
      ======================================================= */}

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">

        {/* ====================================================
            TOP ABOUT HEADER
        ===================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-5xl text-center"
        >

          {/* BADGE */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-sky-400 bg-white px-5 py-2 shadow-[0_6px_25px_rgba(14,165,233,0.08)] md:px-6">

            <Building2
              size={17}
              strokeWidth={2}
              className="text-sky-500"
            />

            <span className="text-xs font-bold tracking-[2px] text-sky-500 sm:text-sm">
              ABOUT KMR CONCHEM
            </span>
          </div>

          {/* HEADING */}

          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-[#102944] sm:text-4xl md:text-5xl lg:text-[54px]">
            Building Better

            <span className="block bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 bg-clip-text text-transparent">
              With Chemistry & Innovation
            </span>
          </h2>

          {/* DIVIDER */}

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">

            <span className="h-[2px] w-12 bg-sky-300 sm:w-14" />

            <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.55)]" />

            <span className="h-[2px] w-12 bg-sky-300 sm:w-14" />

          </div>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8">
            KMR Conchem is a trusted manufacturer of high-performance
            construction chemicals delivering strength, durability and
            long-lasting protection for every structure.
          </p>
        </motion.div>

        {/* ====================================================
            VIDEO + CONTENT
        ===================================================== */}

        <div className="mt-12 md:mt-16">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

            {/* =================================================
                FACTORY VIDEO
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative min-w-0"
            >

              {/* VIDEO */}

              <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">

                <div className="relative overflow-hidden rounded-[22px]">

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="block h-[360px] w-full object-cover sm:h-[420px] lg:h-[450px] xl:h-[470px]"
                  >
                    <source src={factoryVideo} type="video/mp4" />

                    Your browser does not support the video tag.
                  </video>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102944]/35 via-transparent to-transparent" />

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-400/10 to-transparent" />

                </div>
              </div>

              {/* QUALITY */}

              <div className="absolute -left-4 top-10 z-20 hidden w-[155px] rounded-[22px] border border-white/80 bg-white/95 p-5 text-center shadow-[0_15px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl xl:block">

                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">

                  <ShieldCheck
                    size={32}
                    strokeWidth={1.6}
                    className="text-sky-500"
                  />

                </div>

                <p className="text-sm font-extrabold leading-5 text-[#102944]">
                  Trusted
                  <br />
                  Quality
                </p>

              </div>

              {/* EXPERIENCE */}

              <div className="absolute -right-4 bottom-10 z-20 hidden w-[165px] rounded-[22px] border border-white/80 bg-white/95 p-5 text-center shadow-[0_15px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl xl:block">

                <div className="text-3xl font-black text-sky-500">
                  5+
                </div>

                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#102944]">
                  Years Experience
                </p>

              </div>

              {/* VIDEO BADGE */}

              <div className="absolute bottom-5 left-5 z-20 inline-flex max-w-[calc(100%-40px)] items-center gap-2 rounded-full border border-white/20 bg-[#102944]/85 px-5 py-3 text-white shadow-xl backdrop-blur-xl">

                <Factory
                  size={18}
                  className="shrink-0 text-sky-300"
                />

                <span className="text-sm font-bold">
                  Advanced Manufacturing
                </span>

              </div>
            </motion.div>

            {/* =================================================
                ABOUT CONTENT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative min-w-0"
            >

              {/* BADGE */}

              <div className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-sky-200 bg-white px-5 py-2.5 shadow-[0_8px_25px_rgba(14,165,233,0.08)]">

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-50">

                  <Beaker
                    size={16}
                    strokeWidth={2}
                    className="text-sky-500"
                  />

                </div>

                <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                  Trusted Construction Chemical Manufacturer
                </span>

              </div>

              {/* HEADING */}

              <h3 className="max-w-xl text-3xl font-extrabold leading-[1.1] tracking-tight text-[#102944] sm:text-4xl lg:text-5xl">

                Delivering Innovative

                <span className="block text-sky-500">
                  Solutions For Modern
                </span>

                Infrastructure
              </h3>

              {/* DIVIDER */}

              <div className="mt-6 flex items-center gap-2">

                <span className="h-[2px] w-16 bg-sky-300" />

                <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.5)]" />

                <span className="h-[2px] w-8 bg-sky-200" />

              </div>

              {/* DESCRIPTION */}

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-slate-600 md:text-lg">
                KMR Conchem Pvt. Ltd. is committed to manufacturing premium
                construction chemical products that improve the strength,
                durability and performance of buildings, bridges, industrial
                facilities and infrastructure projects.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-lg">
                Our advanced manufacturing process, strict quality control and
                customer-focused approach enable us to provide reliable
                waterproofing, repair, flooring and protection systems that
                perform even in the most demanding environments.
              </p>

              {/* BUTTONS */}

              <div className="mt-9 flex flex-wrap gap-4">

                <button
                  onClick={() => navigate("/products")}
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(14,165,233,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(14,165,233,0.35)]"
                >
                  Explore Products

                  <ArrowRight
                    size={19}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </button>

                <button
                  className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#102944] shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="text-slate-400"
                  />
                </button>

              </div>
            </motion.div>
          </div>
        </div>

        {/* ====================================================
            LEADERSHIP SECTION
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-24 md:mt-28"
        >

          {/* SOFT BACKGROUND */}

          <div className="absolute -inset-x-5 -inset-y-8 -z-10 rounded-[40px] bg-gradient-to-b from-sky-50/70 via-white/40 to-transparent blur-[2px]" />

          {/* HEADER */}

          <div className="mx-auto mb-10 max-w-3xl text-center">

            <div className="mb-4 inline-flex items-center gap-3">

              <span className="h-[2px] w-10 bg-sky-300" />

              <span className="rounded-full border border-sky-200 bg-white px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[2px] text-sky-500 shadow-sm sm:text-xs">
                Our Leadership
              </span>

              <span className="h-[2px] w-10 bg-sky-300" />

            </div>

            <h3 className="text-3xl font-extrabold tracking-tight text-[#102944] sm:text-4xl md:text-5xl">

              The People Behind

              <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Our Vision
              </span>

            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-base">
              Meet the leadership team driving innovation, quality, customer
              trust and sustainable growth at KMR Conchem.
            </p>

          </div>

          {/* ==================================================
              SLIDER
          ================================================== */}

          <div className="relative px-0 sm:px-7 lg:px-10">

            {/* LEFT BUTTON */}

            <button
              className="leadership-prev absolute left-0 top-1/2 z-40 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-600 shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-all duration-300 hover:bg-sky-500 hover:text-white lg:flex"
              aria-label="Previous leader"
            >
              <ChevronLeft size={19} />
            </button>

            {/* RIGHT BUTTON */}

            <button
              className="leadership-next absolute right-0 top-1/2 z-40 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-600 shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-all duration-300 hover:bg-sky-500 hover:text-white lg:flex"
              aria-label="Next leader"
            >
              <ChevronRight size={19} />
            </button>

            {/* SWIPER */}

            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={16}
              speed={750}
              loop={leadership.length > 3}
              grabCursor={true}
              autoplay={{
                delay: 4200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: ".leadership-prev",
                nextEl: ".leadership-next",
              }}
              pagination={{
                clickable: true,
                el: ".leadership-pagination",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 18,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 18,
                },

                1280: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="!pb-10"
            >

              {leadership.map((leader, index) => {

                const LeaderIcon = leader.icon;

                return (
                  <SwiperSlide
                    key={`${leader.role}-${index}`}
                    className="!h-auto"
                  >

                    {/* =================================================
                        PREMIUM LEADERSHIP CARD
                    ================================================== */}

                    <div className="group relative h-full overflow-hidden rounded-[24px] border border-sky-100/90 bg-white p-2 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-[0_22px_55px_rgba(14,165,233,0.14)]">

                      {/* CARD GLOW */}

                      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-sky-100/60 blur-3xl transition-all duration-500 group-hover:bg-sky-200/70" />

                      {/* INNER */}

                      <div className="relative flex min-h-[205px] overflow-hidden rounded-[18px] bg-gradient-to-br from-[#f8fbff] to-white">

                        {/* IMAGE */}

                        <div className="relative h-[205px] w-[42%] shrink-0 overflow-hidden bg-gradient-to-b from-sky-50 to-slate-50">

                          <img
                            src={leader.image}
                            alt={leader.name}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.045]"
                          />

                          {/* IMAGE OVERLAY */}

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/25" />

                          {/* PHOTO LIGHT */}

                          <div className="pointer-events-none absolute left-3 top-3 h-12 w-12 rounded-full bg-white/30 blur-xl" />

                        </div>

                        {/* CONTENT */}

                        <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-4 sm:px-5">

                          {/* ROLE */}

                          <div className="mb-1.5 flex items-center gap-1.5">

                            {/* COLORED ICON */}

                            <div
                              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${leader.iconBg} transition-all duration-300 ${leader.iconHover} group-hover:scale-105`}
                            >
                              <LeaderIcon
                                size={12}
                                strokeWidth={2.5}
                                className={`${leader.iconColor} transition-colors duration-300 group-hover:text-white`}
                              />
                            </div>

                            {/* ROLE TEXT */}

                            <span
                              className={`text-[9px] font-extrabold uppercase tracking-[1.6px] ${leader.iconColor} sm:text-[10px]`}
                            >
                              {leader.role}
                            </span>

                          </div>

                          {/* NAME */}

                          <h4 className="truncate text-base font-extrabold leading-tight tracking-tight text-[#102944] sm:text-lg">
                            {leader.name}
                          </h4>

                          {/* DIVIDER */}

                          <div className="mt-2 flex items-center gap-1.5">

                            <span className="h-[2px] w-7 bg-sky-400 transition-all duration-500 group-hover:w-12" />

                            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />

                          </div>

                          {/* DESCRIPTION */}

                          <p className="mt-2.5 line-clamp-4 text-[11px] leading-[1.55rem] text-slate-600 sm:text-xs">
                            {leader.description}
                          </p>

                        </div>

                        {/* BOTTOM LINE */}

                        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-sky-400 via-blue-600 to-sky-400 opacity-70 transition-all duration-500 group-hover:opacity-100" />

                      </div>
                    </div>

                  </SwiperSlide>
                );
              })}

            </Swiper>

            {/* PAGINATION */}

            <div className="leadership-pagination flex min-h-[18px] items-center justify-center gap-2" />
          </div>
        </motion.div>

        {/* ====================================================
            PREMIUM ANIMATED DIVIDER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="mx-auto mt-14 flex max-w-md items-center justify-center gap-3 md:mt-16"
        >

          {/* LEFT LINE */}

          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-sky-300 to-sky-400"
          />

          {/* CENTER DOT */}

          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="relative flex h-3 w-3 shrink-0 items-center justify-center"
          >

            {/* GLOW */}

            <span className="absolute h-6 w-6 animate-ping rounded-full bg-sky-400/20" />

            {/* DOT */}

            <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-[0_0_15px_rgba(14,165,233,0.55)]" />

          </motion.div>

          {/* RIGHT LINE */}

          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-sky-300 to-sky-400"
          />

        </motion.div>

      </div>

      {/* ======================================================
          CUSTOM SWIPER DOT STYLE
      ======================================================= */}

      <style>{`
        .leadership-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: #bae6fd;
          opacity: 1;
          border-radius: 999px;
          transition: all 0.3s ease;
        }

        .leadership-pagination .swiper-pagination-bullet-active {
          width: 22px;
          background: #0ea5e9;
        }

        @media (max-width: 767px) {
          .leadership-pagination .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
          }

          .leadership-pagination .swiper-pagination-bullet-active {
            width: 18px;
          }
        }
      `}</style>

    </section>
  );
}