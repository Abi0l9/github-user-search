import React from "react";
import { useColorScheme } from "../../hooks/ColorSchemeContext";

const Bio = ({ user }) => {
  const { colorSetter } = useColorScheme();
  return (
    <div
      className={`${colorSetter(
        "text-gray-600",
        "text-gray-400"
      )} my-5 md:mb-0 md:pl-2`}
    >
      {user?.bio || "This profile has no bio"}
    </div>
  );
};

export default Bio;
