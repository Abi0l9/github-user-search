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
    <div className={`flex flex-row items-center w-full gap-x-2 `}>
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

const Socials = ({ user }) => {
  return (
    <div className="w-full flex flex-col my-3">
      <div className="w-full flex flex-col md:my-2 md:flex-row gap-x-2">
        <div className="md:flex-1">
          <SocialContainer
            icon={location}
            detail={user?.location || "San Francisco"}
          />
        </div>
        <div className="md:w-2/6">
          <SocialContainer
            icon={twitter}
            detail={user?.twitter_username || "Not Available"}
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:my-2 md:flex-row gap-x-2">
        <div className="md:flex-1">
          <SocialContainer
            icon={link}
            detail={
              <a href={user?.url}>{user?.html_url || "Not Available"}</a> ||
              "@github"
            }
          />
        </div>
        <div className="md:w-2/6">
          <SocialContainer
            icon={github}
            detail={user?.login ? `@${user?.login}` : "@github"}
          />
        </div>
      </div>
    </div>
  );
};

export default Socials;
