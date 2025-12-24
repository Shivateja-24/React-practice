import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  const { users } = props;

  return (
    <div
      id="right"
      className="h-full w-2/3 p-6 flex flex-nowrap overflow-x-auto gap-10"
    >
      {users.map((user, index) => (
        <RightCard key={index} id={index} user={user} />
      ))}
    </div>
  );
};

export default RightContent;
