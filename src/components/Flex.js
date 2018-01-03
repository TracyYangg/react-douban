import React from "react";
import styled, { css } from "styled-components";

const Flex = styled.div`
  display: flex;
  ${({ flex }) => {
    return (
      flex &&
      css`
        flex: ${flex};
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
  ${({ alignItems }) => {
    return (
      alignItems &&
      css`
        align-item: ${alignItems};
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
