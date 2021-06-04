import React, { useEffect, useRef, useState } from "react";

export default function RenderApp() {
  const [text, setText] = useState("");

  // step #1: create ref
  const renderRef = useRef(1);

  // step #3: call useEffect function
  useEffect(() => {
    // step #4: mutation ref.current value
    renderRef.current++;
  });

  const handleChange = (event) => {
    const { target } = event;
    setText(target.value);
  };

  // step #2: render component
  return (
    <>
      <h2 className="mt-2 mb-4">Render App</h2>
      <form>
        <div className="form-group"></div>
        <input
          className="form-control"
          name="text"
          onChange={handleChange}
          type="text"
          value={text}
          placeholder="Write to re-render the component"
        />
      </form>
      <p>Renders: {renderRef.current}</p>
    </>
  );
}
