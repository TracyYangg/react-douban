import React from "react";
import Loadable from "react-loadable";
import { Loading } from "../components";

const LoadableComponent = component => {
  return Loadable({
    loader: () => {
      return component();
    },
    loading() {
      return <Loading />;
    }
  });
};

export default LoadableComponent;
