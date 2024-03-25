import styled from "styled-components";
import * as CS from "../../../../Style/CommonStyle";

export const Container = styled.div`
  margin-left: 20px;
  padding: 20px 0px 10px 0px;
`;

export const InnerContainer = styled.div`
  span {
    font-size: ${CS.fontSize.text_md};
    color: ${CS.color.darkblue};
    font-weight: bold;
  }

  a {
    transition: color 0.2s linear;
    text-decoration: underline;

    &:hover {
      color: ${CS.color.hover};
    }
  }
`;
