// Github , Blogs
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="flex flex-col text-4xl items-center justify-center bg-black text-white" style={{ height: "150px" }}>
            <div className="flex space-x-10 text-7xl">
                <a href="https://github.com/JEONGSUJONG" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://jeongsujong.github.io/" target="_blank" rel="noreferrer">
                    <BsBootstrapFill />
                </a>
            </div>
            <div className="mt-3 text-xs">
                © JEONGSUJONG. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
