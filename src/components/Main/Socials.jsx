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

const Socials = ({ user }) => {
  return (
    <div className="w-full flex flex-row flex-wrap my-3 gap-y-2">
      <SocialContainer
        icon={location}
        detail={user?.location || "San Francisco"}
      />
      <SocialContainer
        icon={twitter}
        detail={user?.twitter_username || "Not Available"}
      />
      <SocialContainer
        icon={link}
        detail={
          <a href={user?.url}>{user?.html_url || "Not Available"}</a> ||
          "@github"
        }
      />
      <SocialContainer
        icon={github}
        detail={user?.login ? `@${user?.login}` : "@github"}
      />
    </div>
  );
};

export default Socials;
