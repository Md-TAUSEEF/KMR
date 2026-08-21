import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Crown,
  Factory,
  Handshake,
  Mail,
  Phone,
  ShieldCheck,
  Target,
  Users,
  X,
  ArrowRight,
  Sparkles,
  UserRound,
  Globe2,
} from "lucide-react";

import { Link } from "react-router-dom";

// ============================================================
// TEAM DATA
// ============================================================

const teamMembers = [
  {
    id: 1,

    name: "Founder Name",

    role: "Founder",

    shortRole: "Founder & Visionary Leader",

    image: "/team/founder.webp",

    icon: Crown,

    iconBg: "bg-amber-50",

    iconColor: "text-amber-500",

    badge: "Leadership",

    description:
      "Providing the vision and direction behind KMR Conchem, with a strong focus on building a trusted construction chemical manufacturing company driven by quality, innovation and long-term customer value.",

    fullDescription:
      "As the Founder of KMR Conchem Pvt. Ltd., the focus is on establishing a strong foundation for the company and creating a culture built around quality, reliability and customer satisfaction. The leadership approach is centered on continuously improving products, strengthening operations and creating long-term value for customers and business partners.",

    responsibilities: [
      "Defining the company's overall vision and direction",
      "Driving long-term business growth and development",
      "Maintaining strong focus on product quality",
      "Building trusted customer and business relationships",
      "Encouraging innovation across the organization",
    ],
  },

  {
    id: 2,

    name: "Director Name",

    role: "Director",

    shortRole: "Director",

    image: "/team/director 2.jpeg",

    icon: Handshake,

    iconBg: "bg-emerald-50",

    iconColor: "text-emerald-500",

    badge: "Management",

    description:
      "Supporting the company's growth through strong coordination, operational involvement and a customer-focused approach while working closely with the leadership team.",

    fullDescription:
      "As a Director at KMR Conchem Pvt. Ltd., the role focuses on supporting the company's overall growth and strengthening the connection between business operations, customers and the company's long-term vision. With a practical and collaborative approach, the focus remains on reliable execution and sustainable development.",

    responsibilities: [
      "Supporting strategic business decisions",
      "Coordinating business and operational activities",
      "Strengthening customer relationships",
      "Supporting product and service development",
      "Contributing to sustainable company growth",
    ],
  },

  {
    id: 3,

    name: "Director Name",

    role: "Director",

    shortRole: "Director",

    image: "/team/director1.jpeg",

    icon: BriefcaseBusiness,

    iconBg: "bg-blue-50",

    iconColor: "text-blue-500",

    badge: "Operations",

    description:
      "Contributing to operational excellence, business development and responsible growth while maintaining the company's commitment to dependable products and services.",

    fullDescription:
      "As a Director at KMR Conchem Pvt. Ltd., the focus is on supporting efficient business operations and helping the company consistently deliver dependable construction chemical solutions. The role involves contributing to business development, operational coordination and maintaining the company's customer-first philosophy.",

    responsibilities: [
      "Supporting efficient business operations",
      "Contributing to business development initiatives",
      "Maintaining focus on service reliability",
      "Supporting quality-oriented processes",
      "Helping strengthen the company's market presence",
    ],
  },
];

// ============================================================
// VALUES
// ============================================================

const companyValues = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "Maintaining a strong commitment to dependable and quality-driven construction chemical solutions.",
  },

  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Understanding customer requirements and building lasting relationships through reliable service.",
  },

  {
    icon: Target,
    title: "Purpose Driven",
    description:
      "Working with clear goals to continuously improve products, processes and business performance.",
  },

  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "Encouraging better ideas, improved processes and practical solutions for modern construction needs.",
  },
];

// ============================================================
// OUR TEAM PAGE
// ============================================================

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* ========================================================
          GLOBAL BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-64 top-[500px] h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-[150px]" />

        <div className="absolute -right-64 top-[1000px] h-[550px] w-[550px] rounded-full bg-cyan-100/40 blur-[160px]" />

        <div className="absolute left-1/2 top-[1800px] h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[160px]" />
      </div>

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative overflow-hidden bg-[#061A35]">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          {/* Glow */}

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

          {/* Decorative Circle */}

          <div className="absolute -right-32 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full border border-sky-400/10" />

          <div className="absolute -right-20 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-sky-400/10" />
        </div>

        {/* Hero Content */}

        <div className="relative mx-auto max-w-[1500px] px-5 pb-24 pt-28 sm:px-7 sm:pb-28 sm:pt-32 lg:px-10 lg:pb-32 lg:pt-36">
          {/* Breadcrumb */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400"
          >
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <span>/</span>

            <span className="text-white">Our Team</span>
          </motion.div>

          {/* Hero Grid */}

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            {/* ==================================================
                LEFT
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
                <Users size={17} className="text-cyan-300" />

                <span className="text-xs font-extrabold uppercase tracking-[2px] text-cyan-300">
                  Our Team
                </span>
              </div>

              {/* Heading */}

              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[68px]">
                The People Behind
                <span className="block">
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                    KMR Conchem
                  </span>
                </span>
              </h1>

              {/* Description */}

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                KMR Conchem Pvt. Ltd. is backed by a skilled and dedicated
                leadership team committed to quality, innovation, reliable
                services and long-term customer value.
              </p>

              {/* Trust Points */}

              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                    <ShieldCheck size={18} className="text-cyan-300" />
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    Quality Driven
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                    <Handshake size={18} className="text-cyan-300" />
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    Customer Focused
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                    <Sparkles size={18} className="text-cyan-300" />
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    Innovation
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ==================================================
                RIGHT HERO VISUAL
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

              <div className="absolute left-1/2 top-1/2 h-[310px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/15 blur-[90px]" />

              {/* Main Circle */}

              <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-sky-400/20 bg-white/[0.04] shadow-[0_30px_100px_rgba(14,165,233,0.12)] backdrop-blur-sm sm:h-[330px] sm:w-[330px]">
                {/* Inner Circle */}

                <div className="flex h-[220px] w-[220px] items-center justify-center rounded-full border border-cyan-300/10 bg-gradient-to-br from-sky-400/10 to-blue-500/5 sm:h-[260px] sm:w-[260px]">
                  <Users
                    size={100}
                    strokeWidth={1}
                    className="text-cyan-300/80"
                  />
                </div>

                {/* Orbit */}

                <div className="absolute inset-5 rounded-full border border-dashed border-sky-300/15" />

                {/* Small Cards */}

                <div className="absolute -left-5 top-14 flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2.5 shadow-xl backdrop-blur-md">
                  <Crown size={16} className="text-amber-300" />

                  <span className="text-[11px] font-bold text-white">
                    Founder
                  </span>
                </div>

                <div className="absolute -right-6 top-28 flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2.5 shadow-xl backdrop-blur-md">
                  <BriefcaseBusiness size={16} className="text-sky-300" />

                  <span className="text-[11px] font-bold text-white">
                    Directors
                  </span>
                </div>

                <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 shadow-xl backdrop-blur-md">
                  <Factory size={16} className="text-cyan-300" />

                  <span className="text-[11px] font-bold text-white">
                    Manufacturing
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          TEAM INTRO / STATS
      ======================================================== */}

      <section className="relative z-30 -mt-12 px-5 sm:px-7 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Founder */}

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
              duration: 0.5,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                <Crown size={27} />
              </div>

              <div>
                <div className="text-3xl font-black text-[#123B79]">01</div>

                <div className="text-sm font-extrabold text-[#102944]">
                  Founder
                </div>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Vision & leadership
                </p>
              </div>
            </div>
          </motion.div>

          {/* Directors */}

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
              duration: 0.5,
              delay: 0.08,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                <BriefcaseBusiness size={27} />
              </div>

              <div>
                <div className="text-3xl font-black text-[#123B79]">02</div>

                <div className="text-sm font-extrabold text-[#102944]">
                  Directors
                </div>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Strategy & operations
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team */}

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
              duration: 0.5,
              delay: 0.16,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Users size={27} />
              </div>

              <div>
                <div className="text-3xl font-black text-[#123B79]">03</div>

                <div className="text-sm font-extrabold text-[#102944]">
                  Leadership Team
                </div>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Working towards one vision
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          TEAM SECTION
      ======================================================== */}

      <section className="relative py-24 sm:py-28">
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
                Leadership Team
              </span>

              <span className="h-px w-12 bg-sky-300" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#102944] sm:text-5xl">
              Meet Our Team
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              The leadership behind KMR Conchem works together with a shared
              commitment to quality, innovation, customer satisfaction and
              sustainable growth.
            </p>
          </motion.div>

          {/* Team Cards */}

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;

              return (
                <motion.article
                  key={member.id}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_28px_75px_rgba(14,165,233,0.14)]"
                >
                  {/* Top Gradient */}

                  <div className="h-1.5 w-full bg-gradient-to-r from-sky-400 via-blue-600 to-cyan-400" />

                  {/* Image */}

                  <div className="relative h-[360px] overflow-hidden bg-gradient-to-b from-slate-50 to-sky-50">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
                    />

                    {/* Overlay */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061A35]/60 via-transparent to-transparent" />

                    {/* Role */}

                    <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#061A35]/80 px-4 py-2.5 text-white shadow-xl backdrop-blur-md">
                      <Icon size={15} className={member.iconColor} />

                      <span className="text-[10px] font-extrabold uppercase tracking-[1.8px]">
                        {member.role}
                      </span>
                    </div>

                    {/* Number */}

                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xs font-black text-white backdrop-blur-md">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-7">
                    {/* Badge */}

                    <div className="mb-4 flex items-center gap-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${member.iconBg}`}
                      >
                        <Icon size={16} className={member.iconColor} />
                      </div>

                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-[1.8px] ${member.iconColor}`}
                      >
                        {member.badge}
                      </span>
                    </div>

                    {/* Name */}

                    <h3 className="text-2xl font-black tracking-tight text-[#102944]">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-sm font-bold text-sky-600">
                      {member.shortRole}
                    </p>

                    {/* Divider */}

                    <div className="mt-4 flex items-center gap-2">
                      <span className="h-[2px] w-12 bg-sky-400 transition-all duration-500 group-hover:w-20" />

                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    </div>

                    {/* Description */}

                    <p className="mt-5 text-sm leading-7 text-slate-600">
                      {member.description}
                    </p>

                    {/* Button */}

                    <button
                      type="button"
                      onClick={() => setSelectedMember(member)}
                      className="group/button mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#0B4DA2] transition-colors hover:text-sky-600"
                    >
                      View Profile
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                      />
                    </button>
                  </div>

                  {/* Bottom */}

                  <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          COMPANY APPROACH
      ======================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-sky-100/50 blur-[130px]" />

          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
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
                Our Approach
              </span>

              <span className="h-px w-12 bg-sky-300" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#102944] sm:text-5xl">
              Driven by Purpose
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Our leadership works together to build a company that delivers
              quality products, dependable services and lasting value.
            </p>
          </motion.div>

          {/* Values */}

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
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
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_50px_rgba(14,165,233,0.10)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-base font-black text-[#102944]">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          COMPANY STORY
      ======================================================== */}

      <section className="relative bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-7 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            {/* Left */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >
              {/* Decorative Card */}

              <div className="relative overflow-hidden rounded-[30px] bg-[#061A35] p-8 shadow-[0_25px_70px_rgba(6,26,53,0.18)] sm:p-10">
                {/* Glow */}

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/15 blur-[80px]" />

                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                    <Building2 size={27} className="text-cyan-300" />
                  </div>

                  <h3 className="mt-7 text-3xl font-black leading-tight text-white sm:text-4xl">
                    Building a Stronger
                    <span className="block text-cyan-300">Future Together</span>
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    KMR Conchem Pvt. Ltd. combines leadership, skilled people
                    and a customer-first mindset to deliver construction
                    chemical solutions designed for modern infrastructure.
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#061A35] bg-amber-100">
                        <Crown size={14} className="text-amber-600" />
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#061A35] bg-emerald-100">
                        <Handshake size={14} className="text-emerald-600" />
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#061A35] bg-blue-100">
                        <BriefcaseBusiness
                          size={14}
                          className="text-blue-600"
                        />
                      </div>
                    </div>

                    <span className="text-xs font-bold text-slate-300">
                      One team. One vision.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-12 bg-sky-300" />

                <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                  About KMR Conchem
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight text-[#102944] sm:text-5xl">
                Skilled People.
                <span className="block text-sky-600">Strong Purpose.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                KMR Conchem Pvt. Ltd. is a trusted name in the manufacturing of
                construction chemicals. Backed by a skilled and dedicated team,
                we deliver world-class products designed to ensure strength,
                durability and innovation.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                With a customer-first approach, our focus is on providing
                quality-driven products and reliable services that add value to
                every project.
              </p>

              {/* Points */}

              <div className="mt-8 space-y-4">
                {[
                  "Quality-driven construction chemical solutions",
                  "Customer-first approach",
                  "Focus on reliable products and services",
                  "Continuous improvement and innovation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-50">
                      <CheckCircle2 size={15} className="text-sky-600" />
                    </div>

                    <span className="text-sm font-semibold leading-6 text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CTA
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
                <Users size={25} className="text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-white sm:text-3xl">
                  Let&apos;s build better solutions together.
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  Discover KMR Conchem&apos;s construction chemical solutions
                  designed around quality, reliability and performance.
                </p>
              </div>
            </div>

            {/* Buttons */}

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Products
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/10"
              >
                Contact Us
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
          PROFILE MODAL
      ======================================================== */}

      <AnimatePresence>
        {selectedMember && (
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
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020817]/80 p-4 backdrop-blur-md sm:p-7"
            onClick={() => setSelectedMember(null)}
          >
            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-7 sm:top-7"
              aria-label="Close profile"
            >
              <X size={21} />
            </button>

            {/* Modal */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-[1000px] overflow-y-auto rounded-[28px] bg-white shadow-2xl"
            >
              {/* Modal Header */}

              <div className="relative overflow-hidden bg-[#061A35] px-7 py-8 sm:px-10">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/15 blur-[80px]" />

                <div className="relative flex items-center gap-5">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${selectedMember.iconBg}`}
                  >
                    {(() => {
                      const Icon = selectedMember.icon;

                      return (
                        <Icon size={27} className={selectedMember.iconColor} />
                      );
                    })()}
                  </div>

                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[2px] text-cyan-300">
                      {selectedMember.badge}
                    </p>

                    <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      {selectedMember.name}
                    </h2>

                    <p className="mt-1 text-sm font-semibold text-slate-300">
                      {selectedMember.shortRole}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}

              <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[.7fr_1.3fr]">
                {/* Image */}

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="h-[360px] w-full object-cover object-top sm:h-[420px]"
                  />
                </div>

                {/* Content */}

                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-sky-300" />

                    <span className="text-xs font-extrabold uppercase tracking-[2px] text-sky-600">
                      Profile
                    </span>
                  </div>

                  <h3 className="mt-4 text-3xl font-black text-[#102944]">
                    Leadership & Responsibility
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {selectedMember.fullDescription}
                  </p>

                  {/* Responsibilities */}

                  <div className="mt-7">
                    <h4 className="text-sm font-black uppercase tracking-[1.5px] text-[#102944]">
                      Key Focus Areas
                    </h4>

                    <div className="mt-4 space-y-3">
                      {selectedMember.responsibilities.map((responsibility) => (
                        <div
                          key={responsibility}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-50">
                            <CheckCircle2 size={14} className="text-sky-600" />
                          </div>

                          <span className="text-sm leading-6 text-slate-600">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Close */}

                  <button
                    type="button"
                    onClick={() => setSelectedMember(null)}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B4DA2] to-sky-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    Close Profile
                    <X size={17} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default OurTeam;
