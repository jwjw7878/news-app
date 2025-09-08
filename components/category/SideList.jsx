"use client";

import Image from "next/image";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";

function SideList({
  latestNews,
  setMainArticle,
  setSelect,
  select,
  bookmark,
  bookmarkHandler,
}) {
  return (
    <ul className="w-[90%] m-auto md:w-[50%]">
      {latestNews.map((article, i) => (
        <li
          key={i}
          onClick={() => {
            setMainArticle(latestNews[i]);
            setSelect(i);
          }}
          className={`relative shadow-md md:flex gap-4 md:shadow-md items-center justify-around py-2 px-2 rounded-2xl cursor-pointer bg-white my-5 ${
            select === i ? "border-2 border-blue-500" : "bg-white"
          }`}
        >
          <p className="absolute -left-2.5 -top-2.5 text-2xl font-bold text-blue-400 text-shadow-white ">
            {i + 1}
          </p>
          <div className="relative w-full md:h-[80px] h-[150px] md:w-[80px] flex-shrink-0">
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
          <div>
            <h3 className="font-bold py-2 text-center">{article.title}</h3>
            <div className="flex justify-between items-center px-2">
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
                  className="text-lg cursor-pointer"
                  onClick={() => bookmarkHandler(article)}
                />
              ) : (
                <FaRegBookmark
                  className="text-lg cursor-pointer"
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

export default SideList;
