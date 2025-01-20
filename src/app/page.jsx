"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Promise from "@/components/Promise";
import Product from "@/components/Product";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoaded && (
        <motion.main
          key="home-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white overflow-hidden"
        >
          <Hero />
          <motion.div
            key={`vision-section-${isLoaded}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Vision />
          </motion.div>
          <Promise />
          <Product />
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default Home;
