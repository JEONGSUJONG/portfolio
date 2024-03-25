import React from "react";
import * as ST from "./style";

const Vanillatodo = () => {
  return (
    <ST.Container>
      <ST.InnerContainer>
        <span>VanillaJS 학습 레포지토리{" : "} </span>
        <a
          href="https://github.com/JEONGSUJONG/nodejs-advanced"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/JEONGSUJONG/vanillajs-todolist
        </a>
      </ST.InnerContainer>
    </ST.Container>
  );
};

export default Vanillatodo;
