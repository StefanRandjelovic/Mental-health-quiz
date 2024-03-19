// GETTER FUNCTIONS
const getText = (currentQuestion, questions) => {
  if (currentQuestion < questions) {
    return "Next";
  } else {
    return "Finish";
  }
};

const getPercent = (finalResult, questions) => {
  return `${((finalResult.correctAnswers / questions.length) * 100).toFixed(
    1
  )}%`;
};

// HANDLER FUNCTIONS
const handleNext = (
  userAnswer,
  setFinalResult,
  current,
  questionsNum,
  setShowResults,
  setUserAnswer,
  setCurrentQuestion,setHighlightenedAnswer
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
        score: prev.score + 10,
        correctAnswers: prev.correctAnswers++,
      };
    });
  }
  if (current === questionsNum) {
    setShowResults(true);
  }
  setCurrentQuestion((prev) => prev + 1);
  setUserAnswer("");
  setHighlightenedAnswer(null);
};

export { getText, handleNext, getPercent };
