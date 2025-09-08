"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiCategory } from "react-icons/bi";
import { FaRegBookmark, FaArrowTrendUp } from "react-icons/fa6";

export default function SidebarContent() {
  const [submenu, setSubMenu] = useState(false);
  const categories = [
    "business",
    "entertainment",
    "sports",
    "science",
    "politics",
  ];

  return (
    <nav className="p-4 sticky top-4">
      <Link
        href={"/"}
        className="block cursor-pointer text-4xl my-12 font-extrabold text-center"
      >
        NEWS 25
      </Link>

      <ul className="list-none">
        <li
          onClick={() => setSubMenu(!submenu)}
          className="flex items-center cursor-pointer w-full text-center py-3 px-2 text-2xl gap-4 hover:bg-gray-300 rounded-md"
        >
          <BiCategory />
          Category
        </li>

        <AnimatePresence>
          {submenu && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-2"
            >
              {categories.map((cat) => (
                <motion.li
                  key={cat}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/news/${cat}`}
                    className="block text-center py-2 px-2 bg-gray-400 hover:bg-gray-500 rounded-md mt-1"
                  >
                    {cat}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <Link href={"/bookmarks"}>
          <li className="flex items-center text-center text-2xl gap-4 py-3 px-2 mt-4 rounded-md hover:bg-gray-300 cursor-pointer">
            <FaRegBookmark />
            Bookmarks
          </li>
        </Link>

        <li className="flex items-center text-center text-2xl gap-4 py-3 px-2 mt-4 rounded-md hover:bg-gray-300 cursor-pointer">
          <FaArrowTrendUp />
          Trend
        </li>
      </ul>
    </nav>
  );
}
