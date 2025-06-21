import React from "react";
import SingleChat from "./SingleChat";
import "./style.css";
const Mobile = () => {
  return (
    <>
      <div
        className="container p-10 rounded-md mt-6 shadow-lg mx-auto w-[90%]
       xl:w-[30%] lg:w-[50%] md:w-[60%] bg-gray-200"
      >
        <div className="card bg-white rounded-md">
          <div className="bg-green-400 flex  text-white">
            <img
              className="msg"
              src="https://icons.veryicon.com/png/o/miscellaneous/personal-image/leaving-a-message-14.png"
              alt=""
            />
            <div>
              <h1>Start a Conversations</h1>
              <p>Hi! click one of our member below two chat on Whatsapp.</p>
            </div>
          </div>
          <p className="text-gray-300">
            The team typically replies in a few minutes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mobile;
