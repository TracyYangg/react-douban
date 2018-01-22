import React from "react";
import ReactSVG from "react-svg";
import styled from "styled-components";
import svgList from "../svg";

type Props = {
  name: string,
  color?: string,
  size?: string
};

const Icon = ({ name, ...rest }: Props) => {
  return <ReactSVG path={svgList[name]} {...rest} />;
};

const StyleIcon = styled(Icon)`
  width: ${({ size }) => {
    return size || "14px";
  }};
  height: ${({ size }) => {
    return size || "14px";
  }};
  fill: ${({ color, theme }) => {
    return theme[color] || color;
  }};
`;

export default StyleIcon;
