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
              <td>
                <p>
                  Node.js를 활용하여 RESTful한 서버 측 JavaScript 어플리케이션을
                  개발할 수 있습니다.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>AWS</span>
              </td>
              <td>
                <p>
                  AWS의 클라우드 서비스를 이용하여 EC2 배포 및 S3 버킷을 통해
                  파일 저장과 관리 경험이 있습니다.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>Express</span>
              </td>
              <td>
                <p>
                  Express 프레임워크를 사용하여 빠르고 간편하게 Node.js 웹
                  애플리케이션을 개발할 수 있습니다.
                </p>
              </td>
            </tr>
          </tbody>
        </ST.Table>
      )}
    </ST.Container>
  );
};

export default Backend;
