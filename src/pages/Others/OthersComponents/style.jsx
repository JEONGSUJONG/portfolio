import styled from "styled-components";
import * as CS from "../../Style/CommonStyle";

export const Container = styled.div`
  margin-left: 20px;
`;

export const Title = styled.div`
  color: ${CS.color.darkblue};
  font-size: ${CS.fontSize.text_lg};
  font-weight: bold;
  padding: 10px 0px;
  margin-bottom: 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const Detail = styled.div`
  width: 300px;
  h2 {
    font-size: ${CS.fontSize.text_md};
    font-weight: bold;
    padding-bottom: 5px;
  }
  p {
    color: ${CS.color.gray};
    font-size: ${CS.fontSize.text_sm};
  }
`;
