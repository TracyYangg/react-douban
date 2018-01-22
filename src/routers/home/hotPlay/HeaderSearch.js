import React, { Component } from "react";
import { connect } from "react-redux";
import { Flex, Text, Icon } from "../../../components";
import history from "../../history";

type Props = {
  headerHeight?: any
};

class HeaderSearch extends Component {
  props: Props;
  render() {
    const { headerHeight } = this.props;
    return (
      <Flex
        style={{ height: headerHeight }}
        className="dividend padding-horizontal-20"
        alignItems="center"
        onClick={() => {
          //跳转到搜索页面
          history.push("/search");
        }}
      >
        <Flex
          className="gray-bg-color padding-5"
          flex={1}
          style={{ borderRadius: "5px" }}
        >
          <Icon
            name="searchHeader"
            color="#A3A3A3"
            className="margin-right-5"
          />
          <Text color="grayColor">电影/电视剧/影人</Text>
        </Flex>
      </Flex>
    );
  }
}

export default connect()(HeaderSearch);
