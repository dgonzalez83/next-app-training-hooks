import { createContext, useReducer } from "react";

export const CounterContext = createContext();

const intialState = { counter: 0 };

export const CounterActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  SET: "SET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };

    case CounterActionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };

    case CounterActionTypes.RESET:
      return { ...state, counter: 0 };

    case CounterActionTypes.SET:
      return { ...state, counter: action.payload };

    default:
      return state;
  }
};

export default function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <CounterContext.Provider value={[state, dispatch]}>
        {children}
      </CounterContext.Provider>
    </>
  );
}
