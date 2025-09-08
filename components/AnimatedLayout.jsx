"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedLayout({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={Math.random()}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.4 }}
        className="w-[80%]"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
