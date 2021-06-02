import React from "react";
import Link from "next/link";
import Logo from "./Logo";

function Navbar({ brand, navItems }) {
  return (
    <nav className="navbar navbar-expand-lg justify-content-center navbar-light bg-light">
      <Logo width="64px" height="64px" />
      <a className="navbar-brand mx-3" rel="noreferrer" href="#">
        {brand}
      </a>
      <ul className="nav">
        {navItems.map((route) => {
          const { path, children } = route;
          return (
            <li key={path} className="nav-item">
              <Link href={path}>
                <a className="nav-link">{children}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
