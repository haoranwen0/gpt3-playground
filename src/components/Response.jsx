import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import "../css/Response.css";

function Response() {
  const [expand, setExpand] = useState(false);

  return (
    <div className="response">
      <div className="response-section row">
        <h2 className="response-label">Time</h2>
        <p>11:25 PM EST</p>
      </div>
      <div className="response-section">
        <h2 className="response-label">Response</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non
          ipsam ab. Iusto dolorem itaque vel quas dicta corporis aut quo
          quibusdam facere, earum iure.
        </p>
      </div>
      {!expand && (
        <div
          className="response-section icon row center"
          onClick={() => setExpand((prev) => !prev)}
        >
          <ExpandMoreIcon />
        </div>
      )}
      {expand && (
        <>
          <div className="response-section">
            <h2 className="response-label">Original Prompt</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non
              ipsam ab. Iusto dolorem itaque vel quas dicta corporis aut quo
              quibusdam facere, earum iure loll.
            </p>
          </div>
          <div className="response-section row">
            <h2 className="response-label">Temperature</h2>
            <p>0.7</p>
          </div>
          <div className="response-section row">
            <h2 className="response-label">Max Tokens</h2>
            <p>250</p>
          </div>
          <div className="response-section row">
            <h2 className="response-label">Engine</h2>
            <p>text-davinci-002</p>
          </div>
          <div
            className="response-section icon row center"
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
