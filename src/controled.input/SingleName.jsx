import React from "react";
import { FaTrash } from "react-icons/fa";

const SingleName = ({ name }) => {
  return (
    <div className="p-5 shadow shadow-pink-500 rounded-md flex justify-between items-center">
      {name} <FaTrash />
    </div>
  );
};

export default SingleName;
