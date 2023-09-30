import React from "react";
import { Icon } from "@iconify/react";
import sun from "@iconify/icons-line-md/moon-alt-to-sunny-outline-loop-transition";
import moon from "@iconify/icons-line-md/sunny-filled-loop-to-moon-alt-filled-loop-transition";

const Toggler = ({ darkMode, toggle }) => {
  return (
    <div className=" flex flex-row gap-x-1 justify-center items-center cursor-pointer">
      <div className="" onClick={toggle}>
        {darkMode ? "Light" : "Dark"}
      </div>
      <div className="" onClick={toggle}>
        <Icon icon={darkMode ? sun : moon} />
      </div>
    </div>
  );
};

export default Toggler;
