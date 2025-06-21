import React from "react";
import { IoMdClose } from "react-icons/io";
import { Users_data } from "./Users";
const Usermodel = ({ dekhao, setdekhao, cheak }) => {
  return (
    <>
      <div className="w-full min-h-screen bg-black/50 flex justify-center items-center fixed top-0 z-500">
        <div className="w-[90%] mx-auto xl:w-[45%] lg:w-[55%] md:w-[70%] relative bg-white p-5 rounded-xl">
          <IoMdClose
            onClick={() => setdekhao(false)}
            className="text-2xl cursor-pointer absolute right-5"
          />
          <img
            className="w-[150px] h-[150px] rounded-full block mx-auto shadow"
            src={Users_data[cheak].image}
            alt=""
          />

          <h2 className="text-center text-xl">{Users_data[cheak].name}</h2>
          <div className="flex justify-center gap-3">
            <h2 className="bg-green-400 w-max   rounded-md px-3 py-1">
              {Users_data[cheak].dob}
            </h2>

            <h2 className="bg-pink-400 w-max  rounded-md px-3 py-1">
              {Users_data[cheak].salery}
            </h2>
          </div>
          <p className="text-center ">{Users_data[cheak].desc}</p>
        </div>
      </div>
    </>
  );
};

export default Usermodel;
