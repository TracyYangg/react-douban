import React from "react";
import styled, { css } from "styled-components";

const Flex = styled.div`
  display: flex,
    ${({ flex }) => {
      return (
        flex &&
        css`
          flex: ${flex};
        `
      );
    }};
  ${({ alignItems }) => {
    return (
      alignItems &&
      css`
        align-item: ${alignItems};
      `
    );
  }};
  ${({ flexDirection }) => {
    return (
      flexDirection &&
      css`
        flex-direction: ${flexDirection};
      `
    );
  }};
  ${({ justifyContent }) => {
    return (
      justifyContent &&
      css`
        justify-content: ${justifyContent};
      `
    );
  }};
`;

type Props = {
  flex?: number,
  flexDirection?: string,
  alignItems?: string,
  justifyContent?: string
};

const FlexContainer = ({ ...rest }: Props) => {
  return <Flex {...rest} />;
};

export default FlexContainer;
