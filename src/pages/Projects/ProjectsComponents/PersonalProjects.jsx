import React from "react";
import * as ST from "./style";
import Barrel from "./DetailProject/Barrel";
import Portfolio from "./DetailProject/Portfolio";

const PersonalProjects = () => {
  return (
    <ST.Container>
      <ST.Projects>
        <Barrel />
        <Portfolio />
      </ST.Projects>
    </ST.Container>
  );
};

export default PersonalProjects;
