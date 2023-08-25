
import React from "react";

const CanvasLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="border-4 border-opacity-30 border-white border-solid rounded-full w-10 h-10 animate-spin"></div>
      <div className="mt-2 text-white text-sm">Loading...</div>
    </div>
  );
};

export default CanvasLoader;
