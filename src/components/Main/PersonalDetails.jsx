import React from "react";

const PersonalDetails = () => {
  return (
    <div className="flex-1 flex flex-col justify-between pb-2">
      <div className="w-full">
        <div className="flex flex-row justify-between items-center">
          <p className="text-2xl font-semibold">The Octocat</p>
          <p className="text-gray-500">Joined 25 Jan 2011</p>
        </div>
        <div className="text-blue-600">@octocat</div>
      </div>
      <div className="w-full text-gray-500">This profile has no bio</div>
    </div>
  );
};

export default PersonalDetails;
