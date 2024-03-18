import React, { useState } from "react";
import * as ST from "./style";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Backend = () => {
  const [showBackend, setShowBackend] = useState(false);

  const toggleBackend = () => {
    setShowBackend(!showBackend);
  };

  return (
    <ST.Container onClick={toggleBackend}>
      <ST.Title>
        Backend{" "}
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
        <ST.Table>
          <tbody>
            <tr>
              <td>
                <span>Node.js</span>
              </td>
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
            <tr>
              <td>
                <span>AWS</span>
              </td>
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
            <tr>
              <td>
                <span>Express</span>
              </td>
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
          </tbody>
        </ST.Table>
      )}
    </ST.Container>
  );
};

export default Backend;
