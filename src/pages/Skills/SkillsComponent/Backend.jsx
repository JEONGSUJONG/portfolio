import React, { useState } from "react";
import * as ST from "./style";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import ProgressBar from "@ramonak/react-progress-bar";

const Backend = () => {
  const [showBackend, setShowBackend] = useState(false);

  const toggleBackend = () => {
    setShowBackend(!showBackend);
  };

  return (
    <ST.Container onClick={toggleBackend}>
      <ST.Title>
        Backend
        {!showBackend ? (
          <SlArrowDown
            style={{
              fontSize: "15px",
              color: "black",
              marginLeft: "auto",
              marginRight: "20px",
            }}
          />
        ) : (
          <SlArrowUp
            style={{
              fontSize: "15px",
              color: "black",
              marginLeft: "auto",
              marginRight: "20px",
            }}
          />
        )}
      </ST.Title>
      <hr className="my-4" />
      {showBackend && (
        <>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-green-800 font-bold">NodeJS</p>
              <ProgressBar
                className="w-[60%] pb-2 pt-1"
                completed={80}
                bgColor="green"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              Node.js를 활용하여 RESTful한 서버 측 JavaScript 어플리케이션을
              개발할 수 있습니다.
            </p>
          </div>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-green-800 font-bold">Express</p>
              <ProgressBar
                className="w-[60%] pb-2 pt-1"
                completed={60}
                bgColor="green"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              Express 프레임워크를 사용하여 빠르고 간편하게 Node.js 웹
              애플리케이션을 개발할 수 있습니다.
            </p>
          </div>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-green-800 font-bold">AWS</p>
              <ProgressBar
                className="w-[60%] pb-2 pt-1"
                completed={30}
                bgColor="green"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              AWS의 클라우드 서비스를 이용하여 EC2 배포 및 S3 버킷을 통해 파일
              저장과 관리 경험이 있습니다.
            </p>
          </div>
        </>
      )}
    </ST.Container>
  );
};

export default Backend;
