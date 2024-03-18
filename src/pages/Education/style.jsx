import styled from "styled-components";
import * as CS from "../Style/CommonStyle";

export const Container = styled.div``;

export const InnerContainer = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const Detail = styled.div`
  width: 300px;
  h1 {
    font-size: ${CS.fontSize.text_lg};
    font-weight: bold;
  }
  h2 {
    font-size: ${CS.fontSize.text_md};
    color: ${CS.color.gray};
    padding-bottom: 5px;
  }
  p {
    color: ${CS.color.gray};
    font-size: ${CS.fontSize.text_sm};
  }
`;
