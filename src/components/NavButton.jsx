// HELPER FUNCTIONS
import { getText, handleNext } from "@helpers/helperFunctions.js";

// STYLES
import "@styles/NavButton.scss";

const NavButton = ({
  setCurrentQuestion,
  userAnswer,
  setUserAnswer,
  setFinalResult,
  questionsNum,
  current,
  setShowResults,
  setHighlightenedAnswer,
}) => {
  return (
    <button
      className="navButton"
      disabled={userAnswer === ""}
      onClick={() =>
        handleNext(
          userAnswer,
          setFinalResult,
          current,
          questionsNum,
          setShowResults,
          setUserAnswer,
          setCurrentQuestion,
          setHighlightenedAnswer
        )
      }
    >
      {getText(current, questionsNum)}
    </button>
  );
};

export default NavButton;
