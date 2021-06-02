import React from "react";
import Link from "next/link";

function Sidebar({ title = "", sidebarItems = [] }) {
  return (
    <>
      <aside>
        <h4>{title}</h4>
        <ul className="d-flex flex-column nav">
          {sidebarItems.map((route) => {
            const { path, text } = route;
            return (
              <li key={path} className="nav-item">
                <Link href={path}>
                  <a className="nav-link">{text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
