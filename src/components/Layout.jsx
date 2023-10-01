import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Main from "./Main";
import { useColorScheme } from "../hooks/ColorSchemeContext";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { toggleColorScheme } = useColorScheme();
  const [user, setUser] = useState({});

  const getUserDetailsFromQuery = (data) => {
    setUser(data);
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
    toggleColorScheme();
  };
  return (
    <div
      className={`w-full py-4 px-2 md:w-5/6 md:flex min-h-screen flex-col mx-auto`}
    >
      <Header toggle={toggleMode} darkMode={darkMode} />
      <Search getData={getUserDetailsFromQuery} />
      <Main user={user} />
    </div>
  );
};

export default Layout;
