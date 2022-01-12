import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateMarkdown } from "../../state/markdownTextSlice";

import "./input.css";

const MarkdownInput = () => {
  const [markdownInputText, setMarkdownInputText] = useState("");
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    setMarkdownInputText(event.target.value);
    dispatch(updateMarkdown({ markdownText: event.target.value }));
  };
  return (
    <div className="markdown-container">
      <h3 className="markdown-container-title">Markdown</h3>
      <textarea
        className="markdown-text-input"
        onChange={(event) => inputChangeHandler(event)}
        placeholder="Start typing some markdown ..."
      ></textarea>
    </div>
  );
};

export default MarkdownInput;
