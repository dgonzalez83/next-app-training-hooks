import React, { useRef } from "react";
import { useEventListener } from "~/hooks/useEventListener";

function UseEventListenerApp() {
  const divRef = useRef();

  useEventListener(
    "dblclick",
    () => alert("useEventLister() works!"),
    divRef.current
  );

  return (
    <>
      <h2 className="mt-2 mb-4">useEventListener()</h2>
      <div
        className="col-6 px-4 py-4  bg-light border rounded"
        style={{ userSelect: "none" }}
        ref={divRef}
      >
        Do double-click here to fire alert!
      </div>
    </>
  );
}

export default UseEventListenerApp;
