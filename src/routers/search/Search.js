import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import get from "lodash/get";
import Img from "react-image";
import ReactList from "react-list";
import { Flex, Text } from "../../components";
import { formName, NAME } from "./constants";
import { selector } from "../../utils/getState";
import { getSearchResultReducerName } from "./ducks";

type Props = {
  headerHeight?: any,
  selector: Object
};

const SearchInput = ({ input }) => {
  return <input type="text" placeholder="电影/电视剧/影人" {...input} />;
};

class HeaderSearch extends Component {
  props: Props;

  renderItem(index, key) {
    const { selector } = this.props;
    const item = get(selector, `payload.data.${index}`);
    return (
      <div key={key}>
        <Img
          src={`${get(item, "images.medium")}`}
          height="auto"
          width="80px"
          alt={get(item, "alt")}
        />
        <Text>{get(item, `title`)}</Text>
      </div>
    );
  }

  render() {
    const { headerHeight, selector } = this.props;
    return (
      <div>
        <Flex
          style={{ height: headerHeight }}
          className="dividend padding-horizontal-20"
          alignItems="center"
        >
          <Flex flex={1} className=" padding-vertical-5 border">
            <Field name="search" component={SearchInput} />
          </Flex>
        </Flex>
        <div style={{ overflow: "auto" }}>
          <ReactList
            itemRenderer={::this.renderItem}
            length={get(selector, "payload.data.length") || 0}
            type="uniform"
          />
        </div>
      </div>
    );
  }
}
HeaderSearch = reduxForm({
  form: formName
})(HeaderSearch);

const mapStateToprops = state => {
  return { selector: selector(state, getSearchResultReducerName, NAME) };
};

export default connect(mapStateToprops)(HeaderSearch);
