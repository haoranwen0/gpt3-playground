import Response from "./Response";

import "../css/Display.css";

function Display() {
  return (
    <div className="display">
      <div className="display-wrapper">
        <div className="display-heading">
          <h1>GPT-3 Playground</h1>
        </div>
        <Response />
      </div>
    </div>
  );
}

export default Display;
