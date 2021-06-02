import Head from "next/head";
import Code from "../components/Code";

const hooksCode = `import React, { useState } from 'react';

function Example() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`;

export default function Home() {
  return (
    <>
      <article>
        <h2 className="text-center my-3">Home</h2>
        <Code language="jsx">{hooksCode}</Code>
        <p>Antes de continuar, debes notar que los Hooks son:</p>
        <ul>
          <li>
            <strong>Completamente opcionales.</strong> Puedes probar Hooks en
            unos pocos componentes sin reescribir ningún código existente. Pero
            no tienes que aprender o usar Hooks ahora mismo si no quieres.
          </li>
          <li>
            <strong>100% compatibles con versiones anteriores.</strong> Los
            Hooks no tienen cambios con rupturas con respecto a versiones
            existentes.
          </li>
          <li>
            <strong>Disponibles de inmediato.</strong> Los Hooks ya están
            disponibles con el lanzamiento de la versión v16.8.0.
          </li>
        </ul>
        <p>
          <strong>
            No hay planes para remover el modelo de clases de React.
          </strong>{" "}
          Puedes leer más sobre la estrategia de adopción gradual de Hooks en la
          sección inferior de esta página.
        </p>
        <p>
          <strong>
            Los Hooks no reemplazan tu conocimiento de los conceptos de React.
          </strong>{" "}
          Por el contrario, los Hooks proporcionan una API más directa a los
          conceptos que ya conoces de React: props, estado, contexto,
          referencias, y ciclo de vida. Como veremos más adelante, los hooks
          también ofrecen una nueva y poderosa forma de combinarlos.
        </p>
      </article>
    </>
  );
}
