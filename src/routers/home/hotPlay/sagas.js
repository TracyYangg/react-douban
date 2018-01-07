import { call, put, fork, take } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "./actions";

function* runRequestSuggest() {
  const { data, error } = yield call(api.getNowPlaying);
  console.log(yield call(api.getNowPlaying));
  if (data && !error) {
    yield put(actions.successSuggest({ data }));
  } else {
    yield put(actions.failureSuggest({ error }));
  }
}

function* handleRequestSuggest() {
  while (true) {
    yield take(actions.GET_PLAY_NOW);

    yield fork(runRequestSuggest);
  }
}

export default function* rootSaga() {
  yield fork(handleRequestSuggest);
}
