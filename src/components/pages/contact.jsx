import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  FlaskConical,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Users,
  Award,
} from "lucide-react";

import factoryImage from "../../assets/manufac/kmr.webp";

// ============================================================
// KMR CONCHEM CONTACT DETAILS
// ============================================================

const KMR_PHONE = "+91 90659 39835";
const KMR_WHATSAPP = "919065939835";
const KMR_EMAIL = "kmrindia.in@gmail.com";

// ============================================================
// ANIMATION
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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
// CONTACT
// ============================================================

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  // ==========================================================
  // FORM CHANGE
  // ==========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================================
  // FORM SUBMIT
  // ==========================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject
        ? `${formData.subject} - Website Enquiry`
        : `New Website Enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Hello KMR Conchem,

I would like to get in touch regarding the following requirement.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "Not provided"}
Enquiry Type: ${formData.subject || "General Enquiry"}

Message:
${formData.message}

Regards,
${formData.name}`
    );

    window.location.href = `mailto:${KMR_EMAIL}?subject=${subject}&body=${body}`;
  };

  // ==========================================================
  // CONTACT ACTIONS
  // ==========================================================

  const contactActions = [
    {
      title: "Call Us",
      subtitle: "Speak with our expert",
      value: KMR_PHONE,
      button: "Call Now",
      icon: Phone,
      href: `tel:${KMR_PHONE}`,
      iconClass:
        "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-blue-500/30",
      buttonClass:
        "bg-gradient-to-r from-blue-600 to-blue-700 shadow-blue-500/20 hover:shadow-blue-500/40",
      glowClass: "bg-blue-400/20",
    },

    {
      title: "WhatsApp",
      subtitle: "Chat with our team",
      value: KMR_PHONE,
      button: "Chat Now",
      icon: MessageCircle,
      href: `https://wa.me/${KMR_WHATSAPP}?text=${encodeURIComponent(
        "Hello KMR Conchem, I would like to know more about your products and services."
      )}`,
      iconClass:
        "bg-gradient-to-br from-green-400 to-green-600 text-white shadow-green-500/30",
      buttonClass:
        "bg-gradient-to-r from-green-500 to-green-600 shadow-green-500/20 hover:shadow-green-500/40",
      glowClass: "bg-green-400/20",
    },

    {
      title: "Email Us",
      subtitle: "Send us an email",
      value: KMR_EMAIL,
      button: "Send Email",
      icon: Mail,
      href: `mailto:${KMR_EMAIL}`,
      iconClass:
        "bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-orange-500/30",
      buttonClass:
        "bg-gradient-to-r from-orange-500 to-orange-600 shadow-orange-500/20 hover:shadow-orange-500/40",
      glowClass: "bg-orange-400/20",
    },
  ];

  // ==========================================================
  // STATS
  // ==========================================================

  const stats = [
    {
      icon: Award,
      number: "25+",
      label: "Years of Excellence",
    },
    {
      icon: FlaskConical,
      number: "500+",
      label: "Products Delivered",
    },
    {
      icon: Users,
      number: "3000+",
      label: "Happy Clients",
    },
    {
      icon: ShieldCheck,
      number: "100%",
      label: "Quality Assured",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left glow */}
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-100/70 blur-3xl" />

        {/* Right glow */}
        <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-cyan-100/60 blur-3xl" />

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-[30%] h-[300px] w-[500px] rounded-full bg-blue-50 blur-3xl" />

        {/* Dot pattern left */}
        <div
          className="absolute left-7 top-10 h-28 w-28 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#2563eb 1.2px, transparent 1.2px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Dot pattern right */}
        <div
          className="absolute right-8 top-[32%] h-28 w-28 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#2563eb 1.2px, transparent 1.2px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Top right circle */}
        <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full border-[40px] border-blue-100/60" />
      </div>

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        {/* ====================================================
            TOP HEADER + ACTION CARDS
        ==================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* ==================================================
              LEFT HEADING
          ================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            {/* Label */}

            <div className="mb-5 inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Contact Us
              </span>
            </div>

            {/* Heading */}

            <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">
              Let&apos;s Build Something
              <br />

              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Better Together
              </span>
            </h2>

            {/* Decorative line */}

            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-16 bg-blue-600" />

              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-blue-600">
                <Building2 size={15} />
              </span>

              <span className="h-[2px] w-16 bg-blue-600" />
            </div>

            {/* Description */}

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Have a question, project in mind, or need expert advice?
              We&apos;re here to help. Reach out to the KMR Conchem team
              anytime.
            </p>
          </motion.div>

          {/* ==================================================
              ACTION CARDS
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid gap-5 sm:grid-cols-3 lg:col-span-7"
          >
            {contactActions.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  variants={fadeUp}
                  href={item.href}
                  target={
                    item.title === "WhatsApp" ? "_blank" : undefined
                  }
                  rel={
                    item.title === "WhatsApp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group relative overflow-hidden rounded-[26px] border border-slate-100 bg-white p-5 text-center shadow-[0_15px_50px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.13)] sm:p-6"
                >
                  {/* Glow */}

                  <div
                    className={`absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150 ${item.glowClass}`}
                  />

                  {/* Icon */}

                  <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center">
                    {/* Outer ring */}

                    <div className="absolute inset-0 rounded-full bg-slate-50" />

                    <div
                      className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${item.iconClass}`}
                    >
                      <Icon size={27} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Content */}

                  <h3 className="relative text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="relative mt-1 text-sm text-slate-500">
                    {item.subtitle}
                  </p>

                  <p className="relative mt-4 min-h-[24px] break-all text-sm font-bold text-slate-800">
                    {item.value}
                  </p>

                  {/* Button */}

                  <div
                    className={`relative mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 group-hover:-translate-y-0.5 ${item.buttonClass}`}
                  >
                    {item.button}

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* ====================================================
            FORM + KMR PANEL
        ==================================================== */}

        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          {/* ==================================================
              ENQUIRY FORM
          ================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-[30px] border border-slate-100 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.07)] sm:p-8 lg:p-9"
          >
            {/* Form heading */}

            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/25">
                <Send size={23} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Send Us Your Enquiry
                </h3>

                <div className="mt-3 h-1 w-12 rounded-full bg-blue-600" />
              </div>
            </div>

            {/* Form */}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your Name <span className="text-blue-600">*</span>
                  </label>

                  <div className="relative">
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your Email <span className="text-blue-600">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              {/* Phone + Company */}

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Phone */}

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number <span className="text-blue-600">*</span>
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Company */}

                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Company Name
                  </label>

                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subject / Enquiry Type{" "}
                  <span className="text-blue-600">*</span>
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="">Select enquiry type</option>
                  <option value="Product Enquiry">
                    Product Enquiry
                  </option>
                  <option value="Technical Support">
                    Technical Support
                  </option>
                  <option value="Project Requirement">
                    Project Requirement
                  </option>
                  <option value="Dealership / Distribution">
                    Dealership / Distribution
                  </option>
                  <option value="Quotation Request">
                    Quotation Request
                  </option>
                  <option value="General Enquiry">
                    General Enquiry
                  </option>
                </select>
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Message <span className="text-blue-600">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your requirement..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Submit Row */}

              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30"
                >
                  Send Enquiry

                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {/* Privacy */}

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck
                    size={18}
                    className="shrink-0 text-blue-600"
                  />

                  <span>
                    We respect your privacy.
                    <br />
                    Your information is safe with us.
                  </span>
                </div>
              </div>
            </form>
          </motion.div>

          {/* ==================================================
              KMR INFORMATION PANEL
          ================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="group relative min-h-[620px] overflow-hidden rounded-[30px] bg-slate-950 shadow-[0_25px_80px_rgba(15,23,42,0.15)]"
          >
            {/* Factory Image */}

            <img
              src={factoryImage}
              alt="KMR Conchem Manufacturing Facility"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />

            {/* Blue Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-800/25" />

            {/* Additional bottom overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

            {/* Decorative circles */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

            {/* Dot pattern */}

            <div
              className="absolute right-8 top-8 h-24 w-24 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />

            {/* Content */}

            <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9">
              <div>
                {/* KMR Brand */}

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <Building2 size={28} className="text-cyan-300" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-black tracking-wide text-white">
                      KMR
                    </h3>

                    <p className="-mt-1 text-xs font-semibold tracking-[0.28em] text-cyan-300">
                      CONCHEM
                    </p>
                  </div>
                </div>

                {/* Heading */}

                <h3 className="mt-12 max-w-lg text-3xl font-black leading-tight text-white sm:text-4xl">
                  Building Chemistry
                  <br />

                  <span className="text-cyan-300">
                    for a Better Tomorrow
                  </span>
                </h3>

                <div className="mt-5 h-1 w-12 rounded-full bg-cyan-400" />

                <p className="mt-6 max-w-md text-sm leading-6 text-blue-100 sm:text-base">
                  KMR Conchem is committed to delivering high-quality
                  construction chemical solutions with innovation, trust
                  and excellence.
                </p>
              </div>

              {/* Bottom Information */}

              <div className="mt-12 space-y-4">
                {/* Location */}

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/80 text-white shadow-lg shadow-blue-500/20">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Our Location
                    </p>

                    <p className="text-xs text-blue-200">
                      India
                    </p>
                  </div>
                </div>

                {/* Working Hours */}

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/80 text-white shadow-lg shadow-blue-500/20">
                    <Clock3 size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Working Hours
                    </p>

                    <p className="text-xs text-blue-200">
                      Mon - Sat : 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

              {/* Follow Us */}

<div className="flex items-center gap-4">
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/80 text-white shadow-lg shadow-blue-500/20">
    <Globe2 size={20} />
  </div>

  <div>
    <p className="text-sm font-bold text-white">
      Follow Us
    </p>

    <div className="mt-2 flex gap-2">

      {/* ==================================================
          FACEBOOK
      ================================================== */}

      <a
        href="#"
        aria-label="Facebook"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#1877F2]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[17px] w-[17px] fill-current"
        >
          <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
        </svg>
      </a>

      {/* ==================================================
          INSTAGRAM
      ================================================== */}

      <a
        href="#"
        aria-label="Instagram"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#E4405F]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[17px] w-[17px] fill-none stroke-current"
          strokeWidth="1.8"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
          />

          <circle
            cx="12"
            cy="12"
            r="4"
          />

          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            className="fill-current stroke-none"
          />
        </svg>
      </a>

      {/* ==================================================
          LINKEDIN
      ================================================== */}

      <a
        href="#"
        aria-label="LinkedIn"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#0A66C2]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[17px] w-[17px] fill-current"
        >
          <path d="M6.5 8.5A2.5 2.5 0 1 0 6.5 3.5a2.5 2.5 0 0 0 0 5ZM4.5 21h4V10h-4v11ZM11 10v11h4v-5.5c0-1.45.27-2.9 2.1-2.9 1.8 0 1.9 1.7 1.9 3V21h4v-6.2c0-3.05-.65-5.4-4.2-5.4-1.7 0-2.85.93-3.32 1.82h-.05V10H11Z" />
        </svg>
      </a>

    </div>
  </div>
</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ====================================================
            STATS BAR
        ==================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_15px_50px_rgba(37,99,235,0.08)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`group flex items-center justify-center gap-4 px-5 py-6 transition-colors duration-300 hover:bg-blue-50/50 sm:px-8 ${
                    index !== 0
                      ? "border-t border-blue-100 lg:border-l lg:border-t-0"
                      : ""
                  }`}
                >
                  {/* Icon */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  {/* Text */}

                  <div>
                    <p className="text-2xl font-black text-blue-600 sm:text-3xl">
                      {stat.number}
                    </p>

                    <p className="text-xs font-medium text-slate-500 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ====================================================
            DIRECT CONTACT STRIP
        ==================================================== */}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <CheckCircle2 size={18} className="text-blue-600" />

          <p className="text-sm text-slate-500">
            Prefer a quick conversation?
          </p>

          <a
            href={`tel:${KMR_PHONE}`}
            className="font-bold text-blue-600 transition-colors hover:text-blue-700"
          >
            Call KMR Conchem directly →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;