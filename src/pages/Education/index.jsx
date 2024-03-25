import React from "react";
import * as ST from "./style";

const Education = () => {
  return (
    <div>
      <div className="text-blue-500 text-2xl font-bold mb-14">EDUCATION</div>
      <ST.Container>
        <ST.InnerContainer>
          <ST.Detail>
            <h1>국립 한밭대학교</h1>
            <h2>정보통신공학과</h2>
            <p>2016.03 ~ 2022.03</p>
          </ST.Detail>
          <p>
            정보통신공학과는 기초적인 hw와 sw를 학습하고 있습니다. hw 측면에선
            전자기기의 통신과 정보이론 5G에서 사용되는 레이더 등 정보통신에 관한
            원리에 대해 학습합니다. sw 측면에서는 C, C++, java의 기본적인
            사용법을 익히고 이를 활용하여 자료구조 및 알고리즘을 학습합나다.
            또한, 정보보안, 암호화 및 데이터 통신에 관해서도 학습합니다.
          </p>
        </ST.InnerContainer>
        <hr className="my-6" />
      </ST.Container>
    </div>
  );
};

export default Education;
