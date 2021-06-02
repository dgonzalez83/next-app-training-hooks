import React, { useState } from "react";

const initialState = { counter: 0 };

function UseStatePage() {
  const [state, setState] = useState(initialState);

  return (
    <>
      <h2 className="text-center my-3">useState</h2>
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
