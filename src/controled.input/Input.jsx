import React, { useState } from "react";
import toast from "react-hot-toast";
import SingleName from "./SingleName";

const Input = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [myData, setmyData] = useState([]);

  const handleClick = () => {
    if (text == "") {
      setError(true);
      toast.error("please enter a value");
    } else {
      setError(false);
      setmyData([...myData, text]);
      toast.success("Value Added");
    }

    setText("");
  };
  return (
    <>
      <div className=" w-[50%] mx-auto border border-gray-300 shadow-xl shadow-pink-300 p-10 rounded-md">
        <h1 className="text-center text-3xl">Enter name</h1>
        <form>
          <label htmlFor="" className="text-gray-400">
            Name
          </label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text "
            placeholder="Enter your Email..."
            className={`w-full p-2 border border-gray-400 outline-0 focus:border-pink-400 ${
              error && "border-red-500"
            } rounded-md`}
          />
          {error && (
            <p className="text-red-500 fw-samibold">Please enter a value</p>
          )}
          <button
            onClick={handleClick}
            type="button"
            className="w-full p-2 rounded-md mt-3 bg-pink-500 active:scale-95 cursor-pointer  text-white"
          >
            Add Data{" "}
          </button>
        </form>
      </div>

      <div className="container mx-auto mt-3 gap-3 grid grid-cols-4">
        {myData.map((item, index) => {
          return <SingleName key={index} name={item} />;
        })}
      </div>
    </>
  );
};

export default Input;
