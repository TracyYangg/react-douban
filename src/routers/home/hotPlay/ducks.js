import { combineReducers } from "redux";
import get from "lodash/get";
import * as actions from "./actions";
import { NAME as PARENT_NAME } from "../constants";
import { NAME } from "./constants";

export const getNowPlayReducerName = "GET_NOW_PLAY";

const getNowPlayReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_PLAY_NOW_FETCH:
      return {
        isFetching: true
      };
    case actions.GET_NOW_PLAY_SUCCES:
      return {
        payload: get(action, "payload"),
        isFetching: false
      };
    case actions.GET_NOW_PLAY_FAILURE:
      return {
        payload: get(action, "payload"),
        isFetching: false
      };
    default:
      return state;
  }
};

export const selector = (state, reducerName) => {
  return get(state, `${PARENT_NAME}.${NAME}.${reducerName}`);
};

export default combineReducers({ [getNowPlayReducerName]: getNowPlayReducer });
