import React from "react";

const Singleuser = ({
  id,
  name,
  image,
  work,
  dob,
  desc,
  salery,
  dekhao,
  setdekhao,
  setCheak,
  cheak,
}) => {
  const handleData = () => {
    setdekhao(true);
    setCheak(id);
  };

  return (
    <>
      <div className="flex justify-between my-2 shadow p-4 item-center">
        <div className="flex gap-4">
          <img
            className="w-[60px] h-{60px} object-cover rounded-full"
            src={image}
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="text-xl">{name}</h2>
            <p className="text-gray-500">{work}</p>
          </div>
        </div>

        <button
          onClick={handleData}
          className="px-4 py-2 border hover:bg-purple-500 hover:text-white cursor-pointer active:scale-95 border-purple-500 rounded-full"
        >
          View
        </button>
      </div>
    </>
  );
};

export default Singleuser;
