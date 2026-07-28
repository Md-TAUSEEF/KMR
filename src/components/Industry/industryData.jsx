import {
  Award,
  Building,
  Building2,
  Droplets,
  Factory,
  FlaskConical,
  Fuel,
  Home,
  Landmark,
  ShieldCheck,
  Train,
  Truck,
  Waves,
  Zap,
  HeartPulse,
  Hotel,
  ShoppingBag,
  GraduationCap,
  Warehouse,
} from "lucide-react";


import waterproofing from "../../assets/products/waterproofing.png";
import adhesive from "../../assets/products/adhesive.png";
import coating from "../../assets/products/coating.png";





export const industryData = [
  // ======================================================
  // BUILDING CONSTRUCTION
  // ======================================================

  {
    id: 1,

    slug: "building-construction",

    name: "Building Construction",

    shortDescription:
      "High-performance construction chemical solutions for residential, commercial and high-rise buildings.",

    heroTitle: "Building Strong Foundations for Modern Construction",

    heroDescription:
      "Advanced construction chemical systems engineered for superior strength, waterproofing, structural repair and long-term durability across every stage of modern building construction.",

    heroImage: waterproofing,

    accent: "#2563eb",

    icon: Building2,

    iconColor: "#2563eb",

    // ================= FEATURES =================

    features: [
      {
        title: "Superior Waterproofing",
        description:
          "Reliable waterproofing systems for roofs, basements and wet areas.",
        color: "#2563eb",
        icon: Droplets,
      },

      {
        title: "Structural Protection",
        description:
          "Protects reinforced concrete from corrosion and environmental damage.",
        color: "#ef4444",
        icon: ShieldCheck,
      },

      {
        title: "Premium Durability",
        description:
          "Long-lasting performance with reduced maintenance requirements.",
        color: "#8b5cf6",
        icon: Award,
      },

      {
        title: "Chemical Resistance",
        description:
          "Excellent resistance against moisture, chemicals and weather exposure.",
        color: "#f59e0b",
        icon: FlaskConical,
      },
    ],

    // ================= WORKS =================

    works: [
      {
        id: 1,

        slug: "residential-buildings",

        title: "Residential Buildings",

        description:
          "Construction chemical solutions for villas, apartments and residential housing projects.",

        image: adhesive,

        icon: Home,

        color: "#2563eb",
      },

      {
        id: 2,

        slug: "commercial-buildings",

        title: "Commercial Buildings",

        description:
          "Reliable waterproofing, flooring and repair systems for commercial developments.",

        image: coating,

        icon: Building2,

        color: "#8b5cf6",
      },

      {
        id: 3,

        slug: "high-rise-buildings",

        title: "High Rise Buildings",

        description:
          "Advanced repair mortars, grouts and waterproofing systems for skyscrapers.",

        image: coating,

        icon: Building,

        color: "#14b8a6",
      },
    ],
  },

  // ======================================================
  // OIL & GAS
  // ======================================================

  {
    id: 2,

    slug: "oil-gas",

    name: "Oil & Gas",

    shortDescription:
      "Reliable construction chemical solutions for refineries, pipelines, terminals and offshore infrastructure.",

    heroTitle: "Reliable Protection for Oil & Gas Infrastructure",

    heroDescription:
      "High-performance repair systems, corrosion protection and industrial flooring solutions designed for demanding oil and gas environments.",

    heroImage: coating,

    accent: "#ef4444",

    icon: Fuel,

    iconColor: "#ef4444",

    // ================= FEATURES =================

    features: [
      {
        title: "Corrosion Protection",
        description:
          "Protects steel and concrete structures in aggressive industrial environments.",
        color: "#ef4444",
        icon: ShieldCheck,
      },

      {
        title: "Chemical Resistance",
        description:
          "Excellent resistance against fuels, oils and harsh industrial chemicals.",
        color: "#f59e0b",
        icon: FlaskConical,
      },

      {
        title: "Leak Prevention",
        description:
          "Reliable waterproofing and sealing systems for storage facilities.",
        color: "#22c55e",
        icon: Droplets,
      },

      {
        title: "Long Service Life",
        description:
          "Engineered for maximum durability with minimal maintenance.",
        color: "#8b5cf6",
        icon: Award,
      },
    ],

    // ================= WORKS =================

    works: [
      {
        id: 1,

        slug: "exploration-drilling",

        title: "Exploration & Drilling",

        description:
          "Construction chemical systems for offshore platforms, drilling operations and industrial foundations.",

        image: coating,

        icon: Fuel,

        color: "#ef4444",
      },

      {
        id: 2,

        slug: "refining-processing",

        title: "Refining & Processing",

        description:
          "Heavy-duty flooring, repair mortars and chemical resistant protective coatings.",

        image: coating,

        icon: Factory,

        color: "#f59e0b",
      },

      {
        id: 3,

        slug: "storage-transportation",

        title: "Storage & Transportation",

        description:
          "Corrosion protection, waterproofing and repair systems for tanks and pipelines.",

        image: coating,

        icon: Warehouse,

        color: "#22c55e",
      },
    ],
  },
  // ======================================================
  // METRO & RAIL
  // ======================================================

  {
    id: 3,

    slug: "metro-rail",

    name: "Metro & Rail",

    shortDescription:
      "Advanced construction chemical solutions for metro stations, railway infrastructure and underground tunnels.",

    heroTitle: "Engineering the Future of Metro & Rail Infrastructure",

    heroDescription:
      "High-performance waterproofing, repair mortars and protective systems designed for modern railway and metro projects.",

    heroImage: coating,

    accent: "#7c3aed",

    icon: Train,

    iconColor: "#7c3aed",

    features: [
      {
        title: "Tunnel Waterproofing",
        description:
          "Long-lasting waterproofing systems for underground metro tunnels.",
        color: "#2563eb",
        icon: Droplets,
      },

      {
        title: "Structural Durability",
        description:
          "Improves durability under continuous vibration and heavy traffic.",
        color: "#ef4444",
        icon: ShieldCheck,
      },

      {
        title: "Fast Repair Systems",
        description:
          "Quick-setting repair solutions for minimum service interruption.",
        color: "#14b8a6",
        icon: Award,
      },

      {
        title: "Chemical Protection",
        description:
          "Resistant against moisture, oils and harsh environmental exposure.",
        color: "#f59e0b",
        icon: FlaskConical,
      },
    ],

    works: [
      {
        id: 1,

        slug: "metro-stations",

        title: "Metro Stations",

        description:
          "Waterproofing and flooring systems for modern metro stations.",

        image: coating,

        icon: Train,

        color: "#7c3aed",
      },

      {
        id: 2,

        slug: "railway-platforms",

        title: "Railway Platforms",

        description:
          "Heavy-duty flooring and repair systems for railway platforms.",

        image: coating,

        icon: Train,

        color: "#2563eb",
      },

      {
        id: 3,

        slug: "underground-tunnels",

        title: "Underground Tunnels",

        description:
          "Injection grouts and waterproofing systems for underground tunnels.",

        image: coating,

        icon: Train,

        color: "#14b8a6",
      },
    ],
  },

  // ======================================================
  // ROADS & HIGHWAYS
  // ======================================================

  {
    id: 4,

    slug: "roads-highways",

    name: "Roads & Highways",

    shortDescription:
      "Performance construction chemicals for highways, expressways and transportation infrastructure.",

    heroTitle: "Building Durable Roads & Highways",

    heroDescription:
      "High-strength repair systems, expansion joint solutions and protective coatings for transportation infrastructure.",

    heroImage: coating,

    accent: "#f97316",

    icon: Truck,

    iconColor: "#f97316",

    features: [
      {
        title: "Heavy Load Resistance",
        description: "Designed for constant heavy vehicle movement.",
        color: "#f97316",
        icon: ShieldCheck,
      },

      {
        title: "Weather Protection",
        description: "Performs efficiently in all weather conditions.",
        color: "#0ea5e9",
        icon: Droplets,
      },

      {
        title: "Rapid Repair",
        description: "Fast repair solutions to minimise traffic disruption.",
        color: "#22c55e",
        icon: Award,
      },

      {
        title: "Long-Term Durability",
        description: "Reliable service life with reduced maintenance costs.",
        color: "#8b5cf6",
        icon: FlaskConical,
      },
    ],

    works: [
      {
        id: 1,

        slug: "national-highways",

        title: "National Highways",

        description:
          "Repair mortars and protective systems for national highways.",

        image: "/products/product-1.webp",

        icon: Truck,

        color: "#f97316",
      },

      {
        id: 2,

        slug: "expressways",

        title: "Expressways",

        description: "Durable construction solutions for high-speed corridors.",

        image: coating,

        icon: Truck,

        color: "#2563eb",
      },

      {
        id: 3,

        slug: "flyovers",

        title: "Flyovers",

        description: "Expansion joint systems and structural repair solutions.",

        image: coating,

        icon: Landmark,

        color: "#14b8a6",
      },
    ],
  },

  // ======================================================
  // BRIDGES
  // ======================================================

  {
    id: 5,

    slug: "bridges",

    name: "Bridges",

    shortDescription:
      "Advanced repair, strengthening and protection systems for bridge infrastructure.",

    heroTitle: "Strengthening Critical Bridge Infrastructure",

    heroDescription:
      "Reliable construction chemical technologies for bridge decks, piers, girders and heavy civil structures.",

    heroImage: coating,

    accent: "#06b6d4",

    icon: Landmark,

    iconColor: "#06b6d4",

    features: [
      {
        title: "Corrosion Protection",
        description: "Protects bridge reinforcement against corrosion.",
        color: "#ef4444",
        icon: ShieldCheck,
      },

      {
        title: "Waterproof Deck Systems",
        description: "Reliable waterproofing for bridge decks and joints.",
        color: "#0ea5e9",
        icon: Droplets,
      },

      {
        title: "Structural Repair",
        description: "High-strength repair mortars for damaged concrete.",
        color: "#f97316",
        icon: Award,
      },

      {
        title: "Long Service Life",
        description: "Extends the operational life of bridge structures.",
        color: "#8b5cf6",
        icon: FlaskConical,
      },
    ],

    works: [
      {
        id: 1,

        slug: "river-bridges",

        title: "River Bridges",

        description:
          "Waterproofing and repair systems for river bridge structures.",

        image: coating,

        icon: Landmark,

        color: "#06b6d4",
      },

      {
        id: 2,

        slug: "elevated-structures",

        title: "Elevated Structures",

        description: "Durable repair solutions for elevated bridge systems.",

        image: coating,

        icon: Landmark,

        color: "#f97316",
      },

      {
        id: 3,

        slug: "smart-city-bridges",

        title: "Smart City Bridges",

        description:
          "Modern protection systems for urban bridge infrastructure.",

        image: coating,

        icon: Landmark,

        color: "#8b5cf6",
      },
    ],
  },

  // ======================================================
  // POWER & ENERGY
  // ======================================================

  {
    id: 6,

    slug: "power-energy",

    name: "Power & Energy",

    shortDescription:
      "High-performance construction chemical solutions for thermal, solar, hydro and renewable energy infrastructure.",

    heroTitle: "Powering Reliable Energy Infrastructure",

    heroDescription:
      "Advanced repair systems, protective coatings and waterproofing solutions for power plants, substations and renewable energy projects.",

    heroImage: coating,

    accent: "#facc15",

    icon: Zap,

    iconColor: "#facc15",

    features: [
      {
        title: "Electrical Infrastructure Protection",
        description:
          "Protects critical power infrastructure from harsh environmental conditions.",
        color: "#facc15",
        icon: ShieldCheck,
      },

      {
        title: "Weather Resistant",
        description: "Designed for outdoor installations and extreme climates.",
        color: "#0ea5e9",
        icon: Droplets,
      },

      {
        title: "Long-Term Performance",
        description: "Durable systems requiring minimal maintenance.",
        color: "#8b5cf6",
        icon: Award,
      },

      {
        title: "Industrial Grade Quality",
        description: "Built to withstand demanding industrial environments.",
        color: "#f97316",
        icon: FlaskConical,
      },
    ],

    works: [
      {
        id: 1,

        slug: "thermal-plants",

        title: "Thermal Plants",

        description:
          "Repair and protection systems for thermal power facilities.",

        image: coating,

        icon: Zap,

        color: "#facc15",
      },

      {
        id: 2,

        slug: "solar-plants",

        title: "Solar Plants",

        description:
          "Waterproofing and structural protection for solar installations.",

        image: coating,

        icon: Zap,

        color: "#f59e0b",
      },

      {
        id: 3,

        slug: "substations",

        title: "Substations",

        description: "Industrial flooring and repair systems for substations.",

        image: coating,

        icon: Zap,

        color: "#22c55e",
      },
    ],
  },

  // ======================================================
  // WATER TREATMENT
  // ======================================================

  {
    id: 7,

    slug: "water-treatment",

    name: "Water Treatment",

    shortDescription:
      "Reliable waterproofing and protection systems for water treatment infrastructure.",

    heroTitle: "Protecting Critical Water Infrastructure",

    heroDescription:
      "High-performance waterproofing, crack repair and protective systems for water treatment plants, reservoirs and sewage infrastructure.",

    heroImage: coating,

    accent: "#0ea5e9",

    icon: Waves,

    iconColor: "#0ea5e9",

    features: [
      {
        title: "Leak Protection",
        description:
          "Advanced waterproofing solutions for water-retaining structures.",
        color: "#0ea5e9",
        icon: Droplets,
      },

      {
        title: "Corrosion Resistance",
        description: "Protects concrete against water and chemical attack.",
        color: "#ef4444",
        icon: ShieldCheck,
      },

      {
        title: "Long Service Life",
        description: "Reliable performance for municipal infrastructure.",
        color: "#8b5cf6",
        icon: Award,
      },

      {
        title: "Chemical Protection",
        description:
          "Excellent resistance against aggressive treatment chemicals.",
        color: "#22c55e",
        icon: FlaskConical,
      },
    ],

    works: [
      {
        id: 1,

        slug: "stp",

        title: "Sewage Treatment Plants",

        description: "Waterproofing and corrosion protection systems for STPs.",

        image: coating,

        icon: Waves,

        color: "#0ea5e9",
      },

      {
        id: 2,

        slug: "wtp",

        title: "Water Treatment Plants",

        description: "Protective systems for water treatment facilities.",

        image: coating,

        icon: Waves,

        color: "#2563eb",
      },

      {
        id: 3,

        slug: "water-reservoirs",

        title: "Water Reservoirs",

        description: "Leak-proof waterproofing systems for storage reservoirs.",

        image: coating,

        icon: Waves,

        color: "#14b8a6",
      },
    ],
  },

  // ======================================================
  // INDUSTRIAL PLANTS
  // ======================================================

  {
    id: 8,

    slug: "industrial-plants",

    name: "Industrial Plants",

    shortDescription:
      "Heavy-duty flooring, repair and waterproofing solutions for manufacturing industries.",

    heroTitle: "Industrial Performance Without Compromise",

    heroDescription:
      "Advanced construction chemical technologies for factories, warehouses and manufacturing facilities.",

    heroImage: coating,

    accent: "#64748b",

    icon: Factory,

    iconColor: "#64748b",

    features: [
      {
        title: "Heavy-Duty Flooring",
        description:
          "Industrial flooring systems designed for heavy machinery.",
        color: "#64748b",
        icon: ShieldCheck,
      },

      {
        title: "Chemical Resistant Floors",
        description: "Withstands aggressive industrial chemicals.",
        color: "#f97316",
        icon: FlaskConical,
      },

      {
        title: "High Strength",
        description:
          "Excellent load-bearing performance for industrial operations.",
        color: "#2563eb",
        icon: Award,
      },

      {
        title: "Easy Maintenance",
        description: "Smooth, durable surfaces that reduce maintenance costs.",
        color: "#22c55e",
        icon: Droplets,
      },
    ],

    works: [
      {
        id: 1,

        slug: "factories",

        title: "Factories",

        description:
          "Industrial flooring and repair systems for production facilities.",

        image: coating,

        icon: Factory,

        color: "#64748b",
      },

      {
        id: 2,

        slug: "warehouses",

        title: "Warehouses",

        description:
          "Heavy-duty flooring and waterproofing for warehouse buildings.",

        image: coating,

        icon: Warehouse,

        color: "#2563eb",
      },

      {
        id: 3,

        slug: "manufacturing-units",

        title: "Manufacturing Units",

        description:
          "High-performance repair and protection systems for manufacturing plants.",

        image: coating,

        icon: Factory,

        color: "#f97316",
      },
    ],
  },

  // ======================================================
  // HEALTHCARE
  // ======================================================

  {
    id: 9,

    slug: "healthcare",

    name: "Healthcare",

    shortDescription:
      "Safe, hygienic and durable construction chemical solutions for hospitals, laboratories and healthcare facilities.",

    heroTitle: "Creating Safer Healthcare Infrastructure",

    heroDescription:
      "Premium flooring, waterproofing and protective systems designed for hospitals, laboratories and modern healthcare buildings.",

    heroImage: coating,

    accent: "#22c55e",

    icon: HeartPulse,

    iconColor: "#22c55e",

    features: [
      {
        title: "Hygienic Surfaces",
        description:
          "Easy-to-clean, seamless flooring systems for healthcare environments.",
        color: "#22c55e",
        icon: ShieldCheck,
      },

      {
        title: "Waterproof Protection",
        description:
          "Reliable waterproofing for wet and sensitive medical areas.",
        color: "#0ea5e9",
        icon: Droplets,
      },

      {
        title: "Long-Term Durability",
        description: "High-performance systems with excellent service life.",
        color: "#8b5cf6",
        icon: Award,
      },

      {
        title: "Chemical Resistance",
        description: "Resistant to cleaning agents and medical chemicals.",
        color: "#f97316",
        icon: FlaskConical,
      },
    ],

    works: [
      {
        id: 1,
        slug: "hospitals",
        title: "Hospitals",
        description:
          "Premium flooring and waterproofing systems for hospitals.",
        image: coating,
        icon: HeartPulse,
        color: "#22c55e",
      },

      {
        id: 2,
        slug: "medical-labs",
        title: "Medical Laboratories",
        description:
          "Chemical-resistant flooring and protection systems for laboratories.",
        image: coating,
        icon: HeartPulse,
        color: "#2563eb",
      },

      {
        id: 3,
        slug: "healthcare-buildings",
        title: "Healthcare Buildings",
        description:
          "Reliable repair and waterproofing systems for healthcare infrastructure.",
        image: coating,
        icon: HeartPulse,
        color: "#8b5cf6",
      },
    ],
  },

  // ======================================================
  // HOTELS & RESORTS
  // ======================================================

  {
    id: 10,

    slug: "hospitality",

    name: "Hotels & Resorts",

    shortDescription:
      "Premium construction chemical solutions for luxury hotels, resorts and hospitality projects.",

    heroTitle: "Premium Solutions for Hospitality Projects",

    heroDescription:
      "Elegant flooring, waterproofing and finishing systems for hotels, resorts and commercial hospitality spaces.",

    heroImage: coating,

    accent: "#ec4899",

    icon: Hotel,

    iconColor: "#ec4899",

    features: [
      {
        title: "Luxury Finishes",
        description: "Premium flooring and decorative finishing solutions.",
        color: "#ec4899",
        icon: Award,
      },

      {
        title: "Waterproof Bathrooms",
        description: "Long-lasting waterproofing systems for wet areas.",
        color: "#0ea5e9",
        icon: Droplets,
      },

      {
        title: "Structural Protection",
        description:
          "Protects hospitality infrastructure from moisture and damage.",
        color: "#ef4444",
        icon: ShieldCheck,
      },

      {
        title: "Low Maintenance",
        description: "Durable finishes with reduced maintenance requirements.",
        color: "#22c55e",
        icon: FlaskConical,
      },
    ],

    works: [
      {
        id: 1,
        slug: "luxury-hotels",
        title: "Luxury Hotels",
        description: "Premium flooring and waterproofing for five-star hotels.",
        image: coating,
        icon: Hotel,
        color: "#ec4899",
      },

      {
        id: 2,
        slug: "resorts",
        title: "Resorts",
        description:
          "Decorative and waterproofing systems for resort projects.",
        image: coating,
        icon: Hotel,
        color: "#14b8a6",
      },

      {
        id: 3,
        slug: "convention-centres",
        title: "Convention Centres",
        description: "Durable flooring and structural repair solutions.",
        image: coating,
        icon: Hotel,
        color: "#8b5cf6",
      },
    ],
  },

  // ======================================================
  // SHOPPING MALLS
  // ======================================================

  {
    id: 11,

    slug: "shopping-malls",

    name: "Shopping Malls",

    shortDescription:
      "High-performance flooring and waterproofing systems for shopping centres and retail developments.",

    heroTitle: "Building Modern Retail Destinations",

    heroDescription:
      "Construction chemical technologies for shopping malls, retail outlets and entertainment complexes.",

    heroImage: coating,

    accent: "#8b5cf6",

    icon: ShoppingBag,

    iconColor: "#8b5cf6",

    features: [
      {
        title: "Heavy Footfall Resistance",
        description: "Designed for high-traffic commercial spaces.",
        color: "#8b5cf6",
        icon: ShieldCheck,
      },

      {
        title: "Decorative Flooring",
        description: "Premium flooring systems for retail environments.",
        color: "#ec4899",
        icon: Award,
      },

      {
        title: "Waterproof Protection",
        description: "Reliable waterproofing for shopping complexes.",
        color: "#0ea5e9",
        icon: Droplets,
      },

      {
        title: "Easy Maintenance",
        description: "Long-lasting finishes with minimal upkeep.",
        color: "#22c55e",
        icon: FlaskConical,
      },
    ],

    works: [
      {
        id: 1,
        slug: "shopping-centres",
        title: "Shopping Centres",
        description: "Premium flooring systems for shopping centres.",
        image: coating,
        icon: ShoppingBag,
        color: "#8b5cf6",
      },

      {
        id: 2,
        slug: "retail-stores",
        title: "Retail Stores",
        description: "Decorative flooring and waterproofing solutions.",
        image: coating,
        icon: ShoppingBag,
        color: "#2563eb",
      },

      {
        id: 3,
        slug: "entertainment-zones",
        title: "Entertainment Zones",
        description:
          "Durable flooring systems for public entertainment spaces.",
        image: coating,
        icon: ShoppingBag,
        color: "#f97316",
      },
    ],
  },

  // ======================================================
  // EDUCATIONAL INSTITUTIONS
  // ======================================================

  {
    id: 12,

    slug: "education",

    name: "Educational Institutions",

    shortDescription:
      "Safe, durable and sustainable construction chemical solutions for schools, colleges and universities.",

    heroTitle: "Building the Future of Education",

    heroDescription:
      "Innovative construction chemical systems for educational campuses and institutional buildings.",

    heroImage: coating,

    accent: "#14b8a6",

    icon: GraduationCap,

    iconColor: "#14b8a6",

    features: [
      {
        title: "Safe Infrastructure",
        description: "Reliable systems designed for educational campuses.",
        color: "#14b8a6",
        icon: ShieldCheck,
      },

      {
        title: "Long-Term Durability",
        description: "Built to withstand heavy daily usage.",
        color: "#8b5cf6",
        icon: Award,
      },

      {
        title: "Waterproof Protection",
        description: "Protects classrooms and buildings from water damage.",
        color: "#0ea5e9",
        icon: Droplets,
      },

      {
        title: "Eco Friendly",
        description: "Sustainable solutions for modern educational projects.",
        color: "#22c55e",
        icon: FlaskConical,
      },
    ],

    works: [
      {
        id: 1,
        slug: "schools",
        title: "Schools",
        description:
          "Construction chemical systems for primary and secondary schools.",
        image: coating,
        icon: GraduationCap,
        color: "#14b8a6",
      },

      {
        id: 2,
        slug: "colleges",
        title: "Colleges",
        description: "Flooring, waterproofing and repair systems for colleges.",
        image: coating,
        icon: GraduationCap,
        color: "#2563eb",
      },

      {
        id: 3,
        slug: "universities",
        title: "Universities",
        description:
          "Comprehensive construction solutions for university campuses.",
        image: coating,
        icon: GraduationCap,
        color: "#8b5cf6",
      },
    ],
  },
];
