import React, { Component } from "react";
import styled, { css } from "styled-components";

const ButtonStyleComponents = styled.button`
  ${({ hasBorder, color, theme }) => {
    return (
      hasBorder &&
      css`
        border: 1px solid ${theme[color] || color || theme.primaryColor};
      `
    );
  }};
  color: ${({ theme, color }) => {
    return theme[color] || color || theme.primaryColor;
  }};
  background-color: ${({ theme, bgColor }) => {
    return theme[bgColor] || bgColor || "#fff";
  }};
  outline: none;
`;

export default class Button extends Component {
  render() {
    return <ButtonStyleComponents {...this.props} />;
  }
}
