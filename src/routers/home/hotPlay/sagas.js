import { call, put, fork, takeEvery } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "./actions";

function* runRequestSuggest() {
  const { data, error } = yield call(api.getInTheaters);
  if (data && !error) {
    yield put(actions.successSuggest({ data }));
  } else {
    yield put(actions.failureSuggest({ error }));
  }
}

function* handleRequestSuggest() {
  yield takeEvery(actions.GET_PLAY_NOW_FETCH, runRequestSuggest);
}

export default function* rootSaga() {
  yield fork(handleRequestSuggest);
}
