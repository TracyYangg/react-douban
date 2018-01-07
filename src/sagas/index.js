// import { takeEvery } from "redux-saga";
import { put, fork } from "redux-saga/effects";
import hotPlaySagas from "../routers/home/hotPlay/sagas";
// import { GET_PLAY_NOW } from "../routers/home/hotPlay/ducks";

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
// export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// // Our worker Saga: 将异步执行 increment 任务
// export function* incrementAsync() {
//   yield delay(1000);
//   yield put({ type: "INCREMENT" });
// }

// export function* watchIncrementAsync() {
//   yield* takeEvery(GET_PLAY_NOW, incrementAsync);
// }

export default function* rootSaga() {
  yield fork(hotPlaySagas);
}
