import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import home from "../routers/home";
import search from "../routers/search";

const appReducer = combineReducers({
  form: formReducer,
  [home.name]: home.ducks,
  [search.name]: search.ducks
});

export default (state, action) => {
  return appReducer(state, action);
};
