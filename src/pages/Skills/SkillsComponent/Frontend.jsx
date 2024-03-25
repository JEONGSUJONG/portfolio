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
              <td>
                <p>
                  React를 사용하여 동적이고 효율적인 사용자 인터페이스를 개발할
                  수 있습니다.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>Redux</span>
              </td>
              <td>
                <p>
                  Redux를 통해 애플리케이션 상태를 효율적으로 관리하고 상태
                  변화를 추적할 수 있습니다.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>CSS</span>
              </td>
              <td>
                <p>
                  tailwind 및 styledcomponent를 사용하여 웹 페이지를 디자인하고
                  스타일링할 수 있습니다.
                </p>
              </td>
            </tr>
          </tbody>
        </ST.Table>
      )}
    </ST.Container>
  );
};

export default FrontEnd;
