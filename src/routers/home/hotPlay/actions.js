import { createAction } from "redux-actions";
import { NAME } from "./constants";

export const GET_PLAY_NOW_FETCH = `${NAME}.GET_PLAY_NOW_FETCH`;
export const GET_NOW_PLAY_SUCCES = `${NAME}.GET_NOW_PLAY_SUCCES`;
export const GET_NOW_PLAY_FAILURE = `${NAME}.GET_NOW_PLAY_FAILURE`;

export const getNowPlay = createAction(GET_PLAY_NOW_FETCH);
export const successSuggest = createAction(GET_NOW_PLAY_SUCCES);
export const failureSuggest = createAction(GET_NOW_PLAY_FAILURE);
