"use client";

import { motion } from "framer-motion";
import { Star, Quote, Users, Heart } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext"; // Hãy sửa lại đường dẫn này cho đúng với cấu trúc dự án của bạn

// Bản đồ ánh xạ string thành Component Lucide Icon
const iconMap: Record<string, React.ComponentType<any>> = {
  Users: Users,
  Star: Star,
  Heart: Heart,
};

interface StatItem {
  iconName: string;
  number: string;
  label: string;
}

interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  review: string;
}

export default function TestimonialSection() {
  const { t } = useLanguage();

  if (!t || !t.testimonials) {
    return null;
  }

  const { section, stats, list: testimonialList } = t.testimonials;

  return (
    <section
      id="testimonials"
      className="py-28 bg-gradient-to-b from-secondary to-[#F8FAF8]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.25em] text-primary font-semibold">
            {section.badge}
          </p>

          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-4 mb-8" />

          <h2 className="text-5xl font-bold leading-[1.15] tracking-tight">
            {section.title.line1}
            <br />
            <span className="text-primary">{section.title.highlight}</span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            {section.description}
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {stats.map((item: StatItem, index: number) => {
            const Icon = iconMap[item.iconName] || Users;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -6,
                }}
                className="bg-white rounded-3xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-4xl font-bold text-primary mt-6">
                  {item.number}
                </h3>

                <p className="mt-2 text-gray-600">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Reviews */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {testimonialList.map((item: TestimonialItem, index: number) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <Quote className="w-12 h-12 text-primary" />

              <div className="flex mt-4 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-gray-600 leading-8 italic">"{item.review}"</p>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
