// HELPER FUNCTIONS
import { getPercent } from "@helpers/helperFunctions.js";

const Results = ({ questions, finalResult }) => {
  return (
    <section className="results">
      <h1>Results</h1>
      <p>
        Number of questions:<span>{questions.length}</span>{" "}
      </p>
      <p>
        Total Score: <span>{finalResult.score}</span>
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
      <button onClick={() => location.reload()}>Repeat</button>
    </section>
  );
};

export default Results;
