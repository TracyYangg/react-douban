import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import home from "../routers/home";

const appReducer = combineReducers({
  form: formReducer,
  [home.name]: home.ducks
});

export default (state, action) => {
  return appReducer(state, action);
};
