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
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
            <tr>
              <td>
                <span>Java</span>
              </td>
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
          </tbody>
        </ST.Table>
      )}
    </ST.Container>
  );
};

export default Language;
