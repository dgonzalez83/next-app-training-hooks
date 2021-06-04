import React, { useRef, useState } from "react";

function Page3() {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const textareaRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    textareaRef.current.select();
    document.execCommand("copy");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleChange = (event) => {
    const { target } = event;
    setText(target.value);
  };

  return (
    <>
      <h2 className="mt-2 mb-4">Copy App</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label className="form-label">Texto: </label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Write some thing here..."
            onChange={handleChange}
            value={text}
            ref={textareaRef}
          ></textarea>
          <button className="btn btn-primary mt-2" type="submit">
            Copy!
          </button>
        </div>
      </form>

      {isCopied && (
        <div
          className="alert alert-success d-flex align-items-center mt-5"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div>Text copied!</div>
        </div>
      )}
    </>
  );
}

export default Page3;
