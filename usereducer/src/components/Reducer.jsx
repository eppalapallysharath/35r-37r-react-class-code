import React, { useReducer } from "react";

const initialState = { count: 0, input: "" };

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Inc":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return state.count > 0 ? { ...state, count: state.count - 1 } : state;
    case "reset": {
      if (state.count < 1) {
        alert("count is already in zero only and reset not possible");
        return state;
      } else {
        return { ...state, count: 0 };
      }
    }
    case "input": {
      return { ...state, input: action.load };
    }
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Counter app</h3>
      <p>count value {state.count}</p>
      <button onClick={() => dispatch({ type: "Inc" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset count</button>
      <p>text box {state.input}</p>
      <input
        type="text"
        name="name"
        value={state.input}
        onChange={(e) => {
          dispatch({ type: "input", load: e.target.value });
        }}
      />
      <button> submit</button>
    </div>
  );
};

export default Reducer;
