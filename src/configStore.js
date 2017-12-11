import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./ducks";

const initialState = window.INITIAL_STATE || {};
delete window.INITIAL_STATE;

let middleware = [];
if (process.env.NODE_ENV !== "production") {
  const createLogger = require("redux-logger").createLogger;
  middleware = [...middleware, createLogger()];
}

export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middleware));
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // hot reload reducers
    module.hot.accept(() => {
      const nextRootReducer = require("./ducks").default;

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
