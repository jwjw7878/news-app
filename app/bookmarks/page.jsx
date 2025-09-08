"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeAllbookmark, setBookmark } from "../store/bookmarkSlice";

export default function BookmarkPage() {
  const bookmark = useSelector((state) => state.news.bookmark);
  const dispatch = useDispatch();
  if (!bookmark || bookmark.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-gray-500">
        <p className="text-lg font-semibold">저장된 북마크가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Bookmarks</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {bookmark.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center bg-white shadow-md rounded-xl p-4 gap-4 hover:shadow-lg transition"
          >
            {item.urlToImage && (
              <div className="relative w-[100px] h-[80px] flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={item.urlToImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <h2 className="text-base font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {item.description}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm mt-2 inline-block"
              >
                View →
              </a>
            </div>
            <button
              onClick={() => dispatch(setBookmark(item))}
              className="p-2 rounded-full cursor-pointer text-red-500 hover:bg-red-100 transition"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      {bookmark && (
        <button
          onClick={() => {
            dispatch(removeAllbookmark());
          }}
          className="block m-auto my-10 text-center py-2 px-3 rounded-2xl bg-red-500 cursor-pointer text-red-100"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
