import React from "react";
import styled from "styled-components";
import * as CS from "../../../Style/CommonStyle";

const StyledItem = styled.div`
  margin: 2px;
  display: inline-block;
  color: white;
  font-size: ${CS.fontSize.text_sm};
  border-radius: 15px;
  padding: 2px 10px;
  text-align: left;
`;

const StyledPosition = styled(StyledItem)`
  background-color: ${CS.color.tagposition};
`;

const StyledBack = styled(StyledItem)`
  background-color: ${CS.color.tagbackend};
`;

const StyledFront = styled(StyledItem)`
  background-color: ${CS.color.tagfrontend};
`;

const Tag = ({ position, backend, frontend }) => {
  return (
    <>
      <StyledPosition>{position}</StyledPosition>
      {backend &&
        backend.map((tag, index) => <StyledBack key={index}>{tag}</StyledBack>)}
      {frontend &&
        frontend.map((tag, index) => (
          <StyledFront key={index}>{tag}</StyledFront>
        ))}
    </>
  );
};

export default Tag;
