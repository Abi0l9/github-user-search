import { createContext, useContext, useEffect, useState } from "react";

const ColorSchemeContext = createContext();

export const ColorSchemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e) => {
      setColorScheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  const colorSetter = (first, second) => {
    return colorScheme === "dark" ? first : second;
  };

  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme, toggleColorScheme, colorSetter }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorScheme = () => {
  return useContext(ColorSchemeContext);
};
