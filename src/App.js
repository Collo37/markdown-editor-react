import { Provider } from "react-redux";

import store from "./state/store";

import "./App.css";
import MarkdownInput from "./components/MarkdownInput/MarkdownInput";
import HtmlOutput from "./components/HtmlOutput/HtmlOutput";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3 className="app-title">Markdown Editor</h3>
        <div className="editor-container">
          <MarkdownInput />
          <HtmlOutput />
        </div>
      </div>
    </Provider>
  );
}

export default App;
