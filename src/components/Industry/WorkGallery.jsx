import { motion } from "framer-motion";
import { Expand, Images } from "lucide-react";
import { useState } from "react";

const WorkGallery = ({ industry, work }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Temporary Images
  const gallery = [
    {
      id: 1,
      image: work.image,
      title: work.title,
    },
    {
      id: 2,
      image: "/products/product-2.webp",
      title: "Construction Process",
    },
    {
      id: 3,
      image: "/products/product-3.webp",
      title: "Finished Project",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-100 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-5 py-2">

            <Images
              size={18}
              style={{
                color: work.color,
              }}
            />

            <span
              className="text-sm font-semibold uppercase tracking-[2px]"
              style={{
                color: work.color,
              }}
            >
              Project Gallery
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">

            Real Project Applications

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Explore real-world implementation of our
            construction chemical solutions in the
            {` ${industry.name} `}
            industry.

          </p>

        </motion.div>

        {/* Gallery */}

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Large Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .7,
            }}
            viewport={{
              once: true,
            }}
            className="lg:col-span-2"
          >

            <div
              onClick={() =>
                setSelectedImage(gallery[0])
              }
              className="group relative h-[520px] cursor-pointer overflow-hidden rounded-[30px]"
            >

              <img
                src={gallery[0].image}
                alt={gallery[0].title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">

                <h3 className="text-3xl font-black text-white">

                  {gallery[0].title}

                </h3>

                <p className="mt-3 text-white/80">

                  Click to view full image

                </p>

              </div>

              <div
                className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-full text-white backdrop-blur-xl"
                style={{
                  background: `${work.color}90`,
                }}
              >

                <Expand size={24} />

              </div>

            </div>

          </motion.div>

          {/* Right Images */}

          <div className="space-y-6">

            {gallery.slice(1).map((item, index) => (

              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
                viewport={{
                  once: true,
                }}
                onClick={() =>
                  setSelectedImage(item)
                }
                className="group relative h-[247px] cursor-pointer overflow-hidden rounded-[30px]"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <h4 className="text-xl font-bold text-white">

                    {item.title}

                  </h4>

                </div>

                <div
                  className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full text-white"
                  style={{
                    background: `${work.color}90`,
                  }}
                >

                  <Expand size={18} />

                </div>

              </motion.div>

            ))}

          </div>

        </div>

              {/* ================= Lightbox ================= */}

      {selectedImage && (
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
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-md"
        >
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl"
          >
            {/* Close Button */}

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-4 -top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-800 shadow-xl transition hover:rotate-90"
            >
              ✕
            </button>

            {/* Image */}

            <div className="overflow-hidden rounded-[30px] bg-white shadow-2xl">

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[80vh] w-full object-contain bg-slate-100"
              />

              <div className="border-t border-slate-200 p-8">

                <h3
                  className="text-3xl font-black"
                  style={{
                    color: work.color,
                  }}
                >
                  {selectedImage.title}
                </h3>

                <p className="mt-4 max-w-3xl leading-8 text-slate-600">

                  This project demonstrates the practical application of our
                  premium construction chemical solutions in the{" "}
                  <strong>{industry.name}</strong> industry, ensuring
                  long-lasting durability, superior bonding, structural
                  protection and outstanding performance.

                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>
      )}

    </div>

  </section>
);

};

export default WorkGallery;