import React from "react";
import * as ST from "../style";
import Tag from "../Tag";

const Barrel = () => {
  const handleClick = () => {
    window.open("https://github.com/JEONGSUJONG/project-barrel", "_blank");
  };

  return (
    <ST.PerProject onClick={handleClick}>
      <img src="./bgbarrel.png" alt="IT'S ME!" />
      <h1>BARREL</h1>
      <p>2024.02 ~ ing</p>
      <div className="mt-2 text-left h-[50px]">
        <Tag
          position={"fullstack"}
          backend={["node.js", "express", "mongodb", "jwt"]}
          frontend={["react", "vite", "axios", "redux", "tailwind"]}
        />
      </div>
    </ST.PerProject>
  );
};

export default Barrel;
