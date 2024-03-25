import React, { useState } from "react";
import * as ST from "./style";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

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
        <ST.Table>
          <tbody>
            <tr>
              <td>
                <span>Git</span>
              </td>
              <td>
                <p>
                  Git을 사용하여 버전 관리를 하고 협업 프로젝트를 관리합니다.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>Pm2</span>
              </td>
              <td>
                <p>
                  Pm2를 사용하여 Node.js 어플리케이션을 관리하고 프로세스를
                  관리합니다.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>MongoDB</span>
              </td>
              <td>
                <p>
                  MongoDB를 사용하여 NoSQL 데이터베이스를 설계하고 조작합니다.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>Postman / Swagger</span>
              </td>
              <td>
                <p>
                  Postman 또는 Swagger를 사용하여 API 엔드포인트를 테스트하고
                  문서화합니다.
                </p>
              </td>
            </tr>
          </tbody>
        </ST.Table>
      )}
    </ST.Container>
  );
};

export default Etc;
