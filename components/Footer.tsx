"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext"; // Hãy sửa lại đường dẫn nếu cần

interface NavItem {
  title: string;
  href: string;
}

export default function Footer() {
  const { t } = useLanguage();

  // Ngăn chặn crash giao diện nếu context chưa kịp tải hoặc thiếu data
  if (!t || !t.footer) {
    return null;
  }

  // Phân tách dữ liệu từ nhánh footer của file JSON
  const { slogan, description, titles, navigation, courses, address, rights } =
    t.footer;

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Logo & Intro */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Lavie's Home"
                width={60}
                height={60}
              />
              <div>
                <h2 className="font-bold text-xl">Lavie's Home</h2>
                <p className="text-sm opacity-80">{slogan}</p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-white/90">{description}</p>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/ByTeacherTom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://m.me/ByTeacherTom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors duration-300"
              >
                <FaFacebookMessenger />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6">{titles.navigation}</h3>
            <div className="space-y-4">
              {navigation.map((item: NavItem) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-2 text-white hover:-translate-y-1 transition-all duration-300 w-fit"
                >
                  <ChevronRight size={16} />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6">{titles.courses}</h3>
            <div className="space-y-4">
              {courses.map((item: string) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-white/90"
                >
                  <ChevronRight size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">{titles.contact}</h3>
            <div className="space-y-6">
              <div className="flex gap-3">
                <MapPin className="text-white mt-1 flex-shrink-0" size={20} />
                <p className="text-white/90 leading-7 whitespace-pre-line">
                  {address}
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-white mt-1 flex-shrink-0" size={20} />
                <a
                  href="tel:0355597146"
                  className="text-white hover:-translate-y-1 transition-all duration-300 inline-block"
                >
                  0355597146
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-white mt-1 flex-shrink-0" size={20} />
                <a
                  href="mailto:phuongvo962@gmail.com"
                  className="text-white hover:-translate-y-1 transition-all duration-300 inline-block"
                >
                  phuongvo962@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} {rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
