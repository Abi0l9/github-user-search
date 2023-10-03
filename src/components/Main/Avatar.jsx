import React from "react";
import { Icon } from "@iconify/react";
import githubOctocat from "@iconify/icons-logos/github-octocat";

const Avatar = ({ user }) => {
  return (
    <div className="w-[150px] h-[150px] rounded-full p-1 bg-gray-100 flex flex-col items-center justify-center">
      {!user?.login ? (
        <Icon icon={githubOctocat} width={140} className="mt-5" />
      ) : (
        <img
          src={`${user.avatar_url}`}
          alt="user dp"
          className="rounded-full"
        />
      )}
    </div>
  );
};

export default Avatar;
