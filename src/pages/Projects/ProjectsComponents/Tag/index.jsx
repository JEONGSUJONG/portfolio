import React from "react";
import styled from "styled-components";
import * as CS from "../../../Style/CommonStyle";

const StyledTag = styled.div`
  margin: 2px;
  display: inline-block;
  color: white;
  font-size: ${CS.fontSize.text_sm};
  background-color: ${CS.color.darkblue};
  border-radius: 15px;
  padding: 2px 10px;
  text-align: left;
`;

const Tag = ({ tags }) => {
  return (
    <>
      {tags &&
        tags.map((tag, index) => <StyledTag key={index}>{tag}</StyledTag>)}
    </>
  );
};

export default Tag;
