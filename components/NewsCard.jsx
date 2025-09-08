"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setBookmark } from "@/app/store/bookmarkSlice";

export default function NewsCard({ article, refProp, index }) {
  const bookmark = useSelector((state) => state.news.bookmark);
  const isBookmark = bookmark.find((a) => a.url === article.url);
  const dispatch = useDispatch();

  return (
    <motion.div
      ref={refProp}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col bg-white rounded-lg shadow hover:shadow-lg cursor-pointer overflow-hidden"
    >
      {/* 이미지 */}
      <div className="relative w-full h-[200px] flex-shrink-0">
        {article.urlToImage ? (
          <Image
            src={article.urlToImage}
            alt={article.title || "뉴스 이미지"}
            fill
            className="object-cover rounded-t-md"
            unoptimized={true}
          />
        ) : (
          <p className="text-xl text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            No Image
          </p>
        )}
      </div>

      {/* 텍스트 */}
      <div className="p-4 flex flex-col gap-2 justify-between h-full">
        <div className="flex justify-between items-center">
          <p className="flex gap-2">
            <IoPersonCircle className="text-indigo-900 text-lg" />
            <span className="text-sm">{article.author}</span>
          </p>
          {isBookmark ? (
            <FaBookmark
              className="text-xl cursor-pointer"
              onClick={() => {
                dispatch(setBookmark(article));
              }}
            />
          ) : (
            <FaRegBookmark
              className="text-xl cursor-pointer"
              onClick={() => {
                dispatch(setBookmark(article));
              }}
            />
          )}
        </div>
        <p className="flex gap-2">
          <FaCalendarAlt className="text-amber-200" />
          <span className="text-sm">{article.publishedAt.slice(0, 10)}</span>
        </p>
        <div>
          <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-3">
            {article.description}
          </p>
        </div>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          View →
        </a>
      </div>
    </motion.div>
  );
}
