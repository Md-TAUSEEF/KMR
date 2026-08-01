import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  FlaskConical,
  Package,
  Truck,
  Warehouse,
  ZoomIn,
} from "lucide-react";
import { Link } from "react-router-dom";

// ============================================================
// GALLERY IMAGES
// ============================================================

import factoryImage from "../../assets/hero/hero4.webp";
import productionImage from "../../assets/manufac/factory.webp";
import qualityImage from "../../assets/manufac/quality-testing.webp";
import warehouseImage from "../../assets/hero/hero4.webp";
import packagingImage from "../../assets/manufac/packaging.webp";
import deliveryImage from "../../assets/manufac/delivery.webp";

// ============================================================
// GALLERY DATA
// ============================================================

const galleryItems = [
  {
    id: 1,
    title: "KMR Conchem",
    subtitle: "Manufacturing Unit",
    category: "Manufacturing",
    image: factoryImage,
    icon: Building2,
    featured: true,
  },
  {
    id: 2,
    title: "Advanced Production",
    subtitle: "High performance manufacturing",
    category: "Manufacturing",
    image: productionImage,
    icon: Warehouse,
  },
  {
    id: 3,
    title: "Quality Testing",
    subtitle: "Rigorous quality control",
    category: "Quality Control",
    image: qualityImage,
    icon: FlaskConical,
  },
  {
    id: 4,
    title: "Raw Material Storage",
    subtitle: "Premium quality raw materials",
    category: "Infrastructure",
    image: warehouseImage,
    icon: Warehouse,
  },
  {
    id: 5,
    title: "Safe Packaging",
    subtitle: "Reliable product packaging",
    category: "Packaging",
    image: packagingImage,
    icon: Package,
  },
  {
    id: 6,
    title: "On Time Delivery",
    subtitle: "Nationwide supply network",
    category: "Logistics",
    image: deliveryImage,
    icon: Truck,
  },
];

// ============================================================
// ANIMATION
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================================
// GALLERY COMPONENT
// ============================================================

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* ======================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top blue glow */}
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-100/70 blur-3xl" />

        {/* Right glow */}
        <div className="absolute -right-40 top-[30%] h-[450px] w-[450px] rounded-full bg-sky-100/70 blur-3xl" />

        {/* Bottom glow */}
        <div className="absolute -bottom-40 left-[30%] h-[400px] w-[500px] rounded-full bg-blue-50 blur-3xl" />

        {/* Dot pattern */}
        <div
          className="absolute right-[8%] top-20 h-28 w-28 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(#2563eb 1.2px, transparent 1.2px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Bottom curved decoration */}
        <div className="absolute -bottom-24 left-1/2 h-48 w-[75%] -translate-x-1/2 rounded-[50%] border border-blue-100" />
      </div>

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        {/* ====================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* Left */}
          <div className="max-w-3xl">
            {/* Small label */}
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-[2px] w-9 bg-blue-600" />

              <span className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
                Gallery
              </span>

              <span className="h-[2px] w-9 bg-blue-600" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Inside{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                KMR Conchem
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              A glimpse into our world of advanced manufacturing, quality
              control, innovative solutions and reliable construction chemical
              production.
            </p>

            {/* Blue line */}
            <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
          </div>

          {/* Right description */}
          <div className="hidden max-w-sm lg:block">
            <p className="text-right text-sm leading-6 text-slate-500">
              Explore the people, technology and infrastructure behind
              <span className="font-semibold text-slate-800">
                {" "}
                KMR Conchem.
              </span>
            </p>
          </div>
        </motion.div>

        {/* ====================================================
            GALLERY GRID
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12"
        >
          {/* ==================================================
              FEATURED IMAGE
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="group relative min-h-[420px] overflow-hidden rounded-[28px] border border-blue-100 bg-slate-100 shadow-[0_20px_60px_rgba(37,99,235,0.10)] md:min-h-[520px] lg:col-span-7"
          >
            <img
              src={galleryItems[0].image}
              alt={galleryItems[0].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />

            {/* Hover blue glow */}
            <div className="absolute inset-0 bg-blue-600/0 transition-colors duration-500 group-hover:bg-blue-600/10" />

            {/* Zoom */}
            <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
              <ZoomIn size={19} />
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                  <Building2 size={21} />
                </div>

                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  Manufacturing
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                {galleryItems[0].title}
              </h3>

              <p className="mt-1 text-sm text-white/75 sm:text-base">
                {galleryItems[0].subtitle}
              </p>

              <button className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-blue-700">
                View Image
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* ==================================================
              RIGHT TOP — PRODUCTION
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="group relative min-h-[250px] overflow-hidden rounded-[28px] border border-blue-100 bg-slate-100 shadow-[0_15px_40px_rgba(37,99,235,0.08)] lg:col-span-5"
          >
            <img
              src={galleryItems[1].image}
              alt={galleryItems[1].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent" />

            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-blue-600 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
              <ZoomIn size={17} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                <Warehouse size={19} />
              </div>

              <h3 className="text-xl font-bold text-white">
                {galleryItems[1].title}
              </h3>

              <p className="mt-1 text-sm text-white/75">
                {galleryItems[1].subtitle}
              </p>
            </div>
          </motion.div>

          {/* ==================================================
              RIGHT BOTTOM — QUALITY
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="group relative min-h-[250px] overflow-hidden rounded-[28px] border border-blue-100 bg-slate-100 shadow-[0_15px_40px_rgba(37,99,235,0.08)] lg:col-span-5"
          >
            <img
              src={galleryItems[2].image}
              alt={galleryItems[2].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent" />

            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-blue-600 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
              <ZoomIn size={17} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                <FlaskConical size={19} />
              </div>

              <h3 className="text-xl font-bold text-white">
                {galleryItems[2].title}
              </h3>

              <p className="mt-1 text-sm text-white/75">
                {galleryItems[2].subtitle}
              </p>
            </div>
          </motion.div>

          {/* ==================================================
              BOTTOM CARD 1
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="group relative min-h-[270px] overflow-hidden rounded-[26px] border border-blue-100 bg-slate-100 shadow-[0_15px_40px_rgba(37,99,235,0.08)] lg:col-span-4"
          >
            <img
              src={galleryItems[3].image}
              alt={galleryItems[3].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent" />

            <div className="absolute bottom-0 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                <Warehouse size={18} />
              </div>

              <h3 className="text-lg font-bold text-white">
                {galleryItems[3].title}
              </h3>

              <p className="mt-1 text-sm text-white/75">
                {galleryItems[3].subtitle}
              </p>
            </div>
          </motion.div>

          {/* ==================================================
              BOTTOM CARD 2
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="group relative min-h-[270px] overflow-hidden rounded-[26px] border border-blue-100 bg-slate-100 shadow-[0_15px_40px_rgba(37,99,235,0.08)] lg:col-span-4"
          >
            <img
              src={galleryItems[4].image}
              alt={galleryItems[4].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent" />

            <div className="absolute bottom-0 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                <Package size={18} />
              </div>

              <h3 className="text-lg font-bold text-white">
                {galleryItems[4].title}
              </h3>

              <p className="mt-1 text-sm text-white/75">
                {galleryItems[4].subtitle}
              </p>
            </div>
          </motion.div>

          {/* ==================================================
              BOTTOM CARD 3
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="group relative min-h-[270px] overflow-hidden rounded-[26px] border border-blue-100 bg-slate-100 shadow-[0_15px_40px_rgba(37,99,235,0.08)] lg:col-span-4"
          >
            <img
              src={galleryItems[5].image}
              alt={galleryItems[5].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent" />

            <div className="absolute bottom-0 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                <Truck size={18} />
              </div>

              <h3 className="text-lg font-bold text-white">
                {galleryItems[5].title}
              </h3>

              <p className="mt-1 text-sm text-white/75">
                {galleryItems[5].subtitle}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ====================================================
            VIEW FULL GALLERY BUTTON
        ==================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/30"
          >
            <span>View Full Gallery</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={17} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
