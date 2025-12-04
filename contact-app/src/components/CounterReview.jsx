import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function CounterReview() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>Counter :{state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>Incre</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decre</button>
    </div>
  );
}
