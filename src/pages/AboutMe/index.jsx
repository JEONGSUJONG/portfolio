import React from "react";
import Aboutme from "./AboutMeComponent/Aboutme";
import Contact from "./AboutMeComponent/Contact";

const AboutMe = () => {
  return (
    <div className="flex gap-8">
      <div className="w-[48%]">
        <Aboutme />
      </div>
      <div className="w-[48%]">
        <Contact />
      </div>
    </div>
  );
};

export default AboutMe;
