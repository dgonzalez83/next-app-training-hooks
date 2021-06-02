import React, { useRef, useState } from "react";

export default function MediaPlayerApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  const handleClick = (event) => {
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <h2 className="my-3">Media Player App</h2>
      <video
        onClick={handleClick}
        ref={videoRef}
        className="ratio ratio-16x9"
        loop
      >
        <source
          src={process.env.PUBLIC_URL + "/Pexels Videos 2019791.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="d-grid gap-2">
        <button className="btn btn-secondary" onClick={handleClick}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
}
