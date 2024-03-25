import React from "react";
import * as ST from "./style";

const BootCamp = () => {
  return (
    <ST.Container>
      <ST.Title>코딩 부트캠프</ST.Title>
      <ST.InnerContainer>
        <ST.Detail>
          <h2>엘리스 트랙</h2>
          <p>2023.07 ~ 2023.11</p>
        </ST.Detail>
        <p>
          엘리스 sw 트랙은 프론트엔드 개발자 취업 준비생을 위한 16주 집중
          교육입니다. 현업에서 사용하는 기술 스택에 집중하여 배우고, 현업 개발팀
          방식 그대로 실무 프로젝트를 경험합니다. 이를 통해 NodeJS ~~
        </p>
      </ST.InnerContainer>
      <hr className="my-6" />
    </ST.Container>
  );
};

export default BootCamp;
