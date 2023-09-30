import React from "react";
import Logo from "./Logo";
import Toggler from "./Toggler";

const Header = ({ toggle, darkMode }) => {
  return (
    <div className="p-2 w-full flex flex-row justify-center items-center">
      <Logo toggle={toggle} />
      <Toggler toggle={toggle} darkMode={darkMode} />
    </div>
  );
};

export default Header;
