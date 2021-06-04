import React from "react";
import { useCounter } from "@/hooks/useCounter";

function CounterApp() {
  const { counter, decrement, increment, reset } = useCounter(0);

  return (
    <>
      <h2 className="mt-2 mb-4">{"useCounter()"}</h2>
      <div>
        <h5>Counter: {counter}</h5>
        <div className="btn-group">
          <button className="btn btn-warning" onClick={decrement}>
            Decrement
          </button>
          <button className="btn btn-danger" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-success" onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </>
  );
}

export default CounterApp;
