import React from "react";
import * as ST from "./style";

const Aboutme = () => {
  return (
    <>
      <ST.Title>ABOUT ME</ST.Title>
      <ST.InnerContainer>
        <ST.Image src="./ME.jpg" alt="IT'S ME!" />
        <ST.Content className="ml-6">
          안녕하세요. NodeJS 백엔드 개발자{" "}
          <span className="font-bold">정수종</span>입니다. <br />
          대학교 1학년 1학기, 콘솔창에 "Hello World"를 출력하며 개발자로서의 첫
          발자국을 내딛었습니다. <br />
          오로지 소비의 수단이었던 노트북을 생산의 수단으로서 활용하는 재미에
          빠진지 어느덧 4년이 지났습니다. <br />
          아직 배울 것이 많지만, 그만큼 더 성장할 수 있음에 감사합니다. <br />
          개발과 동료, 그리고 JS를 사랑합니다.
        </ST.Content>
      </ST.InnerContainer>
    </>
  );
};

export default Aboutme;
