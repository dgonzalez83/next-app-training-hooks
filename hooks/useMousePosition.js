import { useEffect, useState } from "react";

function useMousePosition() {
  const [position, setPosition] = useState();

  useEffect(() => {
    setPosition({ x: 10, y: 20 });
  }, []);
  return position;
}

export default useMousePosition;
