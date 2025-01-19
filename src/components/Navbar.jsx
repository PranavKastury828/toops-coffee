"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Our Story", path: "/our-story" },
    { name: "Menu", path: "/menu" },
  ];

  return (
    <motion.nav
      className="fixed w-full z-50 border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12 md:w-16 md:h-16"
            >
              <Image
                src="/images/logo.png"
                alt="Toops Coffee Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 48px, 64px"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3 py-2 rounded-lg font-raleway text-base transition-all duration-200
                  ${
                    pathname === item.path
                      ? "text-[#FA932F] font-semibold bg-[#FFC75D]/10"
                      : "text-gray-700 hover:text-[#FA932F] hover:bg-[#FFC75D]/5"
                  }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FA932F] rounded-full"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <Link href="/contact">
              <motion.button
                className="bg-[#FA932F] text-white px-6 py-2.5 rounded-lg font-raleway font-medium
                         transition-all duration-200 hover:bg-[#FCAC31]
                         shadow-[0_2px_10px_-3px_rgba(250,147,47,0.3)]
                         hover:shadow-[0_4px_20px_-3px_rgba(250,147,47,0.4)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden rounded-lg p-2 hover:bg-[#FFC75D]/5"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-[#FA932F] rounded-full block transition-all duration-300"
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-full h-0.5 bg-[#FA932F] rounded-full block transition-all duration-300"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-[#FA932F] rounded-full block transition-all duration-300"
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-gray-100 bg-white/50"
            >
              <div className="py-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`block px-4 py-2.5 rounded-lg font-raleway text-base transition-all duration-200
                      ${
                        pathname === item.path
                          ? "text-[#FA932F] font-semibold bg-[#FFC75D]/10"
                          : "text-gray-700 hover:text-[#FA932F] hover:bg-[#FFC75D]/5"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 py-2">
                  <Link href="/contact">
                    <motion.button
                      className="w-full bg-[#FA932F] text-white px-6 py-2.5 rounded-lg font-raleway 
                                font-medium transition-all duration-200 hover:bg-[#FCAC31]
                                shadow-[0_2px_10px_-3px_rgba(250,147,47,0.3)]"
                      whileTap={{ scale: 0.98 }}
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
