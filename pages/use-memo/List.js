import React, { memo, useEffect } from "react";
import Item from "./Item";

const List = memo(({ users, handleDelete }) => {
  useEffect(() => {
    console.log("List render");
  });
  return (
    <div className="mt-3">
      <ul className="list-group">
        {users &&
          users.map((user) => (
            <Item key={user.id} user={user} handleDelete={handleDelete} />
          ))}
      </ul>
    </div>
  );
});

export default List;
