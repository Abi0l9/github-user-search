import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Main from "./Main";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="w-full">
      <Header toggle={toggleMode} darkMode={darkMode} />
      <Search />
      <Main />
    </div>
  );
};

export default Layout;
