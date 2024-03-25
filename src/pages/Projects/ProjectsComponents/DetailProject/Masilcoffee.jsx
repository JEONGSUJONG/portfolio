import React from "react";
import * as ST from "../style";
import Tag from "../Tag";

const Masilcoffee = () => {
  const handleClick = () => {
    window.open("https://github.com/JEONGSUJONG/project-masilcoffee", "_blank");
  };

  return (
    <ST.PerProject onClick={handleClick}>
      <img src="./bgmasilcoffee.png" alt="IT'S ME!" />
      <h1>마실커피</h1>
      <p>2023.10 ~ 2023.11</p>
      <div className="mt-2 text-left h-[50px]">
        <Tag
          position={"backend"}
          backend={[
            "node.js",
            "express",
            "mongodb",
            "pm2",
            "s3bucket",
            "jwt",
            "smtp",
          ]}
        />
      </div>
    </ST.PerProject>
  );
};

export default Masilcoffee;
