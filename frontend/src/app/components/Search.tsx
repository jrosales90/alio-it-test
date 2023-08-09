import { useState } from "react";

interface Props {
  onSearch: (text: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const [text, setText] = useState<string>("");

  return (
    <div className="mt-5 relative w-full">
      <input
        type="search"
        placeholder="Search..."
        className="pl-10 
          pr-4 
          py-2 
          rounded-md 
          bg-gray-700 
          text-white 
          w-full 
          focus:border-purple-500 
          focus:outline-none 
          focus:ring-2
          focus:ring-purple-500"
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearch(text);
          }
        }}
      />
      <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500 p-1 rounded-md hover:bg-purple-700"
        onClick={() => {
          onSearch(text);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
