import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingHoc from "../../components/LoadingHoc";

// class  extends Component

@connect((state, props) => ({}), {})
@LoadingHoc
class NotPage extends Component {
  render() {
    return <div>not find page</div>;
  }
}

export default NotPage;
