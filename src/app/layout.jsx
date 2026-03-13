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

const isProd = process.env.NODE_ENV === 'production';
const BASE_PATH = isProd ? '/Portfolio' : '';

export const metadata = {
  title: "Jethro's Portfolio",
  description: "Jethro's Portfolio",
  icons: {
    icon: `${BASE_PATH}/favicon.ico`,
    shortcut: `${BASE_PATH}/favicon.ico`,
    apple: `${BASE_PATH}/favicon.ico`,
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
