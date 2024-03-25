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
          저는 열정적이고 성실한 개발자로서, 항상 새로운 기술을 배우고 문제를
          해결하는 데에 흥미를 느끼고 있습니다. <br />
          NodeJS를 중심으로 한 백엔드 개발 경험을 토대로 고객 요구에 맞는
          안정적이고 효율적인 솔루션을 제공하는 것을 목표로 하고 있습니다.
          <br />
          주어진 업무에 대해 책임감 있게 임무를 완수하며, 동료들과 원활한
          커뮤니케이션을 통해 팀 프로젝트의 성공을 위해 노력합니다. <br />
          <br />
          제가 가진 기술적인 역량과 끊임없는 열정을 바탕으로 1%의 데이터 성능
          향상을 위해 노력하겠으며 부족한 부분은 있을 수 있지만 항상 성장하고
          발전하는 모습으로 보답드리겠습니다.
        </ST.Content>
      </ST.InnerContainer>
    </>
  );
};

export default Aboutme;
