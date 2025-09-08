"use client";

import { useState, useEffect, useContext } from "react";
import MainArticle from "@/components/category/MainArticle";
import SideList from "@/components/category/SideList";
import OtherList from "@/components/category/OtherList";
import { useSelector, useDispatch } from "react-redux";
import { setBookmark } from "@/app/store/bookmarkSlice";
function Page({ params }) {
  const { category } = params;
  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.news.bookmark);
  // 카테고리 총 데이터
  const [cat, setCat] = useState([]);
  const latestNews = cat.slice(0, 4);
  const [mainArticle, setMainArticle] = useState(null);
  const [select, setSelect] = useState(0);

  const bookmarkHandler = (a) => {
    dispatch(setBookmark(a));
  };

  async function getCategotyData() {
    try {
      const res = await fetch(`/api/news/${category}`);
      const data = await res.json();
      setCat(data);
      if (data) setMainArticle(data[0]);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getCategotyData();
  }, [category]);

  return (
    <>
      <h2 className="font-extrabold text-4xl ml-12 my-12">{category}</h2>
      <h3 className="font-bold text-2xl ml-12 my-10">Latest Top</h3>
      <div className="md:flex justify-around gap-5 w-[90%] m-auto">
        <MainArticle
          article={mainArticle}
          bookmark={bookmark}
          bookmarkHandler={bookmarkHandler}
        />
        <SideList
          latestNews={latestNews}
          select={select}
          setSelect={setSelect}
          setMainArticle={setMainArticle}
          bookmark={bookmark}
          bookmarkHandler={bookmarkHandler}
        />
      </div>

      <h3 className="ml-12 text-2xl mt-20 mb-12 font-bold">Others</h3>
      <OtherList
        articles={cat.slice(4)}
        bookmark={bookmark}
        bookmarkHandler={bookmarkHandler}
      />
    </>
  );
}

export default Page;
