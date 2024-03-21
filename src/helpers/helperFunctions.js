// ARRAY IMPORT
import { QandA_Array } from "@QandA/qandA";

// GETTER FUNCTIONS
// NavButton.jsx
const getText = (currentQuestion, questions) => {
  if (currentQuestion < questions) {
    return "Next";
  } else {
    return "Finish";
  }
};

// Results.jsx
const getPercent = (finalResult) => {
  return `${((finalResult.correctAnswers / 5) * 100).toFixed(1)}%`;
};

// HANDLER FUNCTIONS - NavButton.jsx
const handleNext = (
  userAnswer,
  setFinalResult,
  counter,
  questionsNum,
  setShowResults,
  setUserAnswer,
  setCurrentQuestion,
  setHighlightenedAnswer,
  setCounter
) => {
  if (userAnswer === "") {
    return;
  }
  if (userAnswer === false) {
    setFinalResult((prev) => {
      return {
        ...prev,
        wrongAnswers: prev.wrongAnswers++,
      };
    });
  } else if (userAnswer === true) {
    setFinalResult((prev) => {
      return {
        ...prev,
        score: prev.score + QandA_Array.scorePerCorrectAnswer,
        correctAnswers: prev.correctAnswers++,
      };
    });
  }
  if (counter == "05") {
    setShowResults(true);
    setCurrentQuestion(0);
  }
  setCounter((prev) => prev + 1);
  setCurrentQuestion(Math.floor(Math.random() * questionsNum));
  setUserAnswer("");
  setHighlightenedAnswer(null);
};

// SHUFFLER FUNCTION - Answer.jsx
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

export { getText, handleNext, getPercent, shuffle };
