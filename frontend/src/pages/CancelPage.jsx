import React from "react";

const CancelPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <div className="flex flex-col justify-center border-4 p-10 border-gray-200 items-center gap-2 text-3xl font-medium tracking-wide">
        <p className="text-gray-500">Sorry, something went wrong</p>
        <p className="text-gray-500">Please try again</p>
      </div>
    </div>
  );
};

export default CancelPage;
