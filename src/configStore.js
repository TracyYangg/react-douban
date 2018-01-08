import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./ducks";
import rootSaga from "./sagas";

const initialState = window.INITIAL_STATE || {};
delete window.INITIAL_STATE;

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];
if (process.env.NODE_ENV !== "production") {
  const createLogger = require("redux-logger").createLogger;
  middleware = [...middleware, createLogger()];
}

export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middleware));
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  if (module.hot) {
    // hot reload reducers
    module.hot.accept(() => {
      const nextRootReducer = require("./ducks").default;

      store.replaceReducer(nextRootReducer);
    });

    // module.hot.accept(() => {
    //   const nextRootSagas = require("./sagas").default;

    //   store.replaceReducer(nextRootSagas);
    // });
  }
  return store;
}
