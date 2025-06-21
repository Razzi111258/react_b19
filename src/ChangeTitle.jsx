import React, { useState } from "react";

const ChangeTitle = () => {
  const [data, setData] = useState("Title 1");

  function generatesalam() {
    if (data == "Title 1") {
      setData("This is a title 2");
    } else {
      setData("Title 1");
    }
  }

  return (
    <>
      <h1 className="text-7xl text-center text-green-400">{data}</h1>

      <button
        onClick={generatesalam}
        className="bg-green-600 text-white px-5 py-2 mx-auto block rounded-md hover:bg-green-700
      cursor-pointer active:scale-90"
      >
        Change Title
      </button>
    </>
  );
};

export default ChangeTitle;
