import React from "react";
import { useReducer } from "react";
/*
Import useReducer from react
create a reducer function and pass state and action to it #
Call the useReducer hook and pas enital state
the hook returns state within the reducer fubction and a dispatch methord to uodate the state

*/
const Reducer = () => {
  let initialState = { count: 0 };
  function reducer(state, {type}) {
    /*State refers to intialState passed to useReducer
    actuion refers to the cation that you will dispatch*/
    switch (type) {
      case "INC":
        return { count: state.count + 1 };

      case "DEC":
        return { count: state.count - 1 };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer Counter </h1>
      <h4> {state.count}</h4>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>{" "}
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </div>
  );
};

export default Reducer;
