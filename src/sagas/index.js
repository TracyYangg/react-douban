import { fork, all } from "redux-saga/effects";

import hotPlaySagas from "../routers/home/hotPlay/sagas";
import searchSagas from "../routers/search/sagas";

export default function* rootSaga() {
  yield all([fork(hotPlaySagas), fork(searchSagas)]);
}
