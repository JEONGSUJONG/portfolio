import React, { useState } from "react";
import * as ST from "./style";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import ProgressBar from "@ramonak/react-progress-bar";

const Etc = () => {
  const [showETC, setShowETC] = useState(false);

  const toggleETC = () => {
    setShowETC(!showETC);
  };
  return (
    <ST.Container onClick={toggleETC}>
      <ST.Title>
        Etc{" "}
        {!showETC ? (
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
      {showETC && (
        <>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-black font-bold">Git</p>
              <ProgressBar
                className="w-[60%] pb-2 pt-1"
                completed={80}
                bgColor="black"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              Git을 사용하여 버전 관리를 하고 협업 프로젝트를 관리합니다.
            </p>
          </div>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-black font-bold">Pm2</p>
              <ProgressBar
                className="w-[60%] pb-2 pt-1"
                completed={20}
                bgColor="black"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              Pm2를 사용하여 Node.js 어플리케이션을 관리하고 프로세스를
              관리합니다.
            </p>
          </div>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-black font-bold">MongoDB</p>
              <ProgressBar
                className="w-[60%] pb-2 pt-1"
                completed={80}
                bgColor="black"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              MongoDB를 사용하여 NoSQL 데이터베이스를 설계하고 조작합니다.
            </p>
          </div>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-black font-bold">
                Postman / Swagger
              </p>
              <ProgressBar
                className="w-[60%]"
                completed={70}
                bgColor="black"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              Postman 또는 Swagger를 사용하여 API 엔드포인트를 테스트하고
              문서화합니다.
            </p>
          </div>
        </>
      )}
    </ST.Container>
  );
};

export default Etc;
