import React from "react";

const Spinner = () => {
  return (
    <div
      style={{ borderTopColor: "transparent" }}
      className="w-16 h-16 border-4 border-black border-dotted rounded-full animate-spin mx-auto"
    ></div>
  );
};

export default Spinner;
