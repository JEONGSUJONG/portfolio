import styled from "styled-components";
import * as CS from "../../Style/CommonStyle";

export const Container = styled.div`
  margin-left: 20px;
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;

export const PerProject = styled.button`
  margin-top: 50px;
  width: 33%;
  img {
    width: 95%;
    height: 300px;
    border: 1px solid black;
  }

  h1 {
    font-size: ${CS.fontSize.text_lg};
    margin-top: 10px;
    font-weight: bold;
    text-align: left;
  }

  p {
    font-size: ${CS.fontSize.text_sm};
    color: ${CS.color.gray};
    text-align: left;
  }
`;
