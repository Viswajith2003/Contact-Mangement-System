import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increCounter":
      return { count: state.count + 1 };
    case "decreCounter":
      return { count: state.count - 1 };
    case "resetCounter":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Counter :{state.count}</h2>
      <div className="flex gap-5">
        <button onClick={() => dispatch({ type: "increCounter" })}>
          Incre
        </button>
        <button onClick={() => dispatch({ type: "resetCounter" })}>
          Reset
        </button>
        <button onClick={() => dispatch({ type: "decreCounter" })}>Decr</button>
      </div>
    </div>
  );
}
