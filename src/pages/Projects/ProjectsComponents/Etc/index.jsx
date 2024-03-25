import React from "react";
import Nodejs from "./EtcDetail/Nodejs";
import Reactconverter from "./EtcDetail/Reactconverter";
import Reactmovie from "./EtcDetail/Reactmovie";
import Vanillatodo from "./EtcDetail/Vanillatodo";

const EtcRepo = () => {
  return (
    <div>
      <Nodejs />
      <Reactconverter />
      <Reactmovie />
      <Vanillatodo />
    </div>
  );
};

export default EtcRepo;
