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
  // STATE VARIABLE
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userAnswer, setUserAnswer] = useState("");
  const [highlightenedAnswer, setHighlightenedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [finalResult, setFinalResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  // QUESTIONS AND ANSWERS
  const { questions } = QandA_Array;

  return (
    <main>
      {!showResults && (
        <>
          <Question
            cur={currentQuestion}
            all={questions.length}
            question={questions[currentQuestion - 1].question}
          />
          <Answer
            choices={questions[currentQuestion - 1].answers}
            setUserAnswer={setUserAnswer}
            correct={questions[currentQuestion - 1].correct}
            highlightenedAnswer={highlightenedAnswer}
            setHighlightenedAnswer={setHighlightenedAnswer}
          />
          <NavButton
            setCurrentQuestion={setCurrentQuestion}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            setFinalResult={setFinalResult}
            questionsNum={questions.length}
            current={currentQuestion}
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
