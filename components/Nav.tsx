"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [openLanguage, setOpenLanguage] = useState(false);

  const languageRef = useRef<HTMLDivElement>(null);

  // Lắng nghe sự kiện click bên ngoài để đóng dropdown ngôn ngữ
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setOpenLanguage(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "about", href: "#about" },
    { label: "courses", href: "#courses" },
    { label: "teachers", href: "#teachers" },
    { label: "gallery", href: "#gallery" },
    { label: "testimonials", href: "#testimonials" },
    { label: "contact", href: "#contact" },
  ];

  if (!t || !t.navbar) return null;

  return (
    <>
      {/* THANH NAV MẶC ĐỊNH: Luôn đổ màu nền và bo mờ shadow cao cấp */}
      <nav className="fixed top-0 left-0 right-0 w-full h-16 bg-primary/90 backdrop-blur-xl shadow-lg border-b border-white/10 z-[100] box-border">
        <div className="w-full max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between box-border">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-2 sm:gap-3 min-w-0 overflow-hidden flex-shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="Lavie's Home"
              width={42}
              height={42}
              className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0"
            />
            <div className="min-w-0 flex flex-col justify-center">
              <h1 className="font-bold text-sm sm:text-base lg:text-xl truncate text-white">
                Lavie's Home
              </h1>
              <p className="tracking-widest font-semibold text-[8px] sm:text-[10px] uppercase truncate text-white/80">
                A HOME TO GROW IN ENGLISH
              </p>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-8 flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold text-white transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                {t.navbar[item.label]}
              </Link>
            ))}
          </div>

          {/* Góc phải */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Bộ chọn ngôn ngữ */}
            <div className="relative z-[110]" ref={languageRef}>
              <button
                onClick={() => setOpenLanguage(!openLanguage)}
                className="flex items-center gap-1 sm:gap-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-primary px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300"
              >
                <span className="text-sm sm:text-base">
                  {language === "vi" ? "🇻🇳" : "🇺🇸"}
                </span>
                <span className="hidden sm:inline">
                  {language === "vi" ? "Tiếng Việt" : "English"}
                </span>
                <span className="inline sm:hidden uppercase text-[11px] font-semibold">
                  {language === "vi" ? "VI" : "EN"}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${openLanguage ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu Ngôn ngữ */}
              <div
                className={`absolute right-0 mt-3 w-40 sm:w-48 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top z-[120] ${
                  openLanguage
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                }`}
              >
                <button
                  onClick={() => {
                    setLanguage("vi");
                    setOpenLanguage(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 text-sm transition hover:bg-primary/10 ${language === "vi" ? "bg-primary/5 text-primary font-semibold" : "text-gray-700"}`}
                >
                  <span>🇻🇳</span> <span>Tiếng Việt</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    setOpenLanguage(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 text-sm transition hover:bg-primary/10 ${language === "en" ? "bg-primary/5 text-primary font-semibold" : "text-gray-700"}`}
                >
                  <span>🇺🇸</span> <span>English</span>
                </button>
              </div>
            </div>

            {/* Nút Hamburger (Mobile) */}
            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="p-1.5 sm:p-2 rounded-lg lg:hidden transition-colors duration-300 text-white hover:bg-white/10"
            >
              {isOpenMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed inset-0 top-16 z-[90] bg-primary/95 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col items-center justify-start pt-12 space-y-6 w-full max-w-full overflow-hidden ${
          isOpenMenu
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpenMenu(false)}
            className="text-white text-lg font-medium tracking-wide active:text-white/70 py-2 w-3/4 text-center border-b border-white/5"
          >
            {t.navbar[item.label]}
          </Link>
        ))}
      </div>
    </>
  );
}
