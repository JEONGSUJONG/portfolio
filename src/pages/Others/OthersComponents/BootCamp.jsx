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
          교육입니다. 엘리스 트랙을 통해 협업에서 사용하는 기술 스택에 대해
          배웠으며, 현업 개발팀 방식 그대로 실무 프로젝트를 경험하였습니다. 뿐만
          아니라, React와 NodeJS을 통한 실제 프로젝트를 경험함으로써 팀원과의
          협업의 중요성을 몸소 체험할 수 있었습니다. 이 과정을 거치며 NodeJS에
          대한 흥미를 느꼈고 NodeJS에 대해 더 심도있게 활용하고자
          마음먹었습니다.
        </p>
      </ST.InnerContainer>
      <hr className="my-6" />
    </ST.Container>
  );
};

export default BootCamp;
