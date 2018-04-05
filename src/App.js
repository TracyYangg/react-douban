import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import configStore from "./configStore";
import Route from "./routers/Route";
import styleStore from "./style";
import "./default.scss";

const store = configStore();

class App extends Component {
  render() {
    return (
      <div>
        {/* {处理豆瓣图片跨域} */}
        <meta name="referrer" content="never" />
        <Provider store={store}>
          <ThemeProvider theme={styleStore}>
            <Route />
          </ThemeProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
