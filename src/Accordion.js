import { useState } from "react";
import Apis from "./Api";

const Accordion = (i) => {
  const [currentAcc, setCurrentAcc] = useState("");

  return (
    <div className="main">
      <h2 className="header">React Interview Questions</h2>
      <ol className="content">
        {Apis.map((Api, index) => (
          <div className="question-answer">
            <div className="question-btn">
              <div className="questions">{Api.question}</div>
              <button className="btn" onClick={() => setCurrentAcc("")}>
                {currentAcc === index ? "-" : null}
              </button>
              <button className="btn" onClick={() => setCurrentAcc(index)}>
                {currentAcc === index ? null : "+"}
              </button>
            </div>
            <div className="answers" key={Api.id}>
              {currentAcc === index ? Api.answers : null}
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Accordion;
