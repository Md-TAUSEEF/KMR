import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IndustryCard = ({ industry, index }) => {
  const Icon = industry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group h-full"
    >

      <Link
        to={`/applications/${industry.slug}`}
        className="
        block h-full overflow-hidden rounded-3xl 
        border border-slate-200 bg-white
        shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        transition-all duration-500
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
        "
      >

        {/* Image */}

        <div className="relative h-56 overflow-hidden">

          <img
            src={industry.heroImage}
            alt={industry.name}
            className="
            h-full w-full object-cover
            transition duration-700
            group-hover:scale-110
            "
          />

          <div className="
          absolute inset-0 
          bg-gradient-to-t 
          from-black/80 
          via-black/30 
          to-transparent
          "/>


          {/* Icon */}

          <div
            className="
            absolute left-6 top-6
            flex h-16 w-16
            items-center justify-center
            rounded-2xl
            text-white
            shadow-xl
            border border-white/20
            backdrop-blur-md
            transition duration-500
            group-hover:rotate-6
            group-hover:scale-110
            "
            style={{
              backgroundColor: industry.iconColor,
            }}
          >
            <Icon size={30}/>
          </div>


          {/* Title */}

          <div className="absolute bottom-6 left-6 right-6">

            <h3 className="
            text-2xl
            font-extrabold
            tracking-tight
            text-white
            ">
              {industry.name}
            </h3>

          </div>

        </div>



        {/* Content */}

        <div className="flex min-h-[220px] flex-col p-7">


          <p className="
          flex-1
          leading-7
          text-slate-600
          ">
            {industry.shortDescription}
          </p>



          {/* Tags */}

          <div className="mt-5 flex flex-wrap gap-2">
{industry.works?.slice(0,3).map((work)=>(
  <span
    key={work.id}
    className="
    rounded-full
    border
    px-3 py-1
    text-xs
    font-semibold
    "
    style={{
      color: industry.accent,
      borderColor: `${industry.accent}40`,
      backgroundColor: `${industry.accent}12`
    }}
  >
    {work.title}
  </span>
))}

          </div>



          {/* CTA */}

          <div
          className="
          mt-6 flex items-center gap-2
          font-semibold
          transition-all
          group-hover:gap-4
          "
          style={{
            color:industry.accent
          }}
          >

            Explore Industry

            <ArrowRight
            size={18}
            className="
            transition-transform
            duration-300
            group-hover:translate-x-2
            "
            />

          </div>


        </div>


      </Link>

    </motion.div>
  );
};


export default IndustryCard;