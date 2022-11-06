import React from "react";
import { useReducer, useState } from "react";
import { reducer, initialState } from "./countReducer";

import {
  Increment_Count,
  Decrement_Count,
  Reset_Count,
  Add_Value,
  Reduce_Value,
} from "./Type";
import "./App.css";

const CounterHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState(+0);
  const data = (e) => {
    setInput(+e.target.value);
  };
  if (input >= 10000) {
    throw new Error("value is too big");
  }
  return (
    <div className="App">
      <div className="container">
        <div className="count-bar">
          <label htmlFor="" className="count-bar-label">
            total
          </label>
          <p>{state.number}</p>
        </div>
        <div className="count-text">
          <label htmlFor="" className="input-label">
            add any number
          </label>
          <input
            type="number"
            onChange={data}
            className="count-input"
            placeholder="enter any number"
            value={input}
          />
        </div>

        <div className="values">
          <button
            onClick={() => {
              dispatch({ type: Add_Value, payload: input });
              setInput(0);
            }}
          >
            add any number
          </button>
          <button
            onClick={() => {
              dispatch({ type: Reduce_Value, payload: input });
              setInput(0);
            }}
          >
            remove any number
          </button>
        </div>
        <div className="values">
          <button onClick={() => dispatch({ type: Increment_Count})}>
            add (+1){" "}
          </button>
          <button onClick={() => dispatch({ type: Decrement_Count })}>
            reduce (-1)
          </button>
        </div>
        <div className="reset">
          <button onClick={() => dispatch({ type: Reset_Count })}>
            reset (0){" "}
          </button>
        </div>
        <p className="warning">numbers greater than 10000 throws an error</p>
      </div>
    </div>
  );
};

export default CounterHook;