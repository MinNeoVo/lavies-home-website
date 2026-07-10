"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const galleryAssets = [
  { id: 1, src: "/images/gallery/gallery1.jpg" },
  { id: 2, src: "/images/gallery/gallery2.jpg" },
  { id: 3, src: "/images/gallery/gallery3.jpg" },
  { id: 4, src: "/images/gallery/gallery4.jpg" },
  { id: 5, src: "/images/gallery/gallery5.jpg" },
];

export default function GallerySection() {
  const { t } = useLanguage();

  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryAssets)[0] | null
  >(null);

  const selectedIndex = useMemo(() => {
    if (!selectedImage) return -1;

    return galleryAssets.findIndex((item) => item.id === selectedImage.id);
  }, [selectedImage]);

  return (
    <>
      <section
        id="gallery"
        className="overflow-hidden bg-gradient-to-b from-white to-[#F8FAF8] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              {t.gallery.badge}
            </p>

            <div className="mx-auto mt-4 mb-8 h-1 w-20 rounded-full bg-primary" />

            <h2 className="text-4xl font-bold leading-[1.15] tracking-tight lg:text-5xl">
              {t.gallery.title.line1}
              <br />
              <span className="text-primary">{t.gallery.title.highlight}</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              {t.gallery.description}
            </p>
          </motion.div>

          {/* Gallery Grid */}

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-120px",
            }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-4"
          >
            {" "}
            {/* Large Image */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={() => setSelectedImage(galleryAssets[0])}
              className="group relative h-[320px] cursor-pointer overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 lg:h-[520px]"
            >
              <Image
                src={galleryAssets[0].src}
                alt={t.gallery.images[0].alt}
                fill
                priority
                sizes="(max-width:768px)100vw,50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="absolute bottom-8 left-8 opacity-0 transition duration-300 group-hover:opacity-100">
                <h3 className="text-2xl font-bold text-white">
                  {t.gallery.images[0].title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-white/90">
                  {t.gallery.viewImage}
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
            {/* Small Images */}
            {galleryAssets.slice(1).map((image, index) => (
              <motion.div
                key={image.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                onClick={() => setSelectedImage(image)}
                className="group relative h-[240px] cursor-pointer overflow-hidden rounded-3xl lg:h-[248px]"
              >
                <Image
                  src={image.src}
                  alt={t.gallery.images[index + 1].alt}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1200px)33vw,25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-6 left-6 opacity-0 transition duration-300 group-hover:opacity-100">
                  <h3 className="font-semibold text-white">
                    {t.gallery.images[index + 1].title}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm text-white/90">
                    {t.gallery.viewImage}
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}

          <div className="mt-16 flex justify-center">
            <a
              href="https://facebook.com/ByTeacherTom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105 hover:shadow-xl"
            >
              {t.gallery.button}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>{" "}
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{
                scale: 0.92,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center"
            >
              {/* Close */}

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:scale-110"
              >
                <X className="h-5 w-5 text-gray-800" />
              </button>

              {/* Image */}

              <Image
                src={selectedImage.src}
                alt={
                  selectedIndex >= 0 ? t.gallery.images[selectedIndex].alt : ""
                }
                width={1200}
                height={800}
                loading="eager"
                className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />

              {/* Caption */}

              {selectedIndex >= 0 && (
                <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/80 via-black/40 to-transparent px-8 py-7">
                  <h3 className="text-2xl font-bold text-white">
                    {t.gallery.images[selectedIndex].title}
                  </h3>

                  <p className="mt-1 text-white/80">
                    {t.gallery.images[selectedIndex].alt}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
