import React from "react";
import Avatar from "./Avatar";
import PersonalDetails from "./PersonalDetails";
import Likes from "./Likes";
import Socials from "./Socials";
import { useColorScheme } from "../../hooks/ColorSchemeContext";
import Bio from "./Bio";

const Main = ({ user }) => {
  const { colorSetter } = useColorScheme();
  return (
    <div
      className={`w-full flex flex-col p-6 shadow-2xl rounded-lg my-3 mb-5 ${colorSetter(
        "",
        "bg-gray-900 text-gray-200"
      )}`}
    >
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-row  gap-x-6 lg:gap-x-10">
          <Avatar user={user} />
          <PersonalDetails user={user} />
        </div>
        <div className="w-full flex md:gap-x-10 lg:gap-x-10 md:-mt-[35px] md:mb-[35px] md:flex-row ">
          <div className="md:w-[200px] lg:w-[160px]"></div>
          <Bio user={user} />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row  md:gap-x-10">
        <div className="w-[200px]"></div>
        <Likes user={user} />
      </div>
      <div className="w-full flex flex-col md:flex-row  md:gap-x-10">
        <div className="w-[200px]"></div>
        <Socials user={user} />
      </div>
    </div>
  );
};

export default Main;
