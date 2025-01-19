"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import { Coffee, Send } from "lucide-react";

const ContactPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoaded && (
        <motion.main
          key="contact-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-white pt-20"
        >
          {/* Hero Section */}
          <section className="relative py-16 md:py-20 lg:py-24 bg-[#FFC75D]/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-comfortaa font-bold text-[#FA932F] mb-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Get in Touch
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl font-raleway text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Drop by for a coffee and a chat. We'd love to hear from you!
                </motion.p>

                {/* Decorative icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-8 flex justify-center gap-4"
                >
                  <Coffee className="text-[#FA932F] w-8 h-8" />
                  <Send className="text-[#FCAC31] w-8 h-8" />
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
          </section>

          {/* Contact Information with key for forced remount */}
          <motion.div
            key={`contact-section-${isLoaded}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContactSection />
          </motion.div>

          {/* Additional Information */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-gray-600 font-raleway italic">
                  For business inquiries or special event bookings, please reach
                  out to us on Instagram.
                </p>
              </motion.div>
            </div>
          </section>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default ContactPage;
