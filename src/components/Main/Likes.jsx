import React from "react";
import { useColorScheme } from "../../hooks/ColorSchemeContext";

const LikeCard = ({ title, figure }) => {
  const { colorSetter } = useColorScheme();
  return (
    <div className={`w-1/3 flex flex-col `}>
      <p className={`${colorSetter("text-gray-500", "text-gray-400")}`}>
        {title}
      </p>
      <p
        className={`text-xl font-semibold ${colorSetter(
          "text-gray-900",
          "text-gray-100"
        )}`}
      >
        {figure}
      </p>
    </div>
  );
};

const Likes = () => {
  const { colorSetter } = useColorScheme();
  return (
    <div
      className={`w-full my-3 p-3 bg-gray-100 rounded-md flex flex-row justify-between items-center ${colorSetter(
        "",
        "bg-gray-800"
      )}`}
    >
      <LikeCard title={"Repos"} figure={8} />
      <LikeCard title={"Followers"} figure={3938} />
      <LikeCard title={"Following"} figure={9} />
    </div>
  );
};

export default Likes;
