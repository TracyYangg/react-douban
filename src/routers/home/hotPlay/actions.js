import { createAction } from "redux-actions";
import { NAME } from "./constants";

export const GET_PLAY_NOW = `${NAME}.GET_PLAY_NOW`;

export const getNowPlay = createAction(GET_PLAY_NOW);

export const SUCCESS_SUGGEST = "SUCCESS_SUGGEST";
export const FAILURE_SUGGEST = "FAILURE_SUGGEST";
export const successSuggest = createAction(SUCCESS_SUGGEST);
export const failureSuggest = createAction(FAILURE_SUGGEST);
