export default function SortTabs({ select, setSelect }) {
  return (
    <div className="mt-10 text-right md:m-0">
      <span
        onClick={() => setSelect("popularity")}
        className={`cursor-pointer rounded-xl text-xl font-bold mr-4 hover:underline ${
          select === "popularity"
            ? "text-green-900 bg-green-100 py-2 px-3"
            : "text-green-700"
        }`}
      >
        Popular
      </span>
      <span
        onClick={() => setSelect("publishedAt")}
        className={`cursor-pointer rounded-xl text-xl font-bold hover:underline ${
          select === "publishedAt"
            ? "text-green-900 bg-green-100 py-2 px-3"
            : "text-green-700"
        }`}
      >
        Latest
      </span>
    </div>
  );
}
