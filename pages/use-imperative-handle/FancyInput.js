import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const FancyInput = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    copy: () => {
      inputRef.current.select();
      document.execCommand("copy");
    },
    value: inputRef.current.value,
  }));

  return (
    <input
      className="form-control my-3"
      type="text"
      ref={inputRef}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      value={inputValue}
    />
  );
});

export default FancyInput;
