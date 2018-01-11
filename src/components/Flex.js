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
        align-items: ${alignItems};
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
  ${({ fullHeight }) => {
    return (
      fullHeight &&
      css`
        height: 100%;
      `
    );
  }};
`;

type Props = {
  flex?: number,
  flexDirection?: string,
  alignItems?: string,
  justifyContent?: string,
  fullHeight?: boolean
};

const FlexContainer = ({ ...rest }: Props) => {
  return <Flex {...rest} />;
};

export default FlexContainer;
