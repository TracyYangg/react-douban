import React, { Component } from "react";
import { connect } from "react-redux";
import get from "lodash/get";
import Img from "react-image";
import { Loading, Text, Flex } from "../../../components";
import * as actions from "./actions";
import { selector, getNowPlayReducerName } from "./ducks";

type Props = {
  dispatch: Function,
  getNowPlay: Funtion,
  selector?: Object
};

class HotPlay extends Component {
  props: Props;

  componentDidMount() {
    const { dispatch, getNowPlay } = this.props;
    dispatch(getNowPlay());
  }

  render() {
    const { selector } = this.props;
    if (get(selector, "isFetching")) {
      return <Loading overly />;
    }
    const data = get(selector, "payload.data");
    console.log(data);
    return (
      <div style={{ height: "400px", overflow: "auto" }}>
        <meta name="referrer" content="never" />
        {get(data, "entries.length") > 0 &&
          get(data, "entries").map(item => {
            return (
              <Flex key={get(item, "title")} className="padding-15 dividend">
                <div>
                  <Img
                    src={`${get(item, "images.medium")}`}
                    width="auto"
                    height="100px"
                  />
                </div>
                <Flex flex={1}>
                  <Text>{get(item, "title")}</Text>
                  <Text>{get(item, "rating")}</Text>
                </Flex>
              </Flex>
            );
          })}
      </div>
    );
  }
}

const mapStateToprops = state => {
  return { selector: selector(state, getNowPlayReducerName) };
};

const mapDispatchToProps = dispatch => {
  return {
    getNowPlay: actions.getNowPlay,
    dispatch
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(HotPlay);
