import React from "react";
import Link from "next/link";

function List({ listItems }) {
  return (
    <ul className="d-flex flex-column nav">
      {listItems.map((item) => {
        const { path, text } = item;
        return (
          <li key={path} className="nav-item">
            <Link href={path}>
              <a className="nav-link">{text}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
