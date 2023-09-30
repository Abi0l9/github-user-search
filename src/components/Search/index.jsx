import React from "react";

const Search = () => {
  return (
    <div className="w-full p-2 shadow mt-5">
      <form
        action=""
        className="w-full flex flex-row gap-x-2 items-center justify-between"
      >
        <label htmlFor="searchText">icon</label>
        <input
          type="text"
          className="flex flex-1 w-full"
          placeholder="Search Github Username..."
        />
        <input
          type="submit"
          value="Search"
          className="bg-[#0079FF] px-3 py-1 text-gray-100 rounded-md"
        />
      </form>
    </div>
  );
};

export default Search;
