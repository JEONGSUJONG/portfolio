import React from "react";
import * as ST from "../style";
import Tag from "../Tag";

const Portfolio = () => {
  const handleClick = () => {
    window.open("https://github.com/JEONGSUJONG/portfolio", "_blank");
  };

  return (
    <ST.PerProject onClick={handleClick}>
      <img src="./bgportfolio.png" alt="IT'S ME!" />
      <h1>포트폴리오</h1>
      <p>2024.02 ~ 2024.03</p>
      <div className="mt-2 text-left h-[50px]">
        <Tag
          position={"frontend"}
          frontend={["react", "vite", "styledcomponet", "tailwind"]}
        />
      </div>
    </ST.PerProject>
  );
};

export default Portfolio;
