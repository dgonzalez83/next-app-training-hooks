import React from "react";
import Code from "~/components/Code";

const useCallbackCode = `const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);`;

function UseCallbackPage() {
  return (
    <>
      <h2 className="mt-2 mb-4">UseCallback</h2>
      <Code language="jsx">{useCallbackCode}</Code>
      <p>Devuelve un callback memorizado.</p>
      <p>{`Pasa un callback en línea y un arreglo de dependencias. useCallback devolverá una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado. Esto es útil cuando se transfieren callbacks a componentes hijos optimizados que dependen de la igualdad de referencia para evitar renders innecesarias (por ejemplo, shouldComponentUpdate).`}</p>
      <p>
        <code>{`useCallback(fn, deps)`}</code> es igual a{" "}
        <code>{`useMemo(() => fn, deps)`}</code>.
      </p>
    </>
  );
}

export default UseCallbackPage;
