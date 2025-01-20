"use client";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg hover:bg-[#FFC75D]/10 transition-colors"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          scale: [0.8, 1],
          rotate: isDark ? 360 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-[#FFC75D]" />
        ) : (
          <Moon className="w-5 h-5 text-[#FA932F]" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
