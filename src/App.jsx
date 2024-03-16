// COMPONENTS
import Question from "@components/Question";
import Answer from "@components/Answer";
import NawButton from "@components/NavButton";

// ARRAY INFO
import { QandA_Array } from "@QandA/qandA.js";

// DEV DEPENDENCIES
import { useState } from "react";

// STYLES
import "@styles/App.scss";

function App() {
  // GETTER FUNCTIONS
  const getText = () => {
    if (currentQuestion < questions.length) {
      return "Next";
    } else {
      return "Finish";
    }
  };

  // STATE VARIABLE
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userAnswer, setUserAnswer] = useState("");
  const [finalResult, setFinalResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  // QUESTIONS AND ANSWERS
  const { questions } = QandA_Array;

  return (
    <main>
      <Question
        cur={currentQuestion}
        all={questions.length}
        question={questions[currentQuestion - 1].question}
      />
      <Answer
        choices={questions[currentQuestion - 1].answers}
        setUserAnswer={setUserAnswer}
        correct={questions[currentQuestion - 1].correct}
      />
      <NawButton setCurrentQuestion={setCurrentQuestion} promp={getText} />
    </main>
  );
}

export default App;
