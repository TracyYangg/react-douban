import { combineReducers } from "redux";
import hotPlay from "./hotPlay";

export default combineReducers({ [hotPlay.name]: hotPlay.ducks });
