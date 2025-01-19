"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuSection from "@/components/MenuSection";

const MenuPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoaded && (
        <motion.main
          key="menu-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white pt-20"
        >
          {/* Hero Section */}
          <section className="relative py-20 bg-[#FFC75D]/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-comfortaa font-bold text-[#FA932F] mb-6">
                  Our Menu
                </h1>
                <p className="text-lg md:text-xl font-raleway text-gray-600">
                  Carefully crafted drinks and treats made with love. We pride
                  ourselves in serving quality coffee and complementary delights
                  that make your experience memorable.
                </p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
          </section>

          {/* Menu Section with key for proper remounting */}
          <motion.div
            key={`menu-section-${isLoaded}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MenuSection />
          </motion.div>

          {/* Note Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-gray-600 font-raleway italic">
                  * All our coffees are made with premium, single-origin beans.
                  Prices are inclusive of all taxes. Menu items may contain
                  allergens, please inform our staff of any allergies.
                </p>
              </motion.div>
            </div>
          </section>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default MenuPage;
