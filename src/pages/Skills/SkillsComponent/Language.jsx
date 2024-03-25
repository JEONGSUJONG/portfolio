import React, { useState } from "react";
import * as ST from "./style";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import ProgressBar from "@ramonak/react-progress-bar";

const Language = () => {
  const [showLanguage, setShowLanguage] = useState(false);

  const toggleLanguage = () => {
    setShowLanguage(!showLanguage);
  };
  return (
    <ST.Container onClick={toggleLanguage}>
      <ST.Title>
        Language{" "}
        {!showLanguage ? (
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
      {showLanguage && (
        <>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-red-800 font-bold">Javascript</p>
              <ProgressBar
                className="w-[60%] pb-2 pt-1"
                completed={70}
                bgColor="red"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              ES6문법 기반의 Javascript를 활용하여 웹 애플리케이션을 개발합니다.
            </p>
          </div>
          <div className="ml-4">
            <div>
              <p className="text-[17px] text-red-800 font-bold">Java</p>
              <ProgressBar
                className="w-[60%] pb-2 pt-1"
                completed={80}
                bgColor="red"
                baseBgColor="#e5e7eb"
                height="0.7rem"
                labelColor="white"
                labelSize="0.8rem"
              />
            </div>
            <p className="pt-1 pb-6 text-[15px]">
              Java를 활용하여 알고리즘 및 자료구조에 대한 이해를 위해 코딩
              테스트를 준비하고 있으며 객체지향에 대한 이해도가 있습니다.
            </p>
          </div>
        </>
      )}
    </ST.Container>
  );
};

export default Language;
