import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./ducks";
import rootSaga from "./sagas";

const initialState = window.INITIAL_STATE || {};
delete window.INITIAL_STATE;

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];
if (process.env.NODE_ENV !== "production") {
  //开发环境添加redux-logger
  const createLogger = require("redux-logger").createLogger;
  middleware = [...middleware, createLogger()];
}

export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middleware));
  const store = createStore(rootReducer, initialState, enhancer);
  let sagaTask = sagaMiddleware.run(rootSaga);
  if (module.hot) {
    // ducks热加载
    module.hot.accept(() => {
      const nextRootReducer = require("./ducks").default;

      store.replaceReducer(nextRootReducer);
    });
    //sagas热更新
    module.hot.accept(() => {
      const nextRootSagas = require("./sagas").default;
      sagaTask.cancel();
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextRootSagas);
      });
    });
  }
  return store;
}
