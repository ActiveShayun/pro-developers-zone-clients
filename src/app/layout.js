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
        className={`max-w-[1340px] mx-auto  bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: "#0d0f12", // Base dark background
          backgroundImage: `
    radial-gradient(ellipse at left top, rgba(0, 255, 255, 0.2), transparent 60%),
    radial-gradient(ellipse at right top, rgba(0, 255, 255, 0.2), transparent 60%)
  `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 40%",
          backgroundPosition: "left top, right top"
        }}





      >
        <Navbar />
        {children}
      </body>
    </html >
  );
}
