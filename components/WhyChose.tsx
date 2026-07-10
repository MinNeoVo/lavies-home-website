"use client";

import { Users, GraduationCap, BookOpen, HeartHandshake } from "lucide-react";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Users, GraduationCap, BookOpen, HeartHandshake];

export default function WhyChooseSection() {
  const { t } = useLanguage();

  return (
    <section
      id="why-us"
      className="py-20 lg:py-24 bg-gradient-to-b from-[#F8FAF8] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="uppercase tracking-[0.25em] text-primary font-semibold text-sm">
            {t.whyChoose.badge}
          </p>

          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-3 mb-8"></div>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            {t.whyChoose.title.line1}
            <br />

            <span className="text-primary">{t.whyChoose.title.highlight}</span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            {t.whyChoose.description}
          </p>
        </motion.div>

        {/* Features */}

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
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
          {t.whyChoose.items.map((item: any, index: number) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={index}
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
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-md
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  text-center
                "
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-4">{item.title}</h3>

                <p className="text-gray-600 leading-7 text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
