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
    <div className="navUnderlayer">
      <button
        className="navButton"
        disabled={userAnswer === ""}
        onMouseEnter={
          document.querySelector(".navButton")
            ? (event) => {
                event.target.parentElement.style.backgroundImage =
                  "linear-gradient(to right, red 35%, orange 65%)";
              }
            : null
        }
        onMouseLeave={
          document.querySelector(".navButton")
            ? (event) => {
                event.target.parentElement.style.backgroundImage = "none";
              }
            : null
        }
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
    </div>
  );
};

export default NavButton;
