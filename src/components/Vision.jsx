"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Vision = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key="vision-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Text Content */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-[#FA932F] mb-6">
                Our Vision
              </h2>
              <div className="space-y-4 font-raleway text-gray-700">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg"
                >
                  Toops Coffee grew from a small idea, bringing people together
                  over coffee. Specialty coffee is unique because it can let
                  anyone and everyone be drawn to spaces that serve it.
                </motion.p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="relative w-full h-full"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="/images/our-vision.jpg"
                  alt="Coffee making process"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Vision;
