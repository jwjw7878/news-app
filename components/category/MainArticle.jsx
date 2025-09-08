"use client";

import Image from "next/image";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

function MainArticle({ article, bookmark, bookmarkHandler }) {
  if (!article) return null;

  return (
    <div className="w-[90%] bg-white p-2 m-auto rounded-lg shadow-md md:w-[50%] h-[100%]">
      <div className="relative w-[100%] md:h-[300px] h-[150px] flex-shirink-0 my-4">
        {article.urlToImage ? (
          <Image
            src={article.urlToImage}
            alt={article.title || "뉴스 이미지"}
            fill
            className="object-cover rounded-md"
            unoptimized
          />
        ) : (
          <p className="w-[100%] h-[300px] rounded-md bg-white text-2xl text-center">
            <span className="absolute left-1/2 top-1/2 -translate-1/2">
              No Image
            </span>
          </p>
        )}
      </div>
      <p className="flex gap-2">
        <IoPersonCircle className="text-indigo-900 text-lg" />
        <span className="text-sm">{article.author}</span>
      </p>
      <p className="flex gap-2 mt-2.5">
        <FaCalendarAlt className="text-amber-200" />
        <span className="text-sm">{article.publishedAt.slice(0, 10)}</span>
      </p>
      <p className="text-2xl font-bold my-2">{article.title}</p>
      <p className="my-2">{article.description}</p>
      <div className="flex justify-between items-center">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          View →
        </a>
        {bookmark.find((a) => a.url === article.url) ? (
          <FaBookmark
            className="text-xl cursor-pointer"
            onClick={() => bookmarkHandler(article)}
          />
        ) : (
          <FaRegBookmark
            className="text-xl cursor-pointer"
            onClick={() => bookmarkHandler(article)}
          />
        )}
      </div>
    </div>
  );
}

export default MainArticle;
