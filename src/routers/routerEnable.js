import React from "react";
import Loadable from "react-loadable";
import { Loading } from "../components";

const LoadableComponent = Component => {
  return Loadable({
    loader: () => {
      return Component();
    },
    loading() {
      return <Loading />;
    }
  });
};

export default LoadableComponent;
