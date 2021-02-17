import { combineReducers } from "redux";
import message from "./message";
import messageRandom from "./messageRandom";

export default combineReducers({
  message, messageRandom
});
