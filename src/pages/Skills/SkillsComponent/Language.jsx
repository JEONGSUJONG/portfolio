import React, { useState } from "react";
import * as ST from "./style";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

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
        <ST.Table>
          <tbody>
            <tr>
              <td>
                <span>Javascript</span>
              </td>
              <td>
                <p>Javascript를 활용하여 웹 애플리케이션을 개발합니다.</p>
              </td>
            </tr>
            <tr>
              <td>
                <span>Java</span>
              </td>
              <td>
                <p>
                  Java를 주언어로 알고리즘 및 자료구조에 대한 이해를 위해 코딩 테스트를 준비하고 있으며 객체지향에 대한 이해도가 있습니다.
                </p>
              </td>
            </tr>
          </tbody>
        </ST.Table>
      )}
    </ST.Container>
  );
};

export default Language;
