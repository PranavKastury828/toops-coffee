"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MenuSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const menuItems = [
    {
      name: "Pour-over",
      price: "₹210",
      image: "/images/menu-item.jpg",
      description:
        "Hand-crafted, single-origin coffee brewed with precision. Notes of caramel and dark chocolate with a clean finish.",
    },
    {
      name: "Cortada",
      price: "₹170",
      image: "/images/menu-item.jpg",
      description:
        "Equal parts espresso and steamed milk, creating a perfect balance of bold coffee and creamy texture.",
    },
    {
      name: "Vietnamese Coffee",
      price: "₹220",
      image: "/images/menu-item.jpg",
      description:
        "Rich dark roast coffee brewed with condensed milk, served hot or over ice for a sweet and strong experience.",
    },
    {
      name: "Bagel with Cream Cheese",
      price: "₹170",
      image: "/images/menu-item.jpg",
      description:
        "Freshly baked bagel served with whipped cream cheese. Choice of plain or toasted.",
    },
    {
      name: "Almond Biscotti",
      price: "₹60",
      image: "/images/menu-item.jpg",
      description:
        "Twice-baked Italian cookie with roasted almonds. Perfect companion for your coffee.",
    },
  ];

  if (!mounted) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Container */}
        <div className="flex flex-col lg:flex-row">
          {/* First Column */}
          <motion.div
            className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {menuItems.slice(0, 3).map((item, index) => (
              <MenuItem key={item.name} item={item} index={index} />
            ))}
          </motion.div>

          {/* Divider - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

          {/* Mobile Divider */}
          <div className="w-full h-px lg:hidden bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

          {/* Second Column */}
          <motion.div
            className="w-full lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {menuItems.slice(3).map((item, index) => (
              <MenuItem key={item.name} item={item} index={index + 3} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({ item, index }) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 last:mb-0 group "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative w-full sm:w-32 h-48 sm:h-32 flex-shrink-0">
        <div className="rounded-lg overflow-hidden w-full h-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 128px, 128px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-comfortaa font-bold text-gray-900 mb-2 duration-300 group-hover:text-[#FA932F]">
          {item.name}
        </h3>
        <p className="text-gray-600 font-raleway text-sm sm:text-base mb-3">
          {item.description}
        </p>
        <p className="text-[#FA932F] font-comfortaa text-xl sm:text-2xl font-bold">
          {item.price}
        </p>
      </div>
    </motion.div>
  );
};

export default MenuSection;
