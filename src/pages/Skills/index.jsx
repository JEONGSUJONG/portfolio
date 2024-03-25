import React from "react";
import Backend from "./SkillsComponent/Backend";
import Frontend from "./SkillsComponent/Frontend";
import Language from "./SkillsComponent/Language";
import Etc from "./SkillsComponent/Etc";

const Skills = () => {
  return (
    <div>
      <div className="text-blue-500 text-4xl font-bold mb-14">SKILLS</div>
      <div className="flex justify-between mb-4">
        <Backend />
        <Frontend />
      </div>
      <div className="flex justify-between mb-4">
        <Language />
        <Etc />
      </div>
    </div>
  );
};

export default Skills;
