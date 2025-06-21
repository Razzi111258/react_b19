import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container text-center">
        <h1 className="text-9xl">{count}</h1>

        <button
          onClick={() => setCount(count - 1)}
          className="px-5 py-2 bg-pink-400 mx-2 text-white rounded-md active:scale-95 cursor-pointer hover:bg-pink-600"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-5 py-2 bg-gray-500 mx-2 text-white rounded-md active:scale-95 cursor-pointer hover:bg-gray-700"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-2 bg-pink-400 mx-2   text-white rounded-md active:scale-95 cursor-pointer hover:bg-pink-600"
        >
          Increase
        </button>
      </div>
    </>
  );
};

export default Counter;
