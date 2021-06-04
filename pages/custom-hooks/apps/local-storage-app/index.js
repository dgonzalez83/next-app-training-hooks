import React from "react";
import { useLocalStorage } from "~/hooks/useLocalStorage";

function LocalStorageapp() {
  // Similar to useState but first arg is key to the value in local storage.
  const [name, setName] = useLocalStorage("name", "Bob");

  return (
    <>
      <h2 className="mt-2 mb-4">useLocalStorage</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Persist your name:</label>
          <input
            id="name"
            className="form-control"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

export default LocalStorageapp;
