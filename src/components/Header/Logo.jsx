import React from "react";
import { useColorScheme } from "../../hooks/ColorSchemeContext";

const Logo = () => {
  const { colorSetter } = useColorScheme();
  return (
    <div
      className={`w-full flex flex-1 font-bold ${colorSetter(
        "",
        "text-gray-800"
      )}`}
    >
      devfinder
    </div>
  );
};

export default Logo;
