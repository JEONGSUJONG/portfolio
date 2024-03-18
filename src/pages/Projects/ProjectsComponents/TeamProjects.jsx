import React from "react";
import * as ST from "./style";
import Tag from "./Tag";

const TeamProjects = () => {
  return (
    <ST.Container>
      <ST.Projects>
        <ST.PerProject>
          <img src="/duck.png" alt="IT'S ME!" />
          <h1>MasilCoffee</h1>
          <p>2023.10 ~ 2023.11</p>
          <div className="mt-2 text-left h-[50px]">
            <Tag tags={["Node.js", "Express", "MongoDB", "pm2", "Amazon S3"]} />
          </div>
        </ST.PerProject>
      </ST.Projects>
    </ST.Container>
  );
};

export default TeamProjects;
