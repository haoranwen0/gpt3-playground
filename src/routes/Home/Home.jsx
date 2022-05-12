import useLocalStorage from "../../hooks/useLocalStorage";
import GitHubIcon from "@mui/icons-material/GitHub";

import Tool from "../../components/Tool";
import Display from "../../components/Display";

import "./Home.css";

function Home() {
  const [responses, updateResponses] = useLocalStorage("responses", []);

  const fetchResponse = (response) => {
    updateResponses((prev) => [...prev, response]);
  };

  return (
    <div className="home">
      <Tool fetchResponse={fetchResponse} />
      <Display responses={responses} />
      <div className="github-icon">
        <a
          href="https://github.com/haoranwen0/gpt3-playground"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default Home;
