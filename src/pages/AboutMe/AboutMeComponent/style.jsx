import styled from "styled-components";
import * as CS from "../../Style/CommonStyle";

export const Title = styled.div`
  color: ${CS.color.title};
  font-size: ${CS.fontSize.text_xl};
  font-weight: bold;
  margin-bottom: 56px;
`;

export const InnerContainer = styled.div`
  margin-left: 24px;
  display: flex;
`;

export const ContactContainer = styled.div`
  margin-left: 24px;
`;

export const Image = styled.img`
  border-radius: 0.5rem;
  width: 132px;
  height: auto;
`;

export const Content = styled.p`
  margin-left: 24px;
  font-size: ${CS.fontSize.text_md};
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  td span {
    color: ${CS.color.darkblue};
    font-weight: bold;
    padding-right: 24px;
  }
`;

export const Link = styled.a`
  transition: color 0.2s linear;
  text-decoration: underline;

  &:hover {
    color: ${CS.color.hover};
  }
`;
