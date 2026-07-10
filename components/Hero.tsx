"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Star, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  // Đảm bảo không bị lỗi undefined khi chưa đồng bộ xong dữ liệu ngôn ngữ
  if (!t || !t.hero) return null;

  return (
    <section
      style={{ colorScheme: "only light" }}
      className="relative w-full max-w-full pt-24 md:pt-28 pb-10 flex items-start overflow-hidden bg-gradient-to-br from-secondary/40 via-white to-white box-border z-10"
    >
      {/* BACKGROUND GRAPHIC (Trang trí nhẹ góc nền để không bị đơn điệu) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* CONTAINER CHÍNH CHIA 2 CỘT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center box-border">
        {/* ================= CỘT TRÁI: KHỐI CHỮ & THỐNG KÊ ================= */}
        <motion.div
          className="w-full flex flex-col items-start justify-center box-border"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge nhỏ */}
          <div className="mb-4 w-full">
            <p className="uppercase tracking-widest text-primary font-bold text-xs sm:text-sm whitespace-normal">
              {t.hero.badge}
            </p>
            <div className="w-16 h-1 bg-primary rounded-full mt-2" />
          </div>

          {/* Tiêu đề chính */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight pb-4 tracking-tight text-gray-950 w-full break-words">
            {t.hero.title.line1}
            <span className="text-primary block mt-2 font-black break-words">
              {t.hero.title.highlight}
            </span>
          </h1>

          {/* Đoạn văn mô tả */}
          <p className="w-full lg:max-w-[90%] text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 mb-8 text-justify break-words">
            {t.hero.description}
          </p>

          {/* CỤM THẺ THỐNG KÊ */}
          <motion.div
            className="w-full max-w-xs sm:max-w-md space-y-3.5"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { delayChildren: 0.3, staggerChildren: 0.1 },
              },
            }}
          >
            {[
              { icon: Users, data: t.hero.stats.students },
              { icon: Star, data: t.hero.stats.rating },
              { icon: GraduationCap, data: t.hero.stats.experience },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-3.5 flex items-center gap-4 w-full box-border"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary w-5.5 h-5.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-primary font-black text-lg sm:text-xl leading-none">
                      {card.data.value}
                      {card.data.suffix}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1.5 font-semibold truncate">
                      {card.data.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ================= CỘT PHẢI: KHUNG CHỨA ẢNH NGHỆ THUẬT ================= */}
        <motion.div
          className="w-full flex items-center justify-center box-border relative hidden md:flex"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          {/* 1. KHUNG ĐỆM NỀN TRANG TRÍ */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-primary/20 to-secondary/30 rounded-[2.5rem] transform rotate-2 scale-[1.01] -z-10 hidden sm:block" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-20 hidden lg:block transform -rotate-6" />

          {/* 2. KHUNG CHỨA ẢNH CHÍNH (Giữ nguyên tỉ lệ và phóng to scale-120) */}
          <div className="relative w-full max-w-lg md:max-w-full aspect-[4/3] sm:aspect-[1.1/1] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
            <Image
              src="/images/hero-bg.png"
              alt="Lavie's Home English Center Class"
              fill
              priority
              className="object-cover object-right scale-120 transition duration-700 ease-out"
            />
          </div>

          {/* 3. ĐIỂM NHẤN MINI CARD */}
          <motion.div
            className="absolute -bottom-5 right-4 bg-primary text-white px-5 py-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 border border-white/20"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">
              Admission Open 2026
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
