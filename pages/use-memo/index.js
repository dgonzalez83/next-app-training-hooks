import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Code from "~/components/Code";
import List from "./List";

const initialUsers = [
  { id: Date.now(), name: "Daniel" },
  { id: Date.now() + 1, name: "Mercedes" },
];

function UseMemoPage() {
  // State
  const [users, setUsers] = useState(initialUsers);
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("");

  // Refs
  const inputRef = useRef();

  /**
   * Computed properties
   * useMemo memoriza el valor que retorna una función
   */
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log("filteredUsers: ", search);
        return user.name.toLowerCase().includes(search.toLocaleLowerCase());
      }),
    [users, search]
  );

  const handleChange = (event) => {
    const { target } = event;
    setInputText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate inputText to add new user
    if (inputText) {
      const newUser = { id: Date.now(), name: inputText };
      setUsers([...users, newUser]);
      setInputText("");
    }
  };

  const handleDelete = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id !== userId));
    },
    [users]
  );

  const handleSearch = () => {
    setSearch(inputText);
  };

  const handleReset = () => {
    setInputText("");
    setSearch("");
    inputRef.current.focus();
  };

  // Effects
  useEffect(() => {
    console.log("App render");
  });

  return (
    <>
      <h2 className="mt-2 mb-4">useMemo</h2>
      <Code language="jsx">
        {
          "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a,b]);"
        }
      </Code>

      <div className="my-4">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=maUZjMJ4bF4"
        >
          React memo, useMemo y useCallback explicado al detalle
        </a>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Text:</label>
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            value={inputText}
            ref={inputRef}
          />
        </div>
        <div className="btn-group my-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSearch}
            name="Search"
          >
            Search
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <List users={filteredUsers} handleDelete={handleDelete} />
    </>
  );
}

export default UseMemoPage;
