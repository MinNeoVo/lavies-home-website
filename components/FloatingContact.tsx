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
      icon: <FaFacebookMessenger size={28} />,
      color: "bg-[#0084FF]",
    },
    {
      label: t.floatingContact.zalo,
      href: "https://zalo.me/0355597146",
      icon: <SiZalo size={28} />,
      color: "bg-[#0068FF]",
    },
    {
      label: t.floatingContact.phone,
      value: t.floatingContact.phoneNumber,
      href: `tel:${t.floatingContact.phoneNumber.replace(/\s/g, "")}`,
      icon: <Phone size={28} />,
      color: "bg-primary",
    },
  ];

  return (
    <div className="fixed right-6 bottom-8 z-[999] flex flex-col items-end gap-4">
      {contacts.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          target={item.label !== t.floatingContact.phone ? "_blank" : undefined}
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: index * 0.15,
          }}
          className="group flex items-center"
        >
          {/* Tooltip */}

          <div
            className="
              mr-3
              whitespace-nowrap
              rounded-full
              bg-white
              border
              border-gray-200
              px-5
              py-3
              text-gray-700
              shadow-lg
              opacity-0
              translate-x-4
              group-hover:translate-x-0
              group-hover:opacity-100
              transition-all
              duration-300
              pointer-events-none
            "
          >
            {item.value ?? item.label}
          </div>

          {/* Icon */}

          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 4,
            }}
            whileHover={{
              scale: 1.08,
            }}
            className={`
              ${item.color}
               w-12 h-12
  sm:w-14 sm:h-14
  lg:w-16 lg:h-16
  rounded-full
  shadow-lg
  flex
  items-center
  justify-center
  text-white
            `}
          >
            {item.icon}
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
}
