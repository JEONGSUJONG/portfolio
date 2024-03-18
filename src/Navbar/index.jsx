import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="fixed top-0 w-full flex justify-between z-10 shadow-lg bg-white">
        <div className="mt-2 text-sm ml-auto mr-20 SMN_effect-24">
          <a href="#AboutMe">ABOUT_ME</a>
          <a href="#Skills">SKILLS</a>
          <a href="#Projects">PROJECTS</a>
          <a href="#Education">EDUCATION</a>
          <a href="#Others">OTHERS</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
