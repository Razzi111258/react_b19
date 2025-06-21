import React from "react";
import Singleuser from "./Singleuser";
import { Users_data } from "./Users";
import Usermodel from "./Usermodel";
import { useState } from "react";

const Info = () => {
  const [show, setShow] = useState(false);
  const [cheak, setCheak] = useState(null);

  return (
    <>
      {show && <Usermodel cheak={cheak} dekhao={show} setdekhao={setShow} />}
      <div className="container shadow-lg rounded-md mt-5 p-4 mx-auto w-1/3 ">
        <h2 className="text-center text-4xl text-green-500">5 Users</h2>
        {Users_data.map((item, index) => {
          return (
            <Singleuser
              cheak={cheak}
              setCheak={setCheak}
              dekhao={show}
              setdekhao={setShow}
              {...item}
            />
          );
        })}
      </div>
    </>
  );
};
export default Info;
