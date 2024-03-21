// STYLES
import "@styles/Results.scss";

// HELPER FUNCTIONS
import { getPercent } from "@helpers/helperFunctions.js";

const Results = ({ questions, finalResult }) => {
  return (
    <section className="results">
      <h1>Results</h1>
      <p>
        Number of questions: <span>5</span>{" "}
      </p>
      <p>
        Total Score:{" "}
        <span>
          {finalResult.score}/50
        </span>
      </p>
      <p>
        Percentage vise: <span>{getPercent(finalResult, questions)}</span>
      </p>
      <p>
        Correct Answers: <span>{finalResult.correctAnswers}</span>
      </p>
      <p>
        Wrong Answers: <span>{finalResult.wrongAnswers}</span>
      </p>
      <div className="resUnderlayer">
        <button className="resButton" onClick={() => location.reload()}>
          Repeat
        </button>
      </div>
    </section>
  );
};

export default Results;
