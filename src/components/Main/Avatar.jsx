import React from "react";
import { Icon } from "@iconify/react";
import githubOctocat from "@iconify/icons-logos/github-octocat";

const Avatar = () => {
  return (
    <div className="w-[150px] h-[150px] rounded-full p-1 bg-gray-100 flex flex-col items-center justify-center">
      <Icon icon={githubOctocat} width={140} className="mt-5" />
    </div>
  );
};

export default Avatar;
