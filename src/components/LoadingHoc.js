import React, { Component } from "react";

const LoadingHoc = WarpComponent => {
  class Loading extends Component {
    render() {
      return (
        <div>
          <div>loading...</div>
          <WarpComponent />
        </div>
      );
    }
  }
  return Loading;
};

export default LoadingHoc;
