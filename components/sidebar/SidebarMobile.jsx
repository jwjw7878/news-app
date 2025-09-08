"use client";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import SidebarContent from "./SidebarContent";

export default function SidebarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <header className="md:hidden">
      <button
        className="sticky top-4 ml-4 cursor-pointer z-[9999] bg-black/70 p-2 rounded-full text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <MdClose size={28} /> : <MdMenu size={28} />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* 배경 오버레이 */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* 슬라이드 메뉴 */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-[70%] h-full bg-black text-white z-50"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
