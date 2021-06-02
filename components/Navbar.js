import React from "react";
import Link from "next/link";
import Logo from "./Logo";

function Navbar({ brand, navItems }) {
  return (
    <nav className="navbar navbar-expand-lg justify-content-center navbar-light bg-light mb-3">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" rel="noreferrer">
            <Logo width="64px" height="64px" />
            {brand}
          </a>
        </Link>
        <ul className="nav me-auto">
          {navItems.map((route) => {
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
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            disabled
          />
          <button class="btn btn-outline-success" type="submit" disabled>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
