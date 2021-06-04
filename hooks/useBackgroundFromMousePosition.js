import { useEffect, useState } from "react";
import useMousePosition from "./useMousePosition";

function useBackgroundFromMousePosition() {
  const position = useMousePosition();
  const [background, setBackground] = useState(null);

  useEffect(() => {
    setBackground(position.x < window.innerWidth / 2 ? "lightblue" : "orange");
  }, [position]);

  return { position, background };
}

export { useBackgroundFromMousePosition };
