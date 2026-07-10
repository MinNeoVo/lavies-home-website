"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock3 } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  if (!t || !t.contact) {
    return null;
  }

  const { section, cards, buttons, note } = t.contact;

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-[#F8FAF8] to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.25em] text-primary text-xs sm:text-sm font-semibold">
            {section.badge}
          </p>

          <div className="w-16 sm:w-20 h-1 bg-primary rounded-full mx-auto mt-4 mb-6 sm:mb-8" />

          {/* 🛠️ RESPONSIVE TEXT: Chỉnh size chữ linh hoạt theo từng màn hình tránh tràn dòng */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] tracking-tight">
            {section.title.line1}
            <br />
            <span className="text-primary">{section.title.highlight}</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed sm:leading-8">
            {section.description}
          </p>
        </motion.div>

        {/* Content Container */}
        {/* 🛠️ FIX RESPONSIVE GRID: grid-cols-1 cho mobile, lg:grid-cols-2 cho màn hình máy tính. Gap tự co dãn */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16 md:mt-20 items-stretch box-border w-full">
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl shadow-xl w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[550px] bg-gray-100 flex-shrink-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8185724439527!2d106.6835232!3d10.8251922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529df7caf60e7%3A0xa23b99fef494ab21!2sENGLISH%20AT%20LAVIE&#39;S%20HOME!5e0!3m2!1svi!2s!4v1783649141231!5m2!1svi!2s"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0 w-full h-full"
              title="Lavie's Home Google Map"
            />
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col justify-between w-full box-border"
          >
            {/* List thông tin liên hệ */}
            <div className="space-y-6 sm:space-y-8">
              {/* Address */}
              <div className="flex gap-4 sm:gap-5 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900">
                    {cards.address.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1.5 leading-relaxed sm:leading-7 whitespace-pre-line">
                    {cards.address.detail}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 sm:gap-5 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900">
                    {cards.phone.title}
                  </h3>
                  <a
                    href="tel:0355597146"
                    className="inline-block text-gray-600 hover:text-primary text-sm sm:text-base mt-1.5 transition font-medium"
                  >
                    0355597146
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 sm:gap-5 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900">
                    {cards.email.title}
                  </h3>
                  <a
                    href="mailto:phuongvo962@gmail.com"
                    className="inline-block text-gray-600 hover:text-primary text-sm sm:text-base mt-1.5 transition break-all font-medium"
                  >
                    phuongvo962@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex gap-4 sm:gap-5 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock3 className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900">
                    {cards.workingTime.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1.5 whitespace-pre-line leading-relaxed sm:leading-7">
                    {cards.workingTime.detail}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Facebook Button */}
            <div className="mt-8 sm:mt-10 md:mt-12 space-y-4">
              <a
                href="https://www.facebook.com/ByTeacherTom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 border border-primary text-primary py-3.5 sm:py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition text-sm sm:text-base box-border"
              >
                <FaFacebook className="w-5 h-5 flex-shrink-0" />
                {buttons.facebook}
              </a>
              <p className="mt-4 text-center text-xs sm:text-sm text-gray-500 leading-normal">
                {note}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
