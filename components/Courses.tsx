"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const courseAssets = [
  {
    image: "/images/cambridge-bg.png",
    facebook: "https://facebook.com/ByTeacherTom",
  },
  {
    image: "/images/ielts-bg.png",
    facebook: "https://facebook.com/ByTeacherTom",
  },
  {
    image: "/images/communication-bg.png",
    facebook: "https://facebook.com/ByTeacherTom",
  },
];

export default function Courses() {
  const { t } = useLanguage();

  return (
    <section
      id="courses"
      className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.25em] text-primary font-semibold text-sm">
            {t.courses.badge}
          </p>

          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-3 mb-7"></div>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            {t.courses.title.line1}
            <br />

            <span className="text-primary">{t.courses.title.highlight}</span>
          </h2>

          <p className="mt-7 text-lg text-gray-600 leading-8">
            {t.courses.description}
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {t.courses.items.map((course: any, index: number) => {
            const asset = courseAssets[index];

            return (
              <motion.div
                key={course.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={asset.facebook}
                  target="_blank"
                  className="
                    group
                    block
                    overflow-hidden
                    rounded-3xl
                    bg-white
                    border
                    border-gray-100
                    shadow-md
                    hover:shadow-2xl
                    hover:-translate-y-3
                    transition-all
                    duration-500
                  "
                >
                  {/* Image */}

                  <div className="relative h-56 lg:h-64 overflow-hidden">
                    <Image
                      src={asset.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}

                  <div className="p-8">
                    {/* Tag */}

                    <span className="inline-flex px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5">
                      {course.tag}
                    </span>

                    {/* Title */}

                    <h3 className="text-2xl font-bold mb-4 transition-colors group-hover:text-primary">
                      {course.title}
                    </h3>

                    {/* Description */}

                    <p className="text-gray-600 leading-8 mb-8">
                      {course.description}
                    </p>

                    {/* Info */}

                    <div className="flex items-center gap-6 text-gray-500 text-sm mb-8">
                      <div className="flex items-center gap-2">
                        <Users size={18} />
                        {course.type}
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock3 size={18} />
                        {course.age}
                      </div>
                    </div>

                    {/* Button */}

                    <div className="flex items-center font-semibold text-primary">
                      {t.courses.button}

                      <ArrowRight
                        size={20}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
