import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  const { user, id } = props;
  return (
    <div className="h-full w-80 rounded-4xl overflow-hidden relative shrink-0">
      <img src={user.img} alt="image" className="object-cover h-full w-full" />
      <RightCardContent user={user} id={id} />
    </div>
  );
};

export default RightCard;
