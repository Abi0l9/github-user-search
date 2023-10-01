import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Main from "./Main";
import { useColorScheme } from "../hooks/ColorSchemeContext";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { toggleColorScheme } = useColorScheme();

  const toggleMode = () => {
    setDarkMode(!darkMode);
    toggleColorScheme();
  };
  return (
    <div
      className={`w-full px-2 md:w-5/6 md:flex min-h-screen flex-col mx-auto`}
    >
      <Header toggle={toggleMode} darkMode={darkMode} />
      <Search />
      <Main />
    </div>
  );
};

export default Layout;
