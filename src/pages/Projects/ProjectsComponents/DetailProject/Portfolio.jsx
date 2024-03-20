import React from "react";
import * as ST from "../style";
import Tag from "../Tag";

const Portfolio = () => {
  const handleClick = () => {
    window.open("https://github.com/JEONGSUJONG/portfolio", "_blank");
  };

  return (
    <ST.PerProject onClick={handleClick}>
      <img src="./test.png" alt="IT'S ME!" />
      <h1>Portfolio</h1>
      <p>2023.10 ~ 2023.11</p>
      <div className="mt-2 text-left h-[50px]">
        <Tag position={"frontend"} frontend={["react", "redux"]} />
      </div>
    </ST.PerProject>
  );
};

export default Portfolio;
