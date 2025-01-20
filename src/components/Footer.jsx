"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Coffee,
  Instagram,
  MapPin,
  Phone,
  Clock,
  CupSoda,
  Soup,
  Coffee as CoffeeBean,
  CakeSlice,
  UtensilsCrossed,
  ChefHat,
} from "lucide-react";

const FloatingCoffeeIcon = ({ Icon, rotation, delay, scale, className }) => (
  <motion.div
    className={`absolute hidden sm:block ${className}`}
    initial={{ rotate: rotation, scale: scale, opacity: 0.08 }}
    animate={{
      y: [0, -20, 0],
      rotate: [rotation - 5, rotation + 5, rotation - 5],
      opacity: [0.08, 0.12, 0.08],
    }}
    transition={{
      duration: 5,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Icon className="w-12 h-12 md:w-[72px] md:h-[72px] text-[#FA932F]" />
  </motion.div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white pt-16 md:pt-24 overflow-hidden">
      {/* Gradient Border at Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-[2px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FA932F] to-transparent opacity-50" />
      </div>

      {/* Floating Coffee Icons */}
      <div className="absolute inset-x-0 top-0 h-40 pointer-events-none overflow-hidden">
        <FloatingCoffeeIcon
          Icon={Coffee}
          rotation={-15}
          delay={0}
          scale={0.8}
          className="left-[5%] top-[10%]"
        />
        <FloatingCoffeeIcon
          Icon={CupSoda}
          rotation={25}
          delay={1}
          scale={1}
          className="left-[25%] top-[20%]"
        />
        <FloatingCoffeeIcon
          Icon={CoffeeBean}
          rotation={-20}
          delay={2}
          scale={0.9}
          className="left-[45%] top-[5%]"
        />
        <FloatingCoffeeIcon
          Icon={CakeSlice}
          rotation={15}
          delay={1.5}
          scale={0.7}
          className="left-[65%] top-[15%]"
        />
        <FloatingCoffeeIcon
          Icon={ChefHat}
          rotation={-10}
          delay={0.5}
          scale={0.85}
          className="left-[85%] top-[10%]"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Logo and Brand Section */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <Link href="/">
              <motion.div
                className="relative w-20 h-20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Toops Coffee Logo"
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </motion.div>
            </Link>
            <p className="font-raleway text-gray-600 text-center lg:text-left max-w-sm">
              The neighbourhood coffee shop that broke the cookie-cutter coffee
              culture of Hyderabad.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <h3 className="text-lg font-comfortaa font-bold text-[#FA932F] mb-2">
              Contact Us
            </h3>
            <div className="space-y-3 text-center lg:text-left">
              <motion.a
                href="tel:+916305950328"
                className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 hover:text-[#FA932F] transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="font-raleway">+91 6305950328</span>
              </motion.a>
              <motion.a
                href="https://instagram.com/toops.coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 hover:text-[#FA932F] transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                <Instagram className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="font-raleway">@toops.coffee</span>
              </motion.a>
            </div>
          </div>

          {/* Hours and Location */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <h3 className="text-lg font-comfortaa font-bold text-[#FA932F] mb-2">
              Visit Us
            </h3>
            <div className="space-y-3 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="font-raleway">7 AM - 8:30 PM Daily</span>
              </div>
              <address className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 not-italic">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="font-raleway">
                  Plot no 1316/A, Rd Number 66,
                  <br />
                  Jubilee Hills, Hyderabad
                </span>
              </address>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-center font-raleway text-gray-500 text-sm pb-8">
            © {currentYear} Toops Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
