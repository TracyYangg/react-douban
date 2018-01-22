import { call, fork, select, takeEvery } from "redux-saga/effects";
import { formValueSelector } from "redux-form";
import * as api from "./api";
import { formName } from "./constants";

function* changeSearchForm({ meta }) {
  if (meta.field !== "search") {
    return;
  }
  const state = yield select();
  const selector = formValueSelector(formName);
  const text = selector(state, "search");
  const { data } = yield call(api.search, { text });
  console.log(5555);
  console.log(data);
}

function* handleChangeSearch() {
  yield takeEvery("@@redux-form/CHANGE", changeSearchForm);
}

export default function* rootSaga() {
  yield fork(handleChangeSearch);
}
