import React, { useRef, useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiTwotoneShop } from "react-icons/ai";

const Cheious = () => {
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      sidebarRef.current.style.width = "0px";
    } else {
      sidebarRef.current.style.width = "300px";
    }
  };

  return (
    <>
      <div className="bg-gray-300 hover:bg-gray-400 shadow-lg text-4xl p-4 mx-auto w-25 rounded-md">
        <AiOutlineAlignLeft
          onClick={handleClick}
          className="mx-auto active:scale-90 cursor-pointer text-black"
        />
      </div>
      <div
        ref={sidebarRef}
        className="fixed  top-0 left-0 h-screen bg-gray-200 w-0 overflow-hidden transition-width duration-500"
      >
        {/* Sidebar content yahan aayega */}

        <div className="  p-6">
          <div className="flex gap-3">
            <img
              className="rounded-full object-cover"
              style={{ width: "60px", height: "60px" }}
              src="https://thecentaurusmall.com/wp-content/uploads/2024/05/Cheezious-840x840.jpg"
              alt=""
            />
            <div className="">
              <p className="text-gray-500">Login to explore</p>
              <p className="font-bold">World of flavors</p>
            </div>
          </div>

          <button className="border border-black hover:bg-gray-400 px-2 rounded-md mt-5">
            LOGIN
          </button>
          <hr className="text-gray-400 mt-5" />

          <div className="flex mt-9 gap-3">
            <AiOutlineAppstore className="text-3xl" />
            <p className="text-black font-bold">Explore Menu</p>
          </div>

          <div className="flex mt-9 gap-3">
            <AiTwotoneShop className="text-3xl" />
            <p className="text-black font-bold">Branch Locator</p>
          </div>

          <hr className="text-gray-400 mt-5" />
          <h1 className="font-bold mt-5">Blog</h1>
          <h1 className="font-bold mt-5">Privacy Policy</h1>
        </div>
      </div>
    </>
  );
};

export default Cheious;
