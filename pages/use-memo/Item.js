import React, { memo, useEffect } from "react";

const Item = memo(({ user, handleDelete }) => {
  useEffect(() => {
    console.log("Item render: ", user.name);
  });
  return (
    <li className="d-flex justify-content-between list-group-item">
      <span>{`id: ${user.id} name: ${user.name}`}</span>
      <button
        className="btn btn-outline-danger btn-sm"
        onClick={() => handleDelete(user.id)}
      >
        Delete
      </button>
    </li>
  );
});

export default Item;
