import React from "react";
import useMousePosition from "@/hooks/useMousePosition";

function MousePositionApp() {
  const position = useMousePosition();

  return (
    <>
      <div>Mouse Position App</div>
      <div>positionn: {position}</div>
    </>
  );
}

export default MousePositionApp;
