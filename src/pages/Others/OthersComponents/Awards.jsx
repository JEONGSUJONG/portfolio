import React from "react";
import * as ST from "./style";

const Awards = () => {
  return (
    <ST.Container>
      <ST.Title>수상 내역</ST.Title>
      <ST.InnerContainer>
        <ST.Detail>
          <h2>교내 캡스톤디자인</h2>
        </ST.Detail>
        <p>
          "OFDM 레이더에서 딥러닝을 이용한 동적인 물체의 거리 및 속도 추정"
          이라는 주제로 프로젝트를 진행하여 교내 <span>동상</span>을
          수여받았습니다. OFDM은 4G, 5G에서 사용되는 이동통신 기술로 동시간대
          동주파수에서 여러 사용자가 사용할 수 있는 통신 기법입니다. 이미지
          분류에 보편적으로 사용되는 인공지능 기법 중 하나인 합성곱 신경망 CNN을
          사용하여 프로젝트를 진행하였습니다. 다소 생소한 주제로 진행하였지만
          저의 대학생 학습 내용이 함축되어있어 이러한 주제를 선택하였고 모르는
          것은 적극적으로 조교님과 교수님에게 질문하여 프로젝트를 성공적으로
          마무리 하였습니다.
        </p>
      </ST.InnerContainer>
      <hr className="my-6" />
      <ST.InnerContainer>
        <ST.Detail>
          <h2>엘리스 트랙</h2>
        </ST.Detail>
        <p>
          엘리스 sw 부트캠프에서 참여한 1차 프로젝트에서 <span>금상</span>을
          수상했습니다. 저는 NodeJS 기반의 백엔드 Product 모듈을 담당하였습니다.
          이 경험을 통해 RESTful API 설계와 데이터베이스 관리에 대한 경험을
          쌓았습니다. 프로젝트에서 금상을 수상한 것은 팀원과의 협업
          덕분이었으며, 저의 역할은 작았지만 어려운 것이 있으면 팀원과 논의하여
          해결책을 찾아내는 과정을 통해 협업 능력을 향상시키는 데
          집중하였습니다.
          <br />
          <a
            href="https://github.com/JEONGSUJONG/teamproject-shoppingmall"
            target="_blank"
            rel="noreferrer"
          >
            🔗 해당 링크로 이동
          </a>
        </p>
      </ST.InnerContainer>
      <hr className="my-6" />
    </ST.Container>
  );
};

export default Awards;
