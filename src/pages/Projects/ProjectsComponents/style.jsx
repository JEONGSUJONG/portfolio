import styled from "styled-components";
import * as CS from "../../Style/CommonStyle";

export const Container = styled.div`
  margin-left: 20px;
  margin-bottom: 100px;
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export const PerProject = styled.button`
  margin-top: 50px;
  width: 30%;
  img {
    width: 100%;
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
