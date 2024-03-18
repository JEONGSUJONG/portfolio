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
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
            <tr>
              <td>
                <span>Pm2</span>
              </td>
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
            <tr>
              <td>
                <span>MongoDB</span>
              </td>
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
            <tr>
              <td>
                <span>Postman / Swagger</span>
              </td>
              <td>Node.js가 작동하는 법에 대해 이해하고 있습니다.</td>
            </tr>
          </tbody>
        </ST.Table>
      )}
    </ST.Container>
  );
};

export default Etc;
