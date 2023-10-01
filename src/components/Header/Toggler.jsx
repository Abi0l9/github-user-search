import React from "react";
import { Icon } from "@iconify/react";
import sun from "@iconify/icons-line-md/moon-alt-to-sunny-outline-loop-transition";
import moon from "@iconify/icons-line-md/sunny-filled-loop-to-moon-alt-filled-loop-transition";
import { useColorScheme } from "../../hooks/ColorSchemeContext";

const Toggler = ({ darkMode, toggle }) => {
  const { colorSetter } = useColorScheme();
  return (
    <div className=" flex flex-row gap-x-2 justify-center items-center cursor-pointer">
      <div
        className={`${colorSetter("text-gray-900", "text-gray-100")}`}
        onClick={toggle}
      >
        {colorSetter("Light", "Dark")}
      </div>
      <div className="" onClick={toggle}>
        <Icon
          icon={darkMode ? sun : moon}
          color={colorSetter("black", "white")}
        />
      </div>
    </div>
  );
};

export default Toggler;
