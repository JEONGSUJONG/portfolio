import { FaNode, FaAws, FaReact, FaJava, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import React from "react";
import styled from "styled-components";
// import {SiMongodb, SiPostman} from "react-icons/si"
// import {FaGithub} from "react-icons/fa";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;    
`;

const Box = styled.div`
    margin: 5px;
    width: 25vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
`;

const InnerBox = styled.div`
    margin: 10px;
    width: 23vw;
    height: auto;
    color: white;
    border: 2px solid rgb(74, 222, 128);
    border-radius: 10px;
    transition: transform 0.3s;

    p {
        font-size: 15px;
    }
    &:hover {
        transform: scale(1.03);
    }
`;

const Skills = () => {
    const textShadowStyle = { textShadow: "0 0 10px rgba(74, 222, 128, 1.0)" };
    return (
        <div id="skills" className="mb-10 text-black">
            .
            <div className="fixed-height" >
                <div className="flex flex-col items-center p-4 mt-10 mb-10 font-bold text-4xl text-green-300" style={textShadowStyle}>
                    &lt; My Skills &gt;
                    <hr className="border-t border-green-300 border-2 w-20 mt-5" />
                </div>
                <Container>
                    <Box>
                        <h1 className="text-2xl mb-10"> 『 BACKEND 』</h1>
                        <InnerBox>
                            <h1 className="flex"><FaNode className="text-7xl ml-5 mr-5 text-green-300" /><span className="text-lg mt-10"> : Node.js</span></h1>
                            <ul>
                                <li className="m-3"> - Node.js가 작동하는 법에 대해 이해하고 있습니다.</li>
                                <li className="m-3"> - express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다.</li>
                                <li className="m-3"> - 모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.</li>
                            </ul>
                        </InnerBox>
                        <InnerBox>
                            <h1 className="flex"><FaAws className="text-7xl ml-5 mr-5 text-green-300" /><span className="text-lg mt-10"> : AWS</span></h1>
                            <ul>
                                <li className="m-3"> - Node.js가 작동하는 법에 대해 이해하고 있습니다.</li>
                                <li className="m-3"> - express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다.</li>
                                <li className="m-3"> - 모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.</li>
                            </ul>
                        </InnerBox>
                    </Box>
                    <Box>
                        <h1 className="text-2xl mb-10" > 『 FRONTEND 』</h1>
                        <InnerBox>
                            <h1 className="flex"><FaReact className="text-7xl ml-5 mr-5  text-green-300" /><span className="text-lg mt-10"> : React</span></h1>
                            <ul>
                                <li className="m-3"> - Node.js가 작동하는 법에 대해 이해하고 있습니다.</li>
                                <li className="m-3"> - express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다.</li>
                                <li className="m-3"> - 모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.</li>
                            </ul>
                        </InnerBox>
                        <InnerBox>
                            <h1 className="flex"><FaCss3Alt className="text-7xl ml-5 mr-5 text-green-300" /><span className="text-lg mt-10"> : CSS</span></h1>
                            <ul>
                                <li className="m-3"> - Tailwind 및 styledComponent를 사용할 수 있습니다.</li>
                                <li className="m-3"> - express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다.</li>
                                <li className="m-3"> - 모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.</li>
                            </ul>
                        </InnerBox>
                    </Box>
                    <Box>
                        <h1 className="text-2xl mb-10"> 『 Language 』</h1>
                        <InnerBox>
                            <h1 className="flex"><SiJavascript className="text-7xl ml-5 mr-5  text-green-300" /><span className="text-lg mt-10"> : Javascript</span></h1>
                            <ul>
                                <li className="m-3"> - Node.js가 작동하는 법에 대해 이해하고 있습니다.</li>
                                <li className="m-3"> - express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다.</li>
                                <li className="m-3"> - 모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.</li>
                            </ul>
                        </InnerBox>
                        <InnerBox>
                            <h1 className="flex"><FaJava className="text-7xl ml-5 mr-5 text-green-300" /><span className="text-lg mt-10"> : Java</span></h1>
                            <ul>
                                <li className="m-3"> - Node.js가 작동하는 법에 대해 이해하고 있습니다.</li>
                                <li className="m-3"> - express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다.</li>
                                <li className="m-3"> - 모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.</li>
                            </ul>
                        </InnerBox>
                    </Box>
                    {/* <Box>
                    <h1 className="text-2xl text-green-300 mb-10" style={textShadowStyle}> 『 ETC 』</h1>
                    <InnerBox>
                        <h1 className="flex"><FaGithub className="text-7xl ml-5 mr-5  text-green-300" /><span className="text-lg mt-10"> : Git/Github</span></h1>
                        <ul>
                            <li className="m-3"> - Node.js가 작동하는 법에 대해 이해하고 있습니다.</li>
                            <li className="m-3"> - express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다.</li>
                            <li className="m-3"> - 모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.</li>
                        </ul>
                    </InnerBox>
                    <InnerBox>
                        <h1 className="flex"><SiMongodb className="text-7xl ml-5 mr-5 text-green-300" /><span className="text-lg mt-10"> : MongoDB</span></h1>
                        <ul>
                            <li className="m-3"> - Node.js가 작동하는 법에 대해 이해하고 있습니다.</li>
                            <li className="m-3"> - express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다.</li>
                            <li className="m-3"> - 모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.</li>
                        </ul>
                    </InnerBox>
                    <InnerBox>
                        <h1 className="flex"><SiPostman className="text-7xl ml-5 mr-5 text-green-300" /><span className="text-lg mt-10"> : Postman</span></h1>
                        <ul>
                            <li className="m-3"> - Node.js가 작동하는 법에 대해 이해하고 있습니다.</li>
                            <li className="m-3"> - express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다.</li>
                            <li className="m-3"> - 모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.</li>
                        </ul>
                    </InnerBox>
                </Box> */}
                </Container>
            </div>
        </div>
    );
};

export default Skills;

