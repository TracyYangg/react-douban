import { call, fork, select, takeEvery, put } from "redux-saga/effects";
import { formValueSelector } from "redux-form";
import * as api from "./api";
import { formName } from "./constants";
import * as actions from "./actions";

function* changeSearchForm({ meta }) {
  if (meta.field !== "search") {
    return;
  }
  const state = yield select();
  const selector = formValueSelector(formName);
  const text = selector(state, "search");
  const { data, err } = yield call(api.search, { text });
  if (data && !err) {
    yield put(actions.getSearchResultSuccess({ data }));
  } else {
    yield put(actions.getSearchResultFailure({ err }));
  }
}

function* handleChangeSearch() {
  yield takeEvery("@@redux-form/CHANGE", changeSearchForm);
}

export default function* rootSaga() {
  yield fork(handleChangeSearch);
}
