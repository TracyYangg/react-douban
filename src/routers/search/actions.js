import { createAction } from "redux-actions";
import { NAME } from "./constants";

export const GET_SEARCH_RESULT = `${NAME}.GET_SEARCH_RESULT`;
export const GET_SEARCH_FAILURE = `${NAME}.GET_NOW_PLAY_FAILURE`;

export const getSearchResultSuccess = createAction(GET_SEARCH_RESULT);
export const getSearchResultFailure = createAction(GET_SEARCH_FAILURE);
