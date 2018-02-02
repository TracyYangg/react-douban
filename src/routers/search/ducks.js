import { combineReducers } from "redux";
import get from "lodash/get";
import * as actions from "./actions";

export const getSearchResultReducerName = "GET_NOW_PLAY";

const getSearchResultReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_SEARCH_RESULT:
      return {
        payload: get(action, "payload"),
        isFetching: false
      };
    case actions.GET_SEARCH_FAILURE:
      return {
        payload: get(action, "payload"),
        isFetching: false
      };
    default:
      return state;
  }
};

export default combineReducers({
  [getSearchResultReducerName]: getSearchResultReducer
});
