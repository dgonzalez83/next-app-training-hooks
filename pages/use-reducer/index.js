import React from "react";
import CounterProvider from "./context";

// Compomnents
import Code from "@/components/Code";
import Counter from "./counter";

const useReducerCode =
  "const [state, dispatch] = useReducer(reducer, initialArg, init);";

const reducerCode = `const reducer = (state, action) => {
    switch (action.type) {
      case CounterActionTypes.INCREMENT:
        return { ...state, counter: state.counter + 1 };
  
      case CounterActionTypes.DECREMENT:
        return { ...state, counter: state.counter - 1 };
  
      case CounterActionTypes.RESET:
        return { ...state, counter: 0 };
  
      case CounterActionTypes.SET:
        return { ...state, counter: action.payload };
  
      default:
        return state;
    }
  };`;

function UseReducerPage() {
  return (
    <>
      <h2 className="text-center my-3">useReducer</h2>
      <Code language="jsx">{useReducerCode}</Code>
      <p>
        Una alternativa a <code>useState</code>. Acepta un reducer de tipo{" "}
        <code>{"(state, action) => newState"}</code> y devuelve el estado actual
        emparejado con un método <code>dispatch</code>.{" "}
        {`(Si está familiarizado con Redux, ya sabe cómo funciona).`}
      </p>
      <p>
        <code>useReducer</code> a menudo es preferible a <code>useState</code>{" "}
        cuando se tiene una lógica compleja que involucra múltiples subvalores o
        cuando el próximo estado depende del anterior. <code>useReducer</code>{" "}
        además te permite optimizar el rendimiento para componentes que activan
        actualizaciones profundas, porque puedes pasar hacia abajo dispatch en
        lugar de callbacks.
      </p>
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <Code language="jsx">{reducerCode}</Code>
    </>
  );
}

export default UseReducerPage;

/*



*/
