import React from "react";
import Link from "next/link";

function List({ listItems = [] }) {
  return (
    <>
      <ul className="d-flex flex-column nav">
        {listItems.map((item) => {
          const { href, text } = item;
          return (
            <li key={href} className="nav-item">
              <Link href={href}>
                <a className="nav-link">{text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
