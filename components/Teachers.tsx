"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext"; // Sửa lại đường dẫn này cho đúng với cấu trúc thư mục của bạn
import {
  X,
  CheckCircle,
  IdCard,
  BookOpen,
  Award,
  Briefcase,
} from "lucide-react";

interface TeacherItem {
  id: number;
  name: string;
  certificate: string;
  experience: string;
  specialty: string;
  image: string;
  profile: string;
}

type ProfileModal = {
  name: string;
  profile: string;
};

export default function Teachers() {
  const { t } = useLanguage();
  const [selectedTeacher, setSelectedTeacher] = useState<ProfileModal | null>(
    null,
  );

  if (!t || !t.teachers) {
    return null;
  }

  const {
    section,
    founder,
    cards,
    buttons,
    modal,
    teachers: teacherList,
  } = t.teachers;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTeacher(null);
    };

    if (selectedTeacher) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [selectedTeacher]);

  return (
    <section
      id="teachers"
      className="py-28 bg-gradient-to-b from-secondary to-white"
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
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-4 mb-8"></div>
          <h2 className="text-5xl font-bold leading-tight">
            {section.title.line1}
            <br />
            <span className="text-primary">{section.title.highlight}</span>
          </h2>
          <p className="mt-8 text-lg text-gray-600 leading-8">
            {section.description}
          </p>
        </motion.div>

        {/* Founder */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-xl h-[325px] sm:h-[450px] lg:h-[600px] w-full">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold">
              {founder.badge}
            </span>
            <h3 className="text-5xl font-bold mt-6">{founder.name}</h3>
            <p className="text-primary font-semibold mt-2">{founder.role}</p>
            <p className="mt-8 text-lg text-gray-600 leading-8">
              {founder.description}
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              {founder.achievements.map((item: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-primary mt-1 w-5 h-5 flex-shrink-0" />
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-12">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition text-center min-w-[140px]"
              >
                {buttons.contact}
              </a>
              <button
                onClick={() =>
                  setSelectedTeacher({
                    name: founder.name,
                    profile: founder.profile,
                  })
                }
                className="border border-primary text-primary px-8 py-4 rounded-full flex items-center gap-2 hover:bg-primary hover:text-white transition"
              >
                <IdCard size={18} />
                {buttons.viewProfile}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Teacher Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-20 md:mt-28">
          {teacherList.map((teacher: TeacherItem, index: number) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition flex flex-col box-border h-full"
            >
              <div className="relative w-full aspect-[4/3] bg-white overflow-hidden block flex-shrink-0 isolation-isolate rounded-t-3xl">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                  className="absolute inset-0 w-full h-full object-cover object-top scale-[1.02] hover:scale-108 transition-transform duration-500 will-change-transform"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              {/* Khối chữ bên dưới */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  <h3 className="text-2xl font-bold text-primary">
                    {teacher.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">
                          {cards.certificate}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                          {teacher.certificate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">
                          {cards.experience}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                          {teacher.experience}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">
                          {cards.specialty}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                          {teacher.specialty}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nút Xem thông tin cố định ở dưới */}
                <div className="pt-6 mt-6 border-t border-gray-50">
                  <button
                    onClick={() =>
                      setSelectedTeacher({
                        name: teacher.name,
                        profile: teacher.profile,
                      })
                    }
                    className="w-full py-3 rounded-full bg-primary text-white font-semibold hover:bg-green-700 transition text-sm sm:text-base"
                  >
                    {buttons.viewProfile}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Profile Viewer */}
      <AnimatePresence>
        {selectedTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeacher(null)}
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex justify-center items-center max-w-2xl "
            >
              <button
                onClick={() => setSelectedTeacher(null)}
                title={modal.close}
                className="absolute top-3 right-3 z-50 w-11 h-11 rounded-full bg-white/90 backdrop-blur shadow-lg hover:scale-110 transition flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              <Image
                src={selectedTeacher.profile}
                alt={selectedTeacher.name}
                width={700}
                height={1200}
                className="w-full max-h-[85vh] object-contain rounded-3xl shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
