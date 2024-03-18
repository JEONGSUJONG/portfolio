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
          멋쟁이 사자처럼은 IT 교육을 위한 비영리 단체입니다. 각 대학 별
          운영진들이 해당 대학의 학생들에게 프로그래밍을 무료로 가르쳐주며, 제가
          활동했던 6기 때에는 'Ruby on Rails'를 통한 웹 프로그래밍 구현을 교육
          하였습니다.
        </p>
      </ST.InnerContainer>
      <hr className="my-6" />
    </ST.Container>
  );
};

export default BootCamp;