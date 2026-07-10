import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lavie's Home - Learn English, Grow With Confidence",
  description:
    "High-quality English classes for children, students and adults in a supportive, motivating and professional environment.",

  icons: {
    icon: "/images/logo.png",
  },

  other: {
    "color-scheme": "light",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#1b6f3c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body className="bg-white text-gray-900 font-sans antialiased overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
