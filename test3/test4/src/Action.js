import { INCREMENT, DECREMENT } from "./ActionTypes";

export const incrementCount = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementCount = () => {
  return {
    type: DECREMENT,
  };
};

export const setCount = (val) => {
  return {
    type: "SETCOUNT",
    payload: val,
  };
};
