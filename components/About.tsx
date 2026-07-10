"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 lg:py-24 bg-gradient-to-b from-[#F8FAF8] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl h-[420px] lg:h-[500px]">
              <Image
                src="/images/about-main.jpg"
                alt="Lavie's Home"
                width={700}
                height={700}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {/* Badge */}

            <p className="uppercase tracking-[0.25em] text-primary font-semibold text-sm">
              {t.about.badge}
            </p>

            {/* Line */}

            <div className="w-20 h-1 bg-primary rounded-full mt-3 mb-8"></div>

            {/* Heading */}

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              {t.about.title.line1}
              <br />

              <span className="text-primary">{t.about.title.highlight}</span>
            </h2>

            {/* Description */}

            <p className="mt-8 text-lg text-gray-600 leading-8">
              {t.about.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
