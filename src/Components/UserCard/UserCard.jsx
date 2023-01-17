import React from "react";
import userImg2 from "./../../assets/agents/Mask Group.png";

function UserCard({
  id = 0,
  userImg = userImg2,
  userName = "UserName",
  companyName = "Users Compnay Name",
  setUserId = () => {},
}) {
  function onClickHandler() {
    setUserId(id);
  }

  return (
    <div
      className="w-full h-fit flex flex-row items-center justify-start gap-4 p-4 hover:cursor-pointer"
      onClick={onClickHandler}
    >
      <img
        src={userImg}
        alt=""
        className="rounded-full h-[60px] w-[60px] object-cover"
      />
      <span className="h-full w-full">
        <b className="font-extrabold text-lg text-gray-500">{userName}</b>
        <p className="text-base text-gray-500 font-normal">{companyName}</p>
      </span>
    </div>
  );
}

export default UserCard;
