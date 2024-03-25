import React from "react";
import * as ST from "./style";

const Certification = () => {
  return (
    <ST.Container>
      <ST.Title>자격증</ST.Title>
      <ST.InnerContainer>
        <ST.Detail>
          <h2>CCNA</h2>
          <p>2022.04 ~ 2025.04</p>
        </ST.Detail>
        <p>
          CCNA는 시스코의 네트워크 기술 능력을 검증하는 자격증입니다. 라우팅,
          스위칭, 네트워크 보안 등 다양한 네트워크 관련 지식을 습득할 수
          있었습니다.
        </p>
      </ST.InnerContainer>
      <hr className="my-6" />
      <ST.InnerContainer>
        <ST.Detail>
          <h2>네트워크 관리사 2급</h2>
          <p>2023.07 ~ 2023.11</p>
        </ST.Detail>
        <p>
          네트워크 관리사는 서버를 구축하고 보안 설정, 시스템 최적화 등 네트워크
          구축 및 이를 효과적으로 관리할 수 있는 인터넷 관련 기술력에 대한
          자격증이다. (네트워크 일반, TCP/IP, 네트워크 운용 기기 등)
        </p>
      </ST.InnerContainer>
      <hr className="my-6" />
      <ST.InnerContainer>
        <ST.Detail>
          <h2>정보처리기사 (필기)</h2>
        </ST.Detail>
        <p></p>
      </ST.InnerContainer>
      <hr className="my-6" />
    </ST.Container>
  );
};

export default Certification;
