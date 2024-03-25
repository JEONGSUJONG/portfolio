import styled from "styled-components";
import * as CS from "../../Style/CommonStyle";

export const Container = styled.div`
  width: 48%;
  border: 1px solid ${CS.color.lightgray};
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: ${CS.fontSize.text_lg};
  font-weight: bold;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 14px;

  td span {
    font-weight: bold;
    color: ${CS.color.darkblue};
  }

  td p {
    padding-left: 20px;
  }
`;
