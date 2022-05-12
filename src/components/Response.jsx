import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import "../css/Response.css";

function Response(props) {
  const { time, engine, prompt, response, max_tokens, temperature } = props;

  const [expand, setExpand] = useState(false);

  return (
    <div className="response">
      <div className="response-section row">
        <h2 className="response-label">Time</h2>
        <p>{new Date(time).toString()}</p>
      </div>
      <div className="response-section">
        <h2 className="response-label">Response</h2>
        <pre>{response.trim()}</pre>
      </div>
      {!expand && (
        <div
          className="response-section icon row center expandMore"
          onClick={() => setExpand((prev) => !prev)}
        >
          <ExpandMoreIcon />
        </div>
      )}
      {expand && (
        <>
          <div className="response-section">
            <h2 className="response-label">Prompt</h2>
            <pre>{prompt}</pre>
          </div>
          <div className="response-section row">
            <h2 className="response-label">Temperature</h2>
            <p>{temperature}</p>
          </div>
          <div className="response-section row">
            <h2 className="response-label">Max Tokens</h2>
            <p>{max_tokens}</p>
          </div>
          <div className="response-section row">
            <h2 className="response-label">Engine</h2>
            <p>{engine}</p>
          </div>
          <div
            className="response-section icon row center expandLess"
            onClick={() => setExpand((prev) => !prev)}
          >
            <ExpandLessIcon />
          </div>
        </>
      )}
    </div>
  );
}

export default Response;
