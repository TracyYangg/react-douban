import React, { Component } from "react";
import { Provider } from "react-redux";
import configStore from "./configStore";
import { Text } from "./components";
import Route from "./routers/Route";

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route />
          <Text>2222</Text>
        </div>
      </Provider>
    );
  }
}

export default App;
