import React, { useEffect, useState } from "react";
import "../../App.css";
import useScrollOpacity from "../../pages/scrollOpacity";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const opacity = useScrollOpacity();

    useEffect(() => {
        setIsScrolled(opacity < 0.5);
    }, [opacity]);

    return (
      <div id="Navbar">
        <div
          className={`fixed top-0 w-full flex justify-between items-center z-10 shadow-lg ${
            isScrolled ? "bg-white transition-all duration-1200 linear" : ""
          }`}
        >
          <div
            className={`text-base mt-3 ml-auto mr-20 SMN_effect-24 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <a href="#Home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    );
};

export default NavBar;
