// DashboardPage.jsx
"use client";

import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import SortTabs from "@/components/SortTabs";
import NewsCard from "@/components/NewsCard";
import Loading from "@/components/Loading";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

export default function DashboardPage() {
  const [select, setSelect] = useState("publishedAt");
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  async function fetchNews({ pageParam = 1, queryKey }) {
    const [_news, { search, select }] = queryKey;
    const res = await fetch(
      `/api/news?q=${search}&page=${pageParam}&sortBy=${select}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Failed to fetch news");
    return res.json();
  }

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["news", { search, select }],
    queryFn: fetchNews,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  });

  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [inView]);

  const articles = data?.pages.flat() ?? [];
  console.log(data);
  console.log(articles);

  return (
    <div className="w-[90%] m-auto">
      <h1 className="text-4xl font-extrabold text-center my-10">Daily News</h1>

      {/* 검색 + 정렬 */}
      <div className="md:flex justify-between items-center mb-6">
        <SearchBar
          search={input}
          setSearch={setInput}
          onSearch={() => setSearch(input)} // 버튼 클릭 시 검색
        />
        <SortTabs
          select={select}
          setSelect={setSelect}
          onSearch={() => setSearch(input)} // 정렬 변경 시 검색 반영
        />
      </div>

      {/* 뉴스 카드 */}
      <div
        className={`${
          articles.length !== 0
            ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
            : "w-[90%] m-auto"
        }`}
      >
        {isLoading ? (
          <Loading />
        ) : error ? (
          <p className="text-2xl font-extrabold text-center text-red-500">
            Error loading articles
          </p>
        ) : articles.length === 0 ? (
          <p className="text-2xl font-extrabold text-center">
            The article could not be found
          </p>
        ) : (
          articles.map((article, i) => {
            if (i === articles.length - 1)
              return (
                <NewsCard key={i} article={article} refProp={ref} index={i} />
              );
            return <NewsCard key={i} article={article} index={i} />;
          })
        )}
      </div>

      {isFetchingNextPage && <Loading />}
    </div>
  );
}
