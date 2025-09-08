"use client";

import Image from "next/image";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

function OtherList({ articles, bookmark, bookmarkHandler }) {
  return (
    <ul className="w-[90%] m-auto">
      {articles.map((article, i) => (
        <li
          key={i}
          className="relative p-4 shadow-md md:flex gap-4 items-center justify-around md:p-12 rounded-2xl cursor-pointer bg-white my-5 md:shadow-md"
        >
          <div className="relative w-full md:w-[40%] h-[150px] md:h-[200px] flex-shrink-0">
            {article.urlToImage ? (
              <Image
                src={article.urlToImage}
                alt={article.title || "뉴스 이미지"}
                fill
                className="object-cover rounded-md"
              />
            ) : (
              <p className="text-2xl text-center absolute left-1/2 top-1/2 -translate-1/2">
                No Image
              </p>
            )}
          </div>
          <div className="md:w-[50%]">
            <p className="flex gap-2 mt-2.5">
              <IoPersonCircle className="text-indigo-900 text-lg" />
              <span className="text-sm">{article.author}</span>
            </p>
            <p className="flex gap-2 mt-2.5">
              <FaCalendarAlt className="text-amber-200" />
              <span className="text-sm">
                {article.publishedAt.slice(0, 10)}
              </span>
            </p>
            <h3 className="font-bold py-2 text-center">{article.title}</h3>
            <div className="flex justify-between px-2">
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
        </li>
      ))}
    </ul>
  );
}

export default OtherList;
