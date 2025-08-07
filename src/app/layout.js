import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pro Developer Zone",
  description: "Let's Connects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`max-w-7xl mx-auto bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
