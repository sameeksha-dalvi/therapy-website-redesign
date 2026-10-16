import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const muli = localFont({
  src: "./fonts/Muli.woff2",
  variable:"--font-muli",
})


const caveat = localFont({
  src: "./fonts/Caveat-Regular.woff2",
  variable:"--font-caveat",
})

const beaufortPro = localFont({
  src: "./fonts/FONTSPRINGDEMO-BeaufortProRegular.woff2",
  variable:"--font-beaufortPro",
})

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica, CA",
  description: "Dr. Maya Reynolds offers individual therapy for adults navigating anxiety, trauma, panic, and burnout. In-person sessions in Santa Monica and online therapy across California.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${muli.variable} ${caveat.variable} ${beaufortPro.variable} scroll-smooth`}
    >
      <body  className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
