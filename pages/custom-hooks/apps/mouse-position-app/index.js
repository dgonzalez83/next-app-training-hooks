import React from "react";
import { useBackgroundFromMousePosition } from "~/hooks/useBackgroundFromMousePosition";

function MousePositionApp() {
  const { position, background } = useBackgroundFromMousePosition();
  return (
    <>
      <h2 className="mt-2 mb-4 round">useMousePosition()</h2>
      <div className="card p-4 text-light" style={{ background }}>
        <pre>{JSON.stringify(position, null, 2)}</pre>
      </div>
    </>
  );
}

export default MousePositionApp;
