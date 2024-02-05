import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    flex-wrap: wrap;
`;

const ProjectBox = styled.div`
    margin: 10px;
    width: 25%;
    height: 300px;
    display: flex;
    border: 2px solid white;
`;

const Education = () => {
    const textShadowStyle = { textShadow: "0 0 10px rgba(74, 222, 128, 1.0)" };
    return (
        <div id="education" className="mb-10 text-black">
            .
            <div className="fixed-height">
                <div className="flex flex-col items-center p-4 mt-10 mb-10 font-bold text-4xl text-green-300" style={textShadowStyle}>
                    &lt; Education &gt;
                    <hr className="border-t border-green-300 border-2 w-20 mt-5" />
                </div >
                <Container>
                    <ProjectBox>
                        Hi
                    </ProjectBox>
                    <ProjectBox>
                        Hi
                    </ProjectBox>
                    <ProjectBox>
                        Hi
                    </ProjectBox>
                    <ProjectBox>
                        Hi
                    </ProjectBox>
                    <ProjectBox>
                        Hi
                    </ProjectBox>
                    <ProjectBox>
                        Hi
                    </ProjectBox>
                </Container>
            </div >
        </div>
    );
};

export default Education;
