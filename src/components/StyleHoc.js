import React, { Component } from "react";
import styleStore from "../style";

const StyleHoc = ComponentSection => {
  class StyleHoc extends Component {
    render() {
      return <ComponentSection {...styleStore} {...this.props} />;
    }
  }

  return StyleHoc;
};

export default StyleHoc;
