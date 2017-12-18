import React, { Component } from "react";
import { Provider } from "react-redux";
import configStore from "./configStore";
import Route from "./routers/Route";
import { api } from "./utils/api";

const store = configStore();

class App extends Component {
  componentDidMount() {
    api
      .get(
        "http://localhost:8081/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a"
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(data => {
        console.log(data);
      });
  }

  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}

export default App;
