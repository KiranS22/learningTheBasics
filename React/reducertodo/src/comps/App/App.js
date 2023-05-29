import React, { useReducer, useState } from "react";
import "./App.css";
import ShowTodos from "../ShowTodos/ShowTodos";

function App() {
  let initialState = { todos: [] };
  const [inpVal, setInpVal] = useState("");
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        setInpVal("");
        return { todos: [...state.todos, action.payload] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Add Task Using useReducer</h1>
      <input
        type="text"
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "ADD", payload: inpVal })}>
        {" "}
        Add Task
      </button>

      <div>
        <div>
          {state.todos.map((todo) => (
            <ShowTodos key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
