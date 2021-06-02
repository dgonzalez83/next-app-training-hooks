import React, { useRef } from "react";
import FancyInput from "./FancyInput";
import Code from "~/components/Code";

const fancyInputCode = `import React, { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    copy: () => {
      inputRef.current.select();
      document.execCommand("copy");
    },
    value: inputRef.current.value,
  }));

  return <input className="form-control my-3" type="text" ref={inputRef} />;
});

export default FancyInput;`;

function UseImperativeHandlePage() {
  const ref = useRef();

  return (
    <>
      <div>
        <h2 className="text-center my-3">useImperativeHandle</h2>
        <Code language="jsx">{`useImperativeHandle(ref, createHandle, [deps])`}</Code>
        <p>
          <code>useImperativeHandle</code> personaliza el valor de instancia que
          se expone a los componentes padres cuando se usaref. Como siempre, el
          código imperativo que usa refs debe evitarse en la mayoría de los
          casos. useImperativeHandle debe usarse con forwardRef:
        </p>
        <Code language="jsx">{fancyInputCode}</Code>
        <p>
          En este ejemplo, un componente padre que muestra
          <code>{`<FancyInput ref={inputRef} />`}</code> podría llamar a{" "}
          <code>{"inputRef.current.focus()"}</code>.
        </p>
      </div>
      <div>
        <FancyInput ref={ref} />
        <div className="btn-group">
          <button
            className="btn btn-secondary"
            onClick={() => {
              ref.current.focus();
            }}
          >
            Focus!
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              ref.current.copy();
            }}
          >
            Copy!
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              alert(ref.current.value);
            }}
          >
            Alert!
          </button>
        </div>
      </div>
    </>
  );
}

export default UseImperativeHandlePage;
