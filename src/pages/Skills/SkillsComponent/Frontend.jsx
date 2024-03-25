import React, { useState } from "react";
import * as ST from "./style";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import ProgressBar from "@ramonak/react-progress-bar";

const FrontEnd = () => {
  const [showFrontend, setShowFrontend] = useState(false);

  const toggleFrontend = () => {
    setShowFrontend(!showFrontend);
  };
  return (
    <ST.Container onClick={toggleFrontend}>
      <ST.Title>
        Frontend{" "}
        {!showFrontend ? (
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
      {showFrontend && (
        <>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-blue-800 font-bold">React</p>
              <ProgressBar
                className="w-[60%] pb-2 pt-1"
                completed={80}
                bgColor="blue"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              React를 사용하여 동적이고 효율적인 사용자 인터페이스를 개발할 수
              있습니다.
            </p>
          </div>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-blue-800 font-bold">Redux</p>
              <ProgressBar
                className="w-[60%] pb-2 pt-1"
                completed={20}
                bgColor="blue"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              Redux를 통해 애플리케이션 상태를 효율적으로 관리하고 상태 변화를
              추적할 수 있습니다.
            </p>
          </div>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-blue-800 font-bold">CSS</p>
              <ProgressBar
                className="w-[60%] pb-2 pt-1"
                completed={70}
                bgColor="blue"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              tailwind 및 styledcomponent를 사용하여 웹 페이지를 디자인하고
              스타일링할 수 있습니다.
            </p>
          </div>
        </>
      )}
    </ST.Container>
  );
};

export default FrontEnd;
