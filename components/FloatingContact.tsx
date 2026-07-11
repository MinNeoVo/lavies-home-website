"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingContact() {
  const { t } = useLanguage();

  const contacts = [
    {
      label: t.floatingContact.messenger,
      href: "https://m.me/ByTeacherTom",
      icon: (
        <FaFacebookMessenger className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
      ),
      color: "bg-[#0084FF]",
    },
    {
      label: t.floatingContact.zalo,
      href: "https://zalo.me/0355597146",
      icon: <SiZalo className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      color: "bg-[#0068FF]",
    },
    {
      label: t.floatingContact.phone,
      value: t.floatingContact.phoneNumber,
      href: `tel:${t.floatingContact.phoneNumber.replace(/\s/g, "")}`,
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      color: "bg-primary",
    },
  ];

  return (
    <div className="fixed right-3 bottom-5 sm:right-6 sm:bottom-8 z-[999] flex flex-col items-end gap-3 sm:gap-4">
      {contacts.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: index * 0.15,
          }}
          className="relative group flex items-center"
        >
          {" "}
          {/* Tooltip */}
          <div
            className="
              absolute
              right-full
              mr-3
              whitespace-nowrap
              rounded-full
              bg-white
              border
              border-gray-200
              px-4
              py-2
              text-sm
              font-medium
              text-gray-700
              shadow-lg
              opacity-0
              translate-x-3
              pointer-events-none
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:translate-x-0
            "
          >
            {item.value ?? item.label}
          </div>
          {/* Icon */}
          <motion.a
            href={item.href}
            target={
              item.label !== t.floatingContact.phone ? "_blank" : undefined
            }
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 4,
            }}
            className="relative z-10"
          >
            <div
              className={`
                ${item.color}
                w-12 h-12
                sm:w-14 sm:h-14
                lg:w-16 lg:h-16
                rounded-full
                shadow-xl
                flex
                items-center
                justify-center
                text-white
                transition-shadow
                duration-300
                hover:shadow-2xl
              `}
            >
              {item.icon}
            </div>
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}
