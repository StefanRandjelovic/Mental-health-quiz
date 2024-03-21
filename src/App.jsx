// COMPONENTS
import Question from "@components/Question";
import Answer from "@components/Answer";
import NavButton from "@components/NavButton";
import Results from "@components/Results";

// ARRAY INFO
import { QandA_Array } from "@QandA/qandA.js";

// DEV DEPENDENCIES
import { useState } from "react";

// STYLES
import "@styles/App.scss";

function App() {
  // QUESTIONS AND ANSWERS
  const { questions } = QandA_Array;

  // STATE VARIABLE
  const [counter, setCounter] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(
    Math.floor(Math.random() * questions.length)
  );
  const [userAnswer, setUserAnswer] = useState("");
  const [highlightenedAnswer, setHighlightenedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [finalResult, setFinalResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  return (
    <main>
      {!showResults && (
        <>
          <Question
            cur={counter}
            question={questions[currentQuestion].question}
          />
          <Answer
            currentQuestion={currentQuestion}
            choices={questions[currentQuestion].answers}
            setUserAnswer={setUserAnswer}
            correct={questions[currentQuestion].correct}
            highlightenedAnswer={highlightenedAnswer}
            setHighlightenedAnswer={setHighlightenedAnswer}
          />
          <NavButton
            setCounter={setCounter}
            setCurrentQuestion={setCurrentQuestion}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            setFinalResult={setFinalResult}
            questionsNum={questions.length}
            current={currentQuestion}
            counter={counter}
            setShowResults={setShowResults}
            setHighlightenedAnswer={setHighlightenedAnswer}
          />
        </>
      )}
      {showResults && (
        <>
          <Results questions={questions} finalResult={finalResult} />
        </>
      )}
    </main>
  );
}

export default App;
