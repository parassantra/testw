import { useReducer } from "react";
import { createContext, useContext } from "react";
import { initialState, reducer } from "./reducer";
import { INCREMENT, DECREMENT } from "./ActionTypes";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const incrementCount = () => {
    dispatch({
      type: INCREMENT,
    });
  };
  
  const decrementCount = () => {
    dispatch({
      type: DECREMENT,
    });
  };

  const setCount = (val) => {
    dispatch({
      type: 'SETCOUNT',
      payload: val
    });
  };
 
  return (
    <AppContext.Provider value={{ name: "paras", incrementCount, decrementCount, setCount, count: state.count }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalCotext = () => useContext(AppContext);
