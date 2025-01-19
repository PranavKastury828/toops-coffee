// src/app/layout.jsx
import React from "react";
import { Raleway, Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

export const metadata = {
  title: "Toops Coffee",
  description:
    "The neighbourhood coffee shop that broke the cookie-cutter coffee culture of Hyderabad.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${raleway.variable} ${comfortaa.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
