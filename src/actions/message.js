import { SET_MESSAGE, SET_MESSAGE_RANDOM, CLEAR_MESSAGE, CLEAR_MESSAGE_RANDOM } from "./types";

export function setMessage(message){
  return (dispatch) => {
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
  }  
};

export function setMessageRandom(messageRandom){
  return (dispatch) => {
    dispatch({
      type: SET_MESSAGE_RANDOM,
      payload: messageRandom,
    })
  }  
};

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const clearMessageRandom = () => ({
  type: CLEAR_MESSAGE_RANDOM,
});
