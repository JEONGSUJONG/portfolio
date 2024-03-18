import React from "react";
import * as ST from "./style";
import { Link } from "react-router-dom";
import Tag from "./Tag";

const PersonalProjects = () => {
  return (
    <ST.Container>
      <ST.Projects>
        <ST.PerProject as={Link} to="/project/barrel">
          <img src="/duck.png" alt="IT'S ME!" />
          <h1>BARREL</h1>
          <p>2023.10 ~ 2023.11</p>
          <div className="mt-2 text-left h-[50px]">
            <Tag tags={["Node.js", "Express", "MongoDB", "pm2", "Amazon S3"]} />
          </div>
        </ST.PerProject>
      </ST.Projects>
    </ST.Container>
  );
};

export default PersonalProjects;
