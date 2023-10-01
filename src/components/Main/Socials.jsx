import { Icon } from "@iconify/react";
import React from "react";
import twitter from "@iconify/icons-line-md/twitter";
import github from "@iconify/icons-line-md/github";
import location from "@iconify/icons-gridicons/location";
import link from "@iconify/icons-gridicons/link";
import { useColorScheme } from "../../hooks/ColorSchemeContext";

const SocialContainer = ({ icon, detail }) => {
  const { colorSetter } = useColorScheme();
  return (
    <div className={`flex flex-row gap-x-2 items-center w-full md:w-2/4 `}>
      <div className="">
        <Icon icon={icon} />
      </div>
      <div
        className={`flex-1  ${colorSetter("text-gray-600", "text-gray-400")}`}
      >
        {detail}
      </div>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="w-full flex flex-row flex-wrap my-3 gap-y-2">
      <SocialContainer icon={location} detail={"San Francisco"} />
      <SocialContainer icon={twitter} detail={"Not Available"} />
      <SocialContainer icon={link} detail={"@github"} />
      <SocialContainer icon={github} detail={"@github"} />
    </div>
  );
};

export default Socials;