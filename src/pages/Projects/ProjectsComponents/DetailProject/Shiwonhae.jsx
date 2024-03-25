import React from "react";
import * as ST from "../style";
import Tag from "../Tag";

const Shiwonhae = () => {
  const handleClick = () => {
    window.open(
      "https://github.com/JEONGSUJONG/teamproject-shiwonhae",
      "_blank"
    );
  };

  return (
    <ST.PerProject onClick={handleClick}>
      <img src="./bgshiwonhae.png" alt="IT'S ME!" />
      <h1>시워언해</h1>
      <p>2024.03 ~ ing</p>
      <div className="mt-2 text-left h-[50px]">
        <Tag
          position={"fullstack"}
          backend={["node.js", "express", "mongodb", "jwt", "s3bucket"]}
          frontend={["react", "vite", "axios", "redux", "styledcomponent"]}
        />
      </div>
    </ST.PerProject>
  );
};

export default Shiwonhae;
