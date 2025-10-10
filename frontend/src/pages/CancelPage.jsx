import React from "react";

const CancelPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2 text-3xl font-medium tracking-wide">
        <span className="text-gray-500">Sorry, something went wrong. Please try again. </span>
        <span className="w-16 h-[2.5px] bg-black"></span>
      </div>
    </div>
  );
};

export default CancelPage;
