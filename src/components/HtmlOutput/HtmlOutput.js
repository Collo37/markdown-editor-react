import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import "./output.css";

const HtmlOutput = () => {
  const stateValue = useSelector((state) => state.markdownText.text);
  const [htmlOutput, setHtmlOutput] = useState(stateValue);

  useEffect(() => {
    setHtmlOutput(stateValue);
  }, [stateValue]);

  return (
    <div className="output-container">
      <h3 className="output-container-title">Output</h3>
      <div className="html-output">
        <ReactMarkdown>{htmlOutput}</ReactMarkdown>
      </div>
    </div>
  );
};

export default HtmlOutput;
