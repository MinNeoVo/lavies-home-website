"use client";
import Navbar from "@/components/Nav";
import About from "@/components/About";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChose";
import Courses from "@/components/Courses";
import Teachers from "@/components/Teachers";
import GallerySection from "@/components/Gallery";
import TestimonialSection from "@/components/Testimonial";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // 1. Ép trình duyệt cuộn lên đầu trang ngay khi load xong
    window.scrollTo({ top: 0, behavior: "instant" });

    // 2. Tùy chọn: Xóa đoạn hash (#section-id) trên URL để URL sạch sẽ hơn
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);
  return (
    <>
      <main className="w-full max-w-full overflow-x-hidden">
        <Navbar />

        <Hero />

        <About />

        <WhyChoose />

        <Courses />

        <Teachers />

        <GallerySection />

        <TestimonialSection />

        <ContactSection />

        <Footer />
      </main>
    </>
  );
}
