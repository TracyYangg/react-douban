import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import configStore from "./configStore";
import Route from "./routers/Route";
import styleStore from "./style";

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={styleStore}>
          <Route />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
