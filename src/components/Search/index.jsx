import React, { useState } from "react";
import { Icon } from "@iconify/react";
import search from "@iconify/icons-line-md/search";
import { useColorScheme } from "../../hooks/ColorSchemeContext";
import { getUser } from "../../services/git";

const Search = ({ getData }) => {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false); // eslint-disable-line
  const { colorSetter } = useColorScheme();

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchText("");

    try {
      const response = await getUser(searchText);
      getData(response?.data);
    } catch (e) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div
      className={`w-full p-2 rounded-lg shadow-2xl mt-5 mb-4 ${colorSetter(
        "",
        "bg-gray-900"
      )}`}
    >
      <form
        onSubmit={handleSubmit}
        action=""
        className={`w-full flex flex-row gap-x-2 items-center justify-between`}
      >
        <label htmlFor="searchText">
          <Icon icon={search} color="skyBlue" width={30} hFlip={true} />
        </label>
        <input
          type="text"
          id="searchText"
          value={searchText}
          onChange={handleInput}
          className={`flex flex-1 w-full focus:outline-none px-3 rounded-md py-1 ${colorSetter(
            "",
            "bg-gray-900 text-gray-200"
          )}`}
          placeholder="Search Github Username..."
        />
        {error && <div className="min-w-[150px] text-red-500">No results</div>}
        <input
          type="submit"
          value="Search"
          className="bg-[#0079FF] active:bg-blue-600 hover:bg-blue-400 px-3 py-1 text-gray-100 rounded-md"
        />
      </form>
    </div>
  );
};

export default Search;
