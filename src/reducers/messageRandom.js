import { SET_MESSAGE_RANDOM, CLEAR_MESSAGE_RANDOM } from "../actions/types";

const initialState = {
  messageRandom:[]
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {   
    case SET_MESSAGE_RANDOM:
      return {
        data:payload
      };    
    case CLEAR_MESSAGE_RANDOM:
      return { messageRandom: "" };  

    default:
      return state;
  }
}
