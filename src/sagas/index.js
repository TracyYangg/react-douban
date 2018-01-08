import { fork } from "redux-saga/effects";
import hotPlaySagas from "../routers/home/hotPlay/sagas";

export default function* rootSaga() {
  yield fork(hotPlaySagas);
}
