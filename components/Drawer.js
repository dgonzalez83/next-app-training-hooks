import React from "react";
import Link from "next/link";

// components
// import { List } from "@/components/List";

function Drawer({ navItems }) {
  return (
    <>
      <ul className="nav flex-column">
        {navItems.map((navItem) => (
          <li key={navItem.path} className="nav-item">
            <Link href={navItem.path}>
              <a className="nav-link">{navItem.component}</a>
            </Link>
            {navItem.children &&
              navItem.children.map((navItemChildren) => (
                <ul className="nav flex-colum ms-3" key={navItemChildren.path}>
                  <Link href={navItemChildren.path}>
                    <a className="nav-link">{navItemChildren.component}</a>
                  </Link>
                </ul>
              ))}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Drawer;
