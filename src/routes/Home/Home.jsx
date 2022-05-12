import Tool from "../../components/Tool";
import Display from "../../components/Display";

import "./Home.css";

function Home() {
  const updateResponses = (response) => {
    console.log(response);
  };

  return (
    <div className="home">
      <Tool updateResponses={updateResponses} />
      <Display />
    </div>
  );
}

export default Home;
