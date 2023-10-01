import React from "react";
import { useColorScheme } from "../../hooks/ColorSchemeContext";

const PersonalDetails = () => {
  const { colorSetter } = useColorScheme();
  return (
    <div
      className={`flex-1 flex flex-col justify-between pb-2 ${colorSetter(
        "",
        ""
      )}`}
    >
      <div className="w-full pl-2">
        <div className="flex flex-row justify-between items-center">
          <p className="text-2xl font-semibold dark:text-gray-200">
            The Octocat
          </p>
          <p className={`${colorSetter("text-gray-600", "text-gray-400")}`}>
            Joined 25 Jan 2011
          </p>
        </div>
        <div className="text-blue-600">@octocat</div>
      </div>
      <div className={`${colorSetter("text-gray-600", "text-gray-400")} pl-2`}>
        This profile has no bio
      </div>
    </div>
  );
};

export default PersonalDetails;
