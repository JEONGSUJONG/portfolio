import React from "react";
import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";

const StyledReactIcon = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
    padding: 4px;
    color: white;
    
    & > svg {
        font-size: 50px;
        margin-right: 15px;
    }

    & > span {
        font-size: 20px;
    }
`;

const Contact = () => {
    const textShadowStyle = { textShadow: "0 0 10px rgba(74, 222, 128, 1.0)" };
    return (
        <div id="contact" className="mb-10 text-black">
            .
            <div id="contact" className="fixed-height mt-16 flex items-center justify-center text-green-300 p-4">
                <div
                    className="mr-6"
                    style={{
                        pointerEvents: 'none',
                    }}
                >
                    <img src="/ME.jpg" alt="IT'S ME!" className="rounded-lg" style={{ width: "250px", height: "300px" }} />


                </div>
                <div className="ml-12">
                    <h1 className="text-4xl font-bold" style={textShadowStyle}>
                        &lt; Contact &gt;
                    </h1>
                    <div className="mt-2 p-4">
                        <StyledReactIcon>
                            <IoPersonCircleOutline />
                            <span>NAME : {" "}
                                <span className="text-green-300">
                                    정수종
                                </span>
                            </span>
                        </StyledReactIcon>
                        <StyledReactIcon>
                            <CiPhone />
                            <span>PHONE : {" "}
                                <span className="text-green-300">
                                    010-9573-8038
                                </span>
                            </span>
                        </StyledReactIcon>
                        <StyledReactIcon>
                            <AiOutlineMail />
                            <span>EMAIL : {" "}
                                <a href="mailto:jeon95ujong@gmail.com" className="underline text-green-300 hover:text-blue-500">
                                    jeon95ujong@gmail.com
                                </a>
                            </span>
                        </StyledReactIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
