import React, { useRef, useState } from "react";
import Code from "~/components/Code";

const initialState = [
  { id: 1, text: "text1" },
  { id: 2, text: "text2" },
  { id: 3, text: "text3" },
];

const focusCode = `
const [text, setText] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
  text && setState([...state, { id: state.length + 1, text: text }]);
  setText("");
  inputRef.current.focus();
};

`;

export default function FocusApp() {
  const [state, setState] = useState(initialState);
  const [text, setText] = useState("");

  const inputRef = useRef();

  const handleChange = ({ target }) => setText(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    text && setState([...state, { id: state.length + 1, text: text }]);
    setText("");
    inputRef.current.focus();
  };

  return (
    <>
      <h2>Focus App</h2>
      <p>When enter some things focus stay in input element.</p>

      <Code language="jsx">{focusCode}</Code>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="input-text">
            Text:
          </label>
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            ref={inputRef}
            value={text}
            id="input-text"
          />
          <button
            className="btn btn-primary mt-3"
            type="submit"
            onClick={handleSubmit}
          >
            Submit!
          </button>
        </div>
      </form>
      <section>
        <ul className="list-group mt-3">
          {state.map(({ id, text }) => (
            <li key={id} className="list-group-item">
              {text}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
