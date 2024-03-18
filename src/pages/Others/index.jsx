import React from "react";
import BootCamp from "./OthersComponents/BootCamp";
import Awards from "./OthersComponents/Awards";
import Certification from "./OthersComponents/Certification";

const Others = () => {
  return (
    <div>
      <div className="text-blue-500 text-2xl font-bold mb-14">OTHERS</div>
      <BootCamp />
      <Awards />
      <Certification />
    </div>
  );
};

export default Others;
