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

import BUILDINGCONSTRUCTION from "../../assets/products/sector/BUILDINGCONSTRUCTION.png";
import OILGAS from "../../assets/products/sector/OILGAS.png";
import METRORAIL from "../../assets/products/sector/METRORAIL.png";
import ROADSHIGHWAYS from "../../assets/products/sector/ROADSHIGHWAYS.png";
import BRIDGES from "../../assets/products/sector/BRIDGES.png";
import POWERENERGY1 from "../../assets/products/sector/POWERENERGY1.png";
import WATERTREATMENT from "../../assets/products/sector/WATERTREATMENT.png";
import INDUSTRIALPLANTS from "../../assets/products/sector/INDUSTRIALPLANTS.png";
import HEALTHCARE from "../../assets/products/sector/HEALTHCARE.png";
import HOTELSRESORTS from "../../assets/products/sector/HOTELSRESORTS.png";

import SHOPPINGMALLS from "../../assets/products/sector/SHOPPINGMALLS.png";
import EDUCATIONALINSTITUTIONS from "../../assets/products/sector/EDUCATIONALINSTITUTIONS.png";








import waterproofing from "../../assets/products/waterproofing.png";
import adhesive from "../../assets/products/adhesive.png";
import coating from "../../assets/products/coating.png";
import flooring from "../../assets/products/flooring.png";
import grout from "../../assets/products/grout.png";
import repair from "../../assets/products/repair.png";


import admixture1 from "../../assets/products/Admixtures/admixture1.png";
import admixture2 from "../../assets/products/Admixtures/admixture2.png";
import admixture3 from "../../assets/products/Admixtures/admixture3.png";
import admixture4 from "../../assets/products/Admixtures/admixture4.png";


import Accelerators1 from "../../assets/products/Accelerators/Accelerators1.png"
import Accelerators2 from "../../assets/products/Accelerators/Accelerators2.png"
import Accelerators3 from "../../assets/products/Accelerators/Accelerators3.png"
import Accelerators4 from "../../assets/products/Accelerators/Accelerators4.png"
import Accelerators5 from "../../assets/products/Accelerators/Accelerators5.png"

import WaterProofing1 from "../../assets/products/WaterProofing/WaterProofing1.png"
import WaterProofing2 from "../../assets/products/WaterProofing/WaterProofing2.png"
import WaterProofing3 from "../../assets/products/WaterProofing/WaterProofing3.png"
import WaterProofing4 from "../../assets/products/WaterProofing/WaterProofing4.png"
import WaterProofing5 from "../../assets/products/WaterProofing/WaterProofing5.png"


import ShutterReleas1 from "../../assets/products/ShutterRelease/ShutterReleas1.png"
import ShutterReleas2 from "../../assets/products/ShutterRelease/ShutterReleas2.png"
import ShutterReleas3 from "../../assets/products/ShutterRelease/ShutterReleas3.png"
import ShutterReleas4 from "../../assets/products/ShutterRelease/ShutterReleas4.png"

import CuringCompounds1 from "../../assets/products/CuringCompounds/CuringCompounds1.png"
import CuringCompounds2 from "../../assets/products/CuringCompounds/CuringCompounds2.png"
import CuringCompounds3 from "../../assets/products/CuringCompounds/CuringCompounds3.png"
import CuringCompounds4 from "../../assets/products/CuringCompounds/CuringCompounds3.png"

import waterReducer1 from "../../assets/products/waterreducer/waterReducer1.png"
import waterReducer2 from "../../assets/products/waterreducer/waterReducer2.png"
import waterReducer3 from "../../assets/products/waterreducer/waterReducer3.png"
import waterReducer4 from "../../assets/products/waterreducer/waterReducer4.png"
import waterReducer5 from "../../assets/products/waterreducer/waterReducer5.png"


import pce1 from "../../assets/products/pce/pce1.png"
import pce2 from "../../assets/products/pce/pce2.png"
import pce3 from "../../assets/products/pce/pce3.png"
import pce4 from "../../assets/products/pce/pce4.png"
import pce5 from "../../assets/products/pce/pce5.png"


import knf1 from "../../assets/products/knf/knf1.png"
import knf2 from "../../assets/products/knf/knf2.png"
import knf3 from "../../assets/products/knf/knf3.png"
import knf4 from "../../assets/products/knf/knf4.png"
import knf5 from "../../assets/products/knf/knf5.png"

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

    heroImage: BUILDINGCONSTRUCTION,

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

    // ================= PRODUCTS =================

products:[
{
 name:"Tile Adhesive",
 description:"Premium tile fixing solution for residential and commercial buildings.",
 image:adhesive
},

{
 name:"Waterproofing Compound",
 description:"Advanced waterproofing system for roofs, bathrooms and basements.",
 image:waterproofing
},

{
 name:"Repair Mortar",
 description:"High strength repair solution for damaged concrete structures.",
 image:repair
},

{
 name:"Protective Coating",
 description:"Protective coating for concrete durability.",
 image:coating
}
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

    heroImage: OILGAS,

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

    // ================= PRODUCTS =================

products:[
{
 name:"Anti Corrosion Coating",
 description:
 "Heavy duty coating system for pipelines, tanks and refinery structures.",
 image:coating
},

{
 name:"Chemical Resistant Flooring",
 description:
 "Industrial flooring system for oil and gas processing areas.",
 image:flooring
},

{
 name:"Repair Mortar",
 description:
 "High strength repair system for industrial concrete structures.",
 image:repair
},

{
 name:"Waterproofing System",
 description:
 "Protection system for tanks and underground structures.",
 image:waterproofing
}
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

    heroImage: METRORAIL,

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

    // ================= PRODUCTS =================

products:[
{
 name:"Shotcrete Accelerator",
 image:Accelerators1,
 description:
 "Rapid setting solution for tunnelling and underground metro projects."
},

{
 name:"Injection Grout",
 image:grout,
 description:
 "Used for crack filling and underground waterproofing."
},

{
 name:"Waterproofing Compound",
 image:waterproofing,
 description:
 "Protection system for metro tunnels and stations."
},

{
 name:"Repair Mortar",
 image:repair,
 description:
 "Structural repair solution for railway infrastructure."
}
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

    heroImage: ROADSHIGHWAYS,

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

    // ================= PRODUCTS =================

products:[
{
 name:"Concrete Repair Mortar",
 image:repair
},

{
 name:"Joint Sealant",
 image:coating
},

{
 name:"Waterproofing System",
 image:waterproofing
},

{
 name:"Concrete Admixture",
 image:admixture1
}
],

    works: [
      {
        id: 1,

        slug: "national-highways",

        title: "National Highways",

        description:
          "Repair mortars and protective systems for national highways.",

        image: ROADSHIGHWAYS,

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

    heroImage: BRIDGES,

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

    // ================= PRODUCTS =================

products: [
  {
    id: 1,
    name: "Bridge Deck Waterproofing System",
    description:
      "Advanced waterproofing solution designed to protect bridge decks from water penetration, moisture damage and weather exposure.",
    image: waterproofing,
  },

  {
    id: 2,
    name: "Structural Repair Mortar",
    description:
      "High-strength repair mortar for restoring damaged concrete surfaces, piers, beams and bridge structures.",
    image: repair,
  },

  {
    id: 3,
    name: "Anti Corrosion Protective Coating",
    description:
      "Premium protective coating system that protects steel reinforcement and concrete structures from corrosion.",
    image: coating,
  },

  {
    id: 4,
    name: "Injection Grouting System",
    description:
      "High-performance grouting solution for crack sealing, void filling and structural strengthening applications.",
    image: grout,
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

    heroImage: POWERENERGY1,

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

    // ================= PRODUCTS =================

products:[
{
 name:"Protective Coating",
 image:coating
},

{
 name:"Chemical Resistant Flooring",
 image:flooring
},

{
 name:"Concrete Admixture",
 image:admixture1
},

{
 name:"Repair System",
 image:repair
}
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

    heroImage: WATERTREATMENT,

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

    // ================= PRODUCTS =================

products: [
  {
    id: 1,
    name: "Waterproofing System",
    description:
      "Advanced waterproofing solution for water treatment plants, reservoirs, tanks and underground structures to prevent leakage.",
    image: waterproofing,
  },

  {
    id: 2,
    name: "Chemical Resistant Coating",
    description:
      "Protective coating system designed to resist chemical attack in sewage treatment plants and industrial water facilities.",
    image: coating,
  },

  {
    id: 3,
    name: "Concrete Repair Mortar",
    description:
      "High-strength repair mortar for damaged concrete surfaces in tanks, channels and water infrastructure.",
    image: repair,
  },

  {
    id: 4,
    name: "Injection Grouting System",
    description:
      "Specialized grout solution for crack sealing, leak control and structural strengthening of water retaining structures.",
    image: grout,
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

    heroImage: INDUSTRIALPLANTS,

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

    // ================= PRODUCTS =================

products: [
  {
    id: 1,
    name: "Industrial Flooring System",
    description:
      "Heavy-duty flooring solution designed for factories, warehouses and manufacturing areas with high load and abrasion resistance.",
    image: flooring,
  },

  {
    id: 2,
    name: "Chemical Resistant Coating",
    description:
      "High-performance protective coating system for industrial floors and structures exposed to chemicals and harsh environments.",
    image: coating,
  },

  {
    id: 3,
    name: "Structural Repair Mortar",
    description:
      "High-strength repair solution for damaged concrete floors, columns and industrial structures.",
    image: repair,
  },

  {
    id: 4,
    name: "Concrete Admixture",
    description:
      "Advanced concrete admixture technology to improve strength, durability and performance of industrial structures.",
    image: admixture1,
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

    heroImage: HEALTHCARE,

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

    // ================= PRODUCTS =================

products: [
  {
    id: 1,
    name: "Antibacterial Flooring System",
    description:
      "Seamless hygienic flooring solution designed for hospitals, laboratories and healthcare facilities with easy cleaning and maintenance.",
    image: flooring,
  },

  {
    id: 2,
    name: "Medical Area Waterproofing System",
    description:
      "Advanced waterproofing solution for bathrooms, operation theatres and sensitive healthcare areas.",
    image: waterproofing,
  },

  {
    id: 3,
    name: "Chemical Resistant Coating",
    description:
      "Protective coating system resistant to cleaning chemicals, disinfectants and harsh healthcare environments.",
    image: coating,
  },

  {
    id: 4,
    name: "High Strength Repair Mortar",
    description:
      "Durable repair solution for concrete structures in hospitals and healthcare infrastructure.",
    image: repair,
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

    heroImage: HOTELSRESORTS,

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

    // ================= PRODUCTS =================

products: [
  {
    id: 1,
    name: "Luxury Flooring System",
    description:
      "Premium decorative flooring solution designed for hotels, resorts, lobbies and hospitality spaces with elegant finishes and high durability.",
    image: flooring,
  },

  {
    id: 2,
    name: "Bathroom Waterproofing System",
    description:
      "Advanced waterproofing solution for hotel bathrooms, wet areas and swimming pool surroundings to prevent leakage and moisture damage.",
    image: waterproofing,
  },

  {
    id: 3,
    name: "Decorative Protective Coating",
    description:
      "High-quality coating system that provides attractive finishes and protection for hospitality interiors and exterior surfaces.",
    image: coating,
  },

  {
    id: 4,
    name: "Concrete Repair & Restoration Mortar",
    description:
      "Premium repair mortar for maintaining concrete structures, terraces, balconies and hospitality infrastructure.",
    image: repair,
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

    heroImage: SHOPPINGMALLS,

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

    // ================= PRODUCTS =================

products: [
  {
    id: 1,
    name: "Heavy Duty Flooring System",
    description:
      "High-performance flooring solution designed for shopping malls, retail spaces and high footfall areas with excellent abrasion resistance.",
    image: flooring,
  },

  {
    id: 2,
    name: "Decorative Concrete Coating",
    description:
      "Premium decorative coating system that provides attractive finishes and long-lasting protection for commercial spaces.",
    image: coating,
  },

  {
    id: 3,
    name: "Commercial Waterproofing System",
    description:
      "Advanced waterproofing solution for basements, parking areas, terraces and wet zones in shopping complexes.",
    image: waterproofing,
  },

  {
    id: 4,
    name: "Structural Repair Mortar",
    description:
      "High-strength repair mortar for concrete structures, columns, beams and maintenance work in commercial buildings.",
    image: repair,
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

    heroImage: EDUCATIONALINSTITUTIONS,

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

    // ================= PRODUCTS =================

products: [
  {
    id: 1,
    name: "Institutional Flooring System",
    description:
      "Durable and safe flooring solution designed for schools, colleges and universities with excellent strength and easy maintenance.",
    image: flooring,
  },

  {
    id: 2,
    name: "Building Waterproofing System",
    description:
      "Advanced waterproofing solution for classrooms, laboratories, terraces and institutional buildings to prevent moisture damage.",
    image: waterproofing,
  },

  {
    id: 3,
    name: "Protective Coating System",
    description:
      "High-performance protective coating for walls, concrete surfaces and educational infrastructure exposed to weather conditions.",
    image: coating,
  },

  {
    id: 4,
    name: "Concrete Repair Mortar",
    description:
      "High-strength repair solution for damaged concrete structures, columns, beams and campus infrastructure maintenance.",
    image: repair,
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
