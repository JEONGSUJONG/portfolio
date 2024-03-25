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

  p {
    text-align: start;
    width: 80%;
  }

  span {
    font-weight: bold;
    text-decoration: underline;
    color: ${CS.color.title};
  }

  a {
    text-decoration: underline;
  }
`;

export const Detail = styled.div`
  width: 15%;
  h2 {
    font-size: ${CS.fontSize.text_md};
    font-weight: bold;
  }
  p {
    color: ${CS.color.gray};
    font-size: ${CS.fontSize.text_sm};
  }
`;
