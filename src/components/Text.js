import React from "react";
import styled, { css } from "styled-components";

const StyleSpan = styled.span`
  ${({ weight }) => {
    return (
      weight &&
      css`
        font-weight: ${weight};
      `
    );
  }};
  ${({ color, theme }) => {
    return (
      color &&
      css`
        color: ${theme[color] || color};
      `
    );
  }};
  ${({ size, theme }) => {
    return (
      size &&
      css`
        font-size: ${theme[size] || size};
      `
    );
  }};
`;

type Props = {
  weight?: number | string,
  color?: string,
  theme?: Object
};

const Text = ({ ...args }: Props) => {
  return <StyleSpan {...args} />;
};

Text.defaultProps = {
  color: "blackColor",
  size: "standard"
};

export default Text;
