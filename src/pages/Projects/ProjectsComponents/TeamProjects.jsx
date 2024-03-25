import React from "react";
import * as ST from "./style";
import Masilcoffee from "./DetailProject/Masilcoffee";
import Shiwonhae from "./DetailProject/Shiwonhae";

const TeamProjects = () => {
  return (
    <ST.Container>
      <ST.Projects>
        <Shiwonhae />
        <Masilcoffee />
      </ST.Projects>
    </ST.Container>
  );
};

export default TeamProjects;
