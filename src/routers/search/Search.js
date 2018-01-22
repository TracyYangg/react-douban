import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Flex } from "../../components";
import { formName } from "./constants";

type Props = {
  headerHeight?: any
};

const SearchInput = ({ input }) => {
  return <input type="text" placeholder="电影/电视剧/影人" {...input} />;
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
      >
        <Flex flex={1} className=" padding-vertical-5 border">
          <Field name="search" component={SearchInput} />
        </Flex>
      </Flex>
    );
  }
}
HeaderSearch = reduxForm({
  form: formName
})(HeaderSearch);
export default connect()(HeaderSearch);
