import React, { useEffect, useRef, useState } from "react";

export default function ScrollAnimationApp() {
  const [background, setBackground] = useState("pink");
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const { top } = divRef.current.getBoundingClientRect();
      top < 0 ? setBackground("tomato") : setBackground("pink");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <h2>Scroll Animation App</h2>
      <div
        className="mt-2 mb-4"
        style={{ height: "125vh", background: background }}
        ref={divRef}
      >
        <p>Scroll to change background-color</p>
      </div>
    </>
  );
}
