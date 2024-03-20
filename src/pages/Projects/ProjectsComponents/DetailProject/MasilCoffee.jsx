import React from "react";
import * as ST from "../style";
import Tag from "../Tag";

const MasilCoffee = () => {
  const handleClick = () => {
    window.open("https://github.com/JEONGSUJONG/project-barrel", "_blank");
  };
  return (
    <ST.PerProject onClick={handleClick}>
      <img src="/assets/images/duck.png" alt="IT'S ME!" />
      <h1>MasilCoffee</h1>
      <p>2023.10 ~ 2023.11</p>
      <div className="mt-2 text-left h-[50px]">
        <Tag
          position={"backend"}
          backend={["node.js", "express", "mongodb", "pm2", "amazon s3"]}
        />
      </div>
    </ST.PerProject>
  );
};

export default MasilCoffee;
