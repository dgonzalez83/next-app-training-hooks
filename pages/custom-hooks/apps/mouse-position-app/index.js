import useMousePosition from "~/hooks/useMousePosition";

function MousePositionApp() {
  const position = useMousePosition();

  return (
    <>
      <div id="test">Mouse Position App</div>
      <pre>{JSON.stringify(position, null, "  ")}</pre>
    </>
  );
}

export default MousePositionApp;
