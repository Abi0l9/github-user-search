import React from "react";
import Avatar from "./Avatar";
import PersonalDetails from "./PersonalDetails";
import Likes from "./Likes";
import Socials from "./Socials";

const Main = () => {
  return (
    <div className="w-full flex flex-col p-6 shadow-2xl rounded-lg my-3 mb-5">
      <div className="w-full flex flex-row  gap-x-6">
        <Avatar />
        <PersonalDetails />
      </div>
      <div className="w-full flex flex-row  gap-x-6">
        <div className="w-[200px]"></div>
        <Likes />
      </div>
      <div className="w-full flex flex-row  gap-x-6">
        <div className="w-[200px]"></div>
        <Socials />
      </div>
    </div>
  );
};

export default Main;
