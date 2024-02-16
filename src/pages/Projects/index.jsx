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
    margin: 1px;
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
    background: white;
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
    color: green;
    text-align: center;
    font-weight: bold;
    
    p {
        font-size: 15px;
    }
`;

const Description = styled.div`
    font-size: 20px;
    text-align: center;
    color: black;
    font-weight: bold;

    p {
        font-weight: solid;
        padding: 15px;
        font-size: 17px;
        text-align: center;
    }
`;

const Link = styled.a`
    text-decoration: underline;
    color: green;
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
                            『 MASIL COFFEE 』
                            <p>2023.11.13 ~ 2023.12.01</p>
                        </Title>
                        <Description>
                            <br />
                            [ DESCRIPTION ]
                            <p>
                                엘리스 SW 트랙 부트캠프에서 진행한 팀 프로젝트입니다.
                                "커피 마시러 마실 나가자!" 라는 주제로 사용자들에게 커피 주문 및 개개인의 "꿀조합"을 공유하는 커뮤니티 겸 판매 사이트를 제작하였습니다.
                                약 3주간 진행하였으며 백엔드를 담당하였습니다.
                            </p>
                        </Description>
                        <Description>
                            [ Tech Stack ]
                            <p>Javascript, Node.js, Express, MongoDB, AWS</p>
                        </Description>
                        <Link href="https://github.com/JEONGSUJONG/project-masilcoffee" target="_blank">
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
