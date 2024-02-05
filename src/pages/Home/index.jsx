import React from "react";
import useScrollOpacity from "../scrollOpacity";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
    const textShadowStyle = { textShadow: "0 0 10px rgba(74, 222, 128, 1.0)" };
    const opacity = useScrollOpacity();
    const [text] = useTypewriter({
        words: ['BACKEND', 'JUNIOR'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 100,
    });

    return (
        <div
            id="Home"
            className="flex items-center justify-center w-full bg-cover"
            style={{
                height: '100vh',
                backgroundImage: 'url("/main.gif")',
                backgroundAttachment: 'fixed',
                pointerEvents: 'none',
            }}
        >
            <div className="text-white" style={{ opacity: opacity }}>
                <div className="text-box">
                    <h1 className="text-lg" style={textShadowStyle}>Thanks to visit !</h1>
                    <h1 className="mt-6 text-bold text-6xl">
                        I'M {" "}
                        <span className="text-bold text-green-400" style={textShadowStyle}>
                            {text}
                        </span>
                        <span className="text-green-400">
                            <Cursor cursorStyle='|' />
                        </span>
                        <br />
                        DEVELOPER.
                    </h1>
                    <p className="text-white mt-12 text-lg">
                        안녕하세요, 저는 <span className="text-green-300" style={textShadowStyle}>정수종</span>입니다.<br />
                        새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다. <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
