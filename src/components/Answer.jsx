// STYLES
import "@styles/Answers.scss";

// DEV DEPENDENCIES
import { useState } from "react";

const Answer = ({
  choices,
  setUserAnswer,
  correct,
  highlightenedAnswer,
  setHighlightenedAnswer,
}) => {
  return (
    <section className="answer">
      <ul>
        {choices.map((choice, index) => (
          <div
            key={crypto.randomUUID()}
            className={highlightenedAnswer === index ? "selected" : null}
          >
            <li
              onClick={(event) => {
                if (event.target.innerHTML.slice(3) == correct) {
                  setUserAnswer(true);
                  setHighlightenedAnswer(index);
                } else {
                  setUserAnswer(false);
                  setHighlightenedAnswer(index);
                }
              }}
            >{`${index + 1}. ${choice}`}</li>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Answer;
