import React from "react";

const LikeCard = ({ title, figure }) => {
  return (
    <div className="w-1/3 flex flex-col ">
      <p className="text-gray-500">{title}</p>
      <p className="text-xl font-semibold">{figure}</p>
    </div>
  );
};

const Likes = () => {
  return (
    <div className="w-full my-3 p-3 bg-gray-100 rounded-md flex flex-row justify-between items-center">
      <LikeCard title={"Repos"} figure={8} />
      <LikeCard title={"Followers"} figure={3938} />
      <LikeCard title={"Following"} figure={9} />
    </div>
  );
};

export default Likes;
