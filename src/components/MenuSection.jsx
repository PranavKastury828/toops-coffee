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
      name: "Espresso Hot",
      image: "/images/menu-item.jpg",
      description: "A bold and rich shot of pure coffee goodness.",
    },
    {
      name: "Espresso Iced",
      image: "/images/menu-item.jpg",
      description: "The classic espresso served chilled for a refreshing kick.",
    },
    {
      name: "Macchiato Hot",
      image: "/images/menu-item.jpg",
      description:
        "Espresso topped with a delicate dollop of steamed milk foam.",
    },
    {
      name: "Macchiato Iced",
      image: "/images/menu-item.jpg",
      description:
        "A cool take on the macchiato with chilled espresso and foam.",
    },
    {
      name: "Long Black Hot",
      image: "/images/menu-item.jpg",
      description: "A robust and flavorful espresso with added hot water.",
    },
    {
      name: "Long Black Iced",
      image: "/images/menu-item.jpg",
      description: "Chilled long black for a smooth and invigorating sip.",
    },
    {
      name: "Cortado Hot",
      image: "/images/menu-item.jpg",
      description:
        "Equal parts espresso and steamed milk for a balanced flavor.",
    },
    {
      name: "Cortado Iced",
      image: "/images/menu-item.jpg",
      description: "The perfect harmony of espresso and cold milk over ice.",
    },
    {
      name: "Flat White Hot",
      image: "/images/menu-item.jpg",
      description: "Velvety steamed milk poured over a rich shot of espresso.",
    },
    {
      name: "Flat White Iced",
      image: "/images/menu-item.jpg",
      description: "Silky smooth iced coffee with a creamy milk finish.",
    },
    {
      name: "Latte Hot",
      image: "/images/menu-item.jpg",
      description:
        "Espresso mixed with steamed milk and topped with light foam.",
    },
    {
      name: "Latte Iced",
      image: "/images/menu-item.jpg",
      description: "A cool and creamy latte perfect for any day.",
    },
    {
      name: "Cappuccino Hot",
      image: "/images/menu-item.jpg",
      description: "A frothy and delightful blend of espresso, milk, and foam.",
    },
    {
      name: "Cappuccino Iced",
      image: "/images/menu-item.jpg",
      description:
        "The iced version of the classic cappuccino with a creamy texture.",
    },
    {
      name: "Mocha Hot",
      image: "/images/menu-item.jpg",
      description:
        "A rich combination of espresso, chocolate, and steamed milk.",
    },
    {
      name: "Mocha Iced",
      image: "/images/menu-item.jpg",
      description: "Chilled espresso paired with chocolate and cold milk.",
    },
    {
      name: "Cold Brew",
      image: "/images/menu-item.jpg",
      description: "Smooth and refreshing coffee steeped cold for hours.",
    },
    {
      name: "Aerocon",
      image: "/images/menu-item.jpg",
      description: "A precise and aromatic brew using the Aeropress method.",
    },
    {
      name: "Manual Coffee Hot",
      image: "/images/menu-item.jpg",
      description: "Handcrafted coffee brewed with care and precision.",
    },
    {
      name: "Manual Coffee Iced",
      image: "/images/menu-item.jpg",
      description:
        "Expertly brewed coffee served cold for ultimate refreshment.",
    },
    {
      name: "Oops Toops Hot",
      image: "/images/menu-item.jpg",
      description: "A fun and flavorful hot coffee with a unique twist.",
    },
    {
      name: "Ooops Toops Iced",
      image: "/images/menu-item.jpg",
      description: "The iced version of Oops Toops with a cool, quirky touch.",
    },
    {
      name: "Toops Supreme Hot",
      image: "/images/menu-item.jpg",
      description: "A luxurious and indulgent coffee experience in every sip.",
    },
    {
      name: "Toops Supreme Iced",
      image: "/images/menu-item.jpg",
      description: "Supremely satisfying iced coffee with a bold flavor.",
    },
    {
      name: "Vietnamese Hot",
      image: "/images/menu-item.jpg",
      description: "Sweet and strong Vietnamese coffee served warm.",
    },
    {
      name: "Vietnamese Iced",
      image: "/images/menu-item.jpg",
      description: "Classic Vietnamese coffee served chilled and sweetened.",
    },
    {
      name: "Mazagran",
      image: "/images/menu-item.jpg",
      description:
        "A refreshing blend of coffee and citrus, perfect for hot days.",
    },
    {
      name: "Cascara",
      image: "/images/menu-item.jpg",
      description: "A unique coffee cherry tea with fruity and floral notes.",
    },
    {
      name: "Coconut Coldbrew",
      image: "/images/menu-item.jpg",
      description: "Cold brew coffee infused with creamy coconut flavor.",
    },
    {
      name: "Espresso Chocolate Hot",
      image: "/images/menu-item.jpg",
      description: "A rich fusion of espresso and velvety hot chocolate.",
    },
    {
      name: "Espresso Chocolate Iced",
      image: "/images/menu-item.jpg",
      description: "Iced coffee meets indulgent chocolate for a perfect combo.",
    },
    {
      name: "Espresso Tonic",
      image: "/images/menu-item.jpg",
      description: "An adventurous mix of espresso and fizzy tonic water.",
    },
    {
      name: "Caramel Latte Hot",
      image: "/images/menu-item.jpg",
      description: "A creamy latte infused with sweet caramel flavor.",
    },
    {
      name: "Caramel Latte Iced",
      image: "/images/menu-item.jpg",
      description: "Iced latte with a delightful caramel sweetness.",
    },
    {
      name: "Cinnamon Latte Hot",
      image: "/images/menu-item.jpg",
      description: "A warm and spiced latte with a hint of cinnamon.",
    },
    {
      name: "Cinnamon Latte Iced",
      image: "/images/menu-item.jpg",
      description: "Cool latte with a subtle and fragrant cinnamon twist.",
    },
    {
      name: "Whey Coldbrew",
      image: "/images/menu-item.jpg",
      description: "Protein-packed coldbrew for an energizing boost.",
    },
    {
      name: "Babyccino",
      image: "/images/menu-item.jpg",
      description: "A caffeine-free frothy milk drink, perfect for kids.",
    },
    {
      name: "Hot Chocolate",
      image: "/images/menu-item.jpg",
      description: "Rich and creamy hot chocolate for a cozy treat.",
    },
    {
      name: "Iced Chocolate",
      image: "/images/menu-item.jpg",
      description: "A chilled chocolate drink that's irresistibly refreshing.",
    },
    {
      name: "Matcha Latte Hot",
      image: "/images/menu-item.jpg",
      description: "Earthy matcha mixed with steamed milk for a calming drink.",
    },
    {
      name: "Matcha Latte Iced",
      image: "/images/menu-item.jpg",
      description: "Cool and refreshing iced matcha latte for a zen moment.",
    },
    {
      name: "Whey Latte",
      image: "/images/menu-item.jpg",
      description: "A creamy latte enriched with protein-packed whey.",
    },
    {
      name: "Coconut Water",
      image: "/images/menu-item.jpg",
      description: "Pure and hydrating coconut water, naturally refreshing.",
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
            {menuItems
              .slice(0, Math.ceil(menuItems.length / 2))
              .map((item, index) => (
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
            {menuItems
              .slice(Math.ceil(menuItems.length / 2))
              .map((item, index) => (
                <MenuItem key={item.name} item={item} index={index} />
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
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 last:mb-0 group"
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
      </div>
    </motion.div>
  );
};

export default MenuSection;
