import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Jethro's Portfolio",
  description: "Jethro's Portfolio",
  icons: {
    icon: "/Portfolio/giraffe_pfp.jpg",
    shortcut: "/Portfolio/giraffe_pfp.jpg",
    apple: "/Portfolio/giraffe_pfp.jpg",
  },
};

import { SmoothScroll } from "@/app/components/core/smooth-scroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
