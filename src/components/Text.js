import React from "react";
import styled, { css } from "styled-components";

const StyleSpan = styled.span`
  ${({ weight }) => {
    return weight &&
      css`
        font-weight: ${weight};
      `;
  }};
  ${({color,theme})=>{
    return color && css`color:${color}` 
  }}
`;

const Text = ({ ...args,children }) => {
  return <StyleSpan {...args} >{children}</StyleSpan>;
};

export default Text;
