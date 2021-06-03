import React from "react";
import Link from "next/link";

// components
import { List } from "@/components/List";

// const
const useRefApps = [
  { path: "/use-ref/apps/focus-app", text: "Focus" },
  { path: "/use-ref/apps/copy-app", text: "Copy" },
  { path: "/use-ref/apps/media-player-app", text: "Media Player" },
  { path: "/use-ref/apps/scroll-animation-app", text: "Scroll Animation" },
  { path: "/use-ref/apps/render-app", text: "Render" },
  { path: "/use-ref/apps/loading-app", text: "Loading" },
];

const customHooksApps = [
  { path: "/custom-hooks/apps/mouse-position-app", text: "useMousePosition" },
];

function Drawer() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link href="/use-state">
          <a className="nav-link">useState</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/use-reducer">
          <a className="nav-link">useReducer</a>
        </Link>
      </li>
      <li>
        <Link href="/use-imperative-handle">
          <a className="nav-link">useImperativeHandle</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/use-ref">
          <a className="nav-link">useRef</a>
        </Link>
      </li>
      <li className="ms-3">
        <List title="useRef" listItems={useRefApps} />
      </li>
      <li className="nav-item">
        <Link href="/use-callback">
          <a className="nav-link">useCallback</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/use-memo">
          <a className="nav-link">useMemo</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/custom-hooks">
          <a className="nav-link">Custom Hooks</a>
        </Link>
      </li>
      <li className="ms-3">
        <List title="useRef" listItems={customHooksApps} />
      </li>
    </ul>
  );
}

export default Drawer;
