import Response from "./Response";

import "../css/Display.css";

function Display({ responses }) {
  return (
    <div className="display">
      <div className="display-wrapper">
        <div className="display-heading">
          <h1>GPT-3 Playground</h1>
        </div>
        {responses
          .slice(0)
          .reverse()
          .map((response, idx) => (
            <Response
              key={idx}
              prompt={response.prompt}
              response={response.response}
              max_tokens={response.max_tokens}
              time={response.time}
              engine={response.engine}
              temperature={response.temperature}
            />
          ))}
      </div>
    </div>
  );
}

export default Display;
