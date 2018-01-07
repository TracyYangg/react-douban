import React, { Component } from "react";
import { connect } from "react-redux";
import { Loading } from "../../../components";
import * as actions from "./actions";

type Props = {
  dispatch: Function,
  getNowPlay: Funtion
};

class HotPlay extends Component {
  props: Props;

  componentDidMount() {
    const { dispatch, getNowPlay } = this.props;
    dispatch(getNowPlay());
    // getNowPlay();
  }

  render() {
    return <Loading overly />;
  }
}

const mapStateToprops = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getNowPlay: actions.getNowPlay,
    dispatch
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(HotPlay);
