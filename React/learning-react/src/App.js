import "./App.css";
import Child from "./Child";
// using useCintext  - this goes in the component that is sending the state
import { createContext } from "react";

import { useState, useEffect } from "react";
import Reducer from "./useReducer/Reducer";
import Callback from "./useCallback/Callback";
import Memo from "./useMemo/Memo";
// creating the context
export let countContext = createContext();

function App() {
  // UsaeEffect Runs once when the component mounts and then every time the dendancy items change

  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("useEffect Ran");
  // }, [count]);

  let headerStyle = { color: "red" };
  return (
    <div className="App">
      {/* <h1 style={headerStyle}> React Revision Counter</h1>
      <p>{count}</p> */}
      {/* passing props  */}
      {/* Wrap the c omponents that you wish to share state with in the  provider. This wull mean that the state will be accsessable to it anbd ALL it's children */}
      {/* Add  the value prop to the provider and then assign anything that you want to send */}
      <countContext.Provider value={565}>
        {/* <Child
          count={count}
          isThere={true}
          myName={"Kiran"}
          headerStyling={headerStyle}
        /> */}
      </countContext.Provider>
      {/*
      <Reducer /> */}

      {/* <button onClick={() => setCount(count + 1)}>+</button>{" "}
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button> */}
      {/* <Callback/> */}
      <Memo />
    </div>
  );
}

export default App;

// Mounting is when a component gets added to the DOM
// Unmount - When an elemnt is removed from the DOM - When you switch to another component
// Rendering - When a component Loads
//  Re-Render when a component re-loads

// useEffect - to track and perform tasks when a comonent re-reders
// UseEffect runs twice initally when used in strictMode/testing
// Child component get rendered fully first
