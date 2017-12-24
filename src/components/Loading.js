//@flow
import React, { Component } from "react";
import { BounceLoader } from "react-spinners";
import styled, { css } from "styled-components";
import StyleHoc from "./StyleHoc";

type Props = {
  primaryColor?: string,
  overly?: boolean
};

const Container = styled.div`
  ${({ overly }) => {
    return (
      overly &&
      css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
      `
    );
  }};
`;

@StyleHoc
class AwesomeComponent extends Component {
  props: Props;

  render() {
    const { primaryColor, overly } = this.props;
    return (
      <Container overly={overly}>
        <BounceLoader color={primaryColor} loading />
      </Container>
    );
  }
}

export default AwesomeComponent;
