import React from "react";
import Code from "../../components/Code";

const CODE_TEMPLATE_STRING = `function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // "current" apunta al elemento de entrada montado
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}`;

function UserRefPage() {
  return (
    <>
      <h2 className="text-center my-3">useRef</h2>
      <Code language="jsx">{`const refContainer = useRef(initialValue)`}</Code>

      <p>
        <code>useRef</code> devuelve un objeto ref mutable cuya propiedad{" "}
        <code>.current</code> se inicializa con el argumento pasado (
        <code>initialValue</code>). El objeto devuelto se mantendrá persistente
        durante la vida completa del componente.
      </p>

      <p>Un caso de uso común es para acceder a un hijo imperativamente:</p>

      <Code language="jsx">{CODE_TEMPLATE_STRING}</Code>

      <p>
        En esencia, <code>useRef</code> es como una “caja” que puedes mantener
        en una variable mutable en su propiedad <code>.current.</code>
      </p>

      <p>
        Puede que estes familiarizado con las referencias principalmente como un
        medio para <strong>acceder al DOM</strong>. Si pasas un objeto de
        referencia a React con{" "}
        <code>
          {`
          <article ref={myRef} />`}
        </code>
        , React configurará su propiedad <code>.current</code> al nodo del DOM
        correspondiente cuando sea que el nodo cambie.
      </p>

      <p>
        Sin embargo, <code>useRef()</code> es útil para más que el atributo ref.
        Es <code>conveniente para mantener cualquier valor mutable</code> que es
        similiar a como usarías campos de instancia en las clases.
      </p>

      <p>
        Esto funciona debido a que <code>useRef()</code> crea un objeto
        JavaScript plano. La única diferencia entre <code>useRef()</code> y
        crear un objeto <code>{`{current: ...}`}</code> por ti mismo es que{" "}
        <code>useRef</code> te dará el mismo objeto de referencia en cada
        renderizado.
      </p>

      <p>
        Ten en cuenta que <code>useRef</code> no notifica cuando su contenido
        cambia. Mutar la propiedad <code>.current</code> no causa otro
        renderizado. Si quieres correr algún código cuando React agregue o quite
        una referencia de un nodo del DOM, puede que quieras utilizar en su
        lugar una <strong>referencia mediante callback</strong>.
      </p>
    </>
  );
}

export default UserRefPage;
