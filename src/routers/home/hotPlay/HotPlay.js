import React, { Component } from "react";
import { connect } from "react-redux";
import get from "lodash/get";
import times from "lodash/times";
import Img from "react-image";
import {
  Loading,
  Text,
  Flex,
  StyleHoc,
  Icon,
  Button
} from "../../../components";
import * as actions from "./actions";
import { selector, getNowPlayReducerName } from "./ducks";
import HeaderSearch from "./HeaderSearch";

type Props = {
  getNowPlay: Funtion,
  selector?: Object
};

const StarComponents = ({ starNumber }: { starNumber?: any }) => {
  const number = parseInt(starNumber, 10);
  if (!number) {
    return null;
  }
  if (number % 10 === 0) {
    return (
      <Flex>
        {times(number / 10, index => {
          return <Icon key={index} name="star" size="16px" color="#F9952C" />;
        })}
        {times((50 - number) / 10, index => {
          return (
            <Icon key={index} name="starEmpty" size="16px" color="#F9952C" />
          );
        })}
      </Flex>
    );
  }
  if (number % 5 === 0) {
    return (
      <Flex>
        {times(Math.floor(number / 10), index => {
          return <Icon name="star" size="16px" color="#F9952C" key={index} />;
        })}
        <Icon name="starHalf" size="16px" color="#F9952C" />
        {times((50 - number - 5) / 10, index => {
          return (
            <Icon key={index} name="starEmpty" size="16px" color="#F9952C" />
          );
        })}
      </Flex>
    );
  }
  return null;
};

@StyleHoc
class HotPlay extends Component {
  props: Props;

  componentDidMount() {
    const { getNowPlay } = this.props;
    getNowPlay();
  }

  getScrollHeight = () => {
    const screenHeight = window.screen.height;
    const { headerHeight, footerHeight } = this.props;

    return `${screenHeight -
      parseInt(headerHeight, 10) -
      parseInt(footerHeight, 10)}px`;
  };

  render() {
    const { selector, headerHeight } = this.props;
    if (get(selector, "isFetching")) {
      return <Loading overly />;
    }
    const data = get(selector, "payload.data");
    return (
      <div>
        <HeaderSearch headerHeight={headerHeight} />
        <div style={{ height: this.getScrollHeight(), overflow: "auto" }}>
          
          {get(data, "subjects.length") > 0 &&
            get(data, "subjects").map(item => {
              return (
                <Flex key={get(item, "id")} className="padding-15 dividend">
                  <div className="margin-right-10">
                    <Img
                      src={`${get(item, "images.medium")}`}
                      height="auto"
                      width="80px"
                      alt={get(item, "alt")}
                    />
                  </div>
                  <Flex flex={4} flexDirection="column">
                    <Text weight="bolder" size="mlarger">
                      {get(item, "title")}
                    </Text>
                    <Flex>
                      <StarComponents starNumber={get(item, "rating.stars")} />
                      <Text
                        color="grayColor"
                        className={
                          get(item, "rating.average") && "margin-left-5"
                        }
                      >
                        {get(item, "rating.average") || "暂无评分"}
                      </Text>
                    </Flex>
                    <Text
                      size="ssmall"
                      className="padding-bottom-5"
                      color="grayColor"
                    >
                      导演：{get(item, "directors") &&
                        get(item, "directors").map(item => {
                          return (
                            <Text key={item.id} size="ssmall" color="grayColor">
                              {get(item, "name")}
                            </Text>
                          );
                        })}
                    </Text>
                    <Text size="ssmall" color="grayColor">
                      主演：{get(item, "casts") &&
                        get(item, "casts").map(item => {
                          return (
                            <Text
                              key={item.id}
                              size="ssmall"
                              color="grayColor"
                            >{`${get(item, "name")}/`}</Text>
                          );
                        })}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" className="margin-left-10" flex={1}>
                    <Button
                      hasBorder
                      style={{
                        borderRadius: "10%",
                        height: "30px",
                        width: "100%"
                      }}
                    >
                      购票
                    </Button>
                  </Flex>
                </Flex>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return { selector: selector(state, getNowPlayReducerName) };
};

const mapDispatchToProps = {
  getNowPlay: actions.getNowPlay
};

export default connect(mapStateToprops, mapDispatchToProps)(HotPlay);
