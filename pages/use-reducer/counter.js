import { useContext, useState } from "react";
import { CounterContext } from "./context";

export default function Counter() {
  const [{ counter }, dispatch] = useContext(CounterContext);

  const [payload, setpayload] = useState(0);

  const handleOnInput = ({ target }) => {
    setpayload(target.value);
  };
  return (
    <>
      <div className="container">
        <span>{counter}</span>
        <br />
        <div className="btn-group w-25">
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increment
          </button>
          <button
            className="btn btn-warning"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrement
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </button>
        </div>
        <br />
        <label>Payload: </label>
        <br />
        <div className="input-group w-25">
          <input
            className="form-control d-inline w-25"
            onInput={handleOnInput}
            value={payload}
            name="payload"
            type="number"
          />
          <button
            className="btn btn-secondary"
            onClick={() =>
              dispatch({ type: "SET", payload: parseInt(payload) })
            }
          >
            Set
          </button>
        </div>
      </div>
    </>
  );
}
