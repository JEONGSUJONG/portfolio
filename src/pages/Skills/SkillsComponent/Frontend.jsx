import React, { useState } from "react";
import * as ST from "./style";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

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
        <ST.Table>
          <tbody>
            <tr>
              <td>
                <span>React</span>
              </td>
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
            <tr>
              <td>
                <span>Redux</span>
              </td>
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
            <tr>
              <td>
                <span>Css</span>
              </td>
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
          </tbody>
        </ST.Table>
      )}
    </ST.Container>
  );
};

export default FrontEnd;
