"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Coffee,
  Instagram,
  MapPin,
  CoffeeIcon,
  Clock,
  Heart,
  Phone,
} from "lucide-react";

const ContactSection = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative coffee icons background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 transform -rotate-12">
          <Coffee size={48} className="text-[#FA932F]" />
        </div>
        <div className="absolute bottom-20 right-10 transform rotate-12">
          <CoffeeIcon size={64} className="text-[#FCAC31]" />
        </div>
        <div className="absolute top-1/2 left-1/4 transform -rotate-45">
          <Heart size={32} className="text-[#FFC75D]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Instagram Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#FFC75D]/10 to-[#FA932F]/10 rounded-3xl p-8 md:p-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <Instagram size={48} className="text-[#FA932F]" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-comfortaa font-bold text-gray-900 mb-4">
                Follow us on Instagram
              </h2>
              <Link
                href="https://instagram.com/toops.coffee"
                target="_blank"
                className="text-xl md:text-2xl font-raleway text-[#FA932F] hover:text-[#FCAC31] transition-colors"
              >
                @toops.coffee
              </Link>
            </motion.div>
          </motion.div>

          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#FA932F]/10 to-[#FFC75D]/10 rounded-3xl p-8 md:p-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="mb-6"
              >
                <MapPin size={48} className="text-[#FA932F]" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-comfortaa font-bold text-gray-900 mb-4">
                Where to find us?
              </h2>
              <p className="text-lg font-raleway text-gray-600 mb-6">
                Plot no 1316/A, Rd Number 66,
                <br />
                Jubilee Hills, Hyderabad,
                <br />
                Telangana 500033
              </p>
              <div className="flex gap-8 mt-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <Clock size={24} className="text-[#FA932F] mb-2" />
                  <span className="text-sm font-raleway text-gray-600">
                    7 AM - 8:30 PM
                  </span>
                </motion.div>
                <motion.a
                  href="tel:+916305950328"
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center group"
                >
                  <Phone
                    size={24}
                    className="text-[#FA932F] mb-2 group-hover:rotate-12 transition-transform"
                  />
                  <span className="text-sm font-raleway text-gray-600 group-hover:text-[#FA932F] transition-colors">
                    Call Us
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive Map Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="https://maps.app.goo.gl/wuewJGvHSoS1GZZd7"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#FA932F] text-white px-8 py-3 rounded-full font-raleway 
                     hover:bg-[#FCAC31] transition-colors shadow-lg hover:shadow-xl"
          >
            <MapPin size={20} />
            <span>Open in Maps</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
