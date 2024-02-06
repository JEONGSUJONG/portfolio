import React from "react";
import styled from "styled-components";
// Router 적용하기
// project 배경은 jpg 로 하고 loading 적용
// hover 시 프로젝트 간단한 설명 
// 맡은 역할 및 tools ㅜㅜ
const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const ProjectBox = styled.div`
    position: relative;
    margin: 5px;
    width: 35%;
    height: 400px;
    display: flex;
    border: 2px solid white;
    overflow: hidden;

    &:hover {
        .overlay {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
`;

const Title = styled.div`
    font-size: 40px;
    color: rgb(134 239 172);
    text-align: center;

    p {
        font-size: 15px;
    }
`;

const Description = styled.div`
    font-size: 20px;
    text-align: center;

    p {
        padding: 10px;
        font-size: 16px;
        text-align: center;
    }
`;

const Link = styled.a`
    color: white;
    text-decoration: underline;
    color: rgb(134 239 172);
    text-align: center;
`;


const Projects = () => {
    const textShadowStyle = { textShadow: "0 0 10px rgba(74, 222, 128, 1.0)" };
    return (
        <div id="projects" className="mb-10 text-black">
            .
            <div className="fixed-height">
                <div className="flex flex-col items-center p-4 mt-10 mb-10 font-bold text-4xl text-green-300" style={textShadowStyle}>
                    &lt; Projects &gt;
                    <hr className="border-t border-green-300 border-2 w-20 mt-5" />
                </div>
            </div>
            <Container>
                <ProjectBox>
                    <Image src="/test1.jpg" alt="test" />
                    <Overlay className="overlay">
                        <Title>
                            『 ShoppingMall 』
                            <p>2024.01 ~ 2024.02</p>
                        </Title>
                        <Description>
                            <br />
                            [ DESCRIPTION ]
                            <p>대나무 숲에서 아이디어를 얻어 만든 반딧불이의 숲 프로젝트입니다.
                                익명으로 정보를 쓰고 다른 사람의 정보도 확인 할 수 있는 웹 앱입니다. Firebase를 통해 배포하였고, 약 2주동안 진행하였습니다.</p>
                        </Description>
                        <Description>
                            [ Tech Stack ]
                            <p>Javascript, React, Node.js, Express, MongoDB</p>
                        </Description>
                        <Link href="https://www.youtube.com" target="_blank">
                            &lt; 자세히보기 &gt;
                        </Link>
                    </Overlay>
                </ProjectBox>
                <ProjectBox>
                    <Image src="/test2.png" alt="test" />
                    <Overlay className="overlay">
                        <Title>『 Movie App 』</Title>
                        <Link href="https://www.youtube.com" target="_blank">
                            &lt; 자세히보기 &gt;
                        </Link>
                    </Overlay>
                </ProjectBox>
                <ProjectBox>
                </ProjectBox>
                <ProjectBox>
                </ProjectBox>
            </Container>
        </div>
    );
};

export default Projects;
