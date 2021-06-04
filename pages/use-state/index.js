import React, { useState } from "react";
import Code from "~/components/Code";

const initialState = { counter: 0 };

function UseStatePage() {
  const [state, setState] = useState(initialState);

  return (
    <>
      <h2 className="mt-2 mb-4">useState</h2>
      <Code language="jsx">{`const [state, setState] = useState(initialValue)`}</Code>
      <div className="d-flex flex-column justify-content-center align-items-center mx-auto my-5 bg-light border border-muted p-2 rounded">
        <p>{state.counter}</p>
        <div className="btn-group">
          <button
            className="btn btn-primary"
            onClick={() => {
              setState({ ...state, counter: state.counter + 1 });
            }}
          >
            +
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              setState({ ...state, counter: state.counter - 1 });
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default UseStatePage;
