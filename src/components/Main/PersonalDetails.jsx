import React from "react";
import { useColorScheme } from "../../hooks/ColorSchemeContext";

const PersonalDetails = ({ user }) => {
  const { colorSetter } = useColorScheme();
  return (
    <div
      className={`flex-1 flex flex-col justify-between pb-2 ${colorSetter(
        "",
        ""
      )}`}
    >
      <div className="w-full pl-2">
        <div className="flex flex-col mb-3 md:flex-row md:justify-between md:items-center">
          <p className="text-2xl font-semibold dark:text-gray-200">
            {user?.name || "The Octocat"}
          </p>
          <p className={` ${colorSetter("text-gray-600", "text-gray-400")}`}>
            {user?.login
              ? new Date(user?.created_at).toDateString()
              : "Joined 25 Jan 2011"}
          </p>
        </div>
        <div className="text-blue-600">@{user?.login || "octocat"}</div>
      </div>
    </div>
  );
};

export default PersonalDetails;
