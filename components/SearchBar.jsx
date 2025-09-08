export default function SearchBar({ search, setSearch, onSearch }) {
  return (
    <div className="flex w-[100%] md:w-[60%]">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        className="bg-white rounded-xl px-2 py-2 border-2 border-purple-900 mx-4 w-[80%]"
        placeholder="Search news..."
      />
      <button
        onClick={onSearch}
        className="cursor-pointer py-2 px-3 bg-purple-100 text-purple-800 rounded-xl"
      >
        Search
      </button>
    </div>
  );
}
