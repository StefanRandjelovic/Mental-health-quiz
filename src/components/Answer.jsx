// STYLES
import "@styles/Answers.scss";

// HELPER FUNCTIONS
import { shuffle } from "@helpers/helperFunctions";
import { useEffect, useState } from "react";

const Answer = ({
  choices,
  setUserAnswer,
  correct,
  highlightenedAnswer,
  setHighlightenedAnswer,
  currentQuestion,
}) => {
  const [shuffledChoices, setShuffledChoices] = useState(null);
  const newChoices = structuredClone(choices);
  useEffect(() => {
    shuffle(newChoices);
    setShuffledChoices(structuredClone(newChoices));
  }, []);

  useEffect(() => {
    shuffle(newChoices);
    setShuffledChoices(structuredClone(newChoices));
  }, [currentQuestion]);
  console.log(shuffledChoices);

  return (
    <section className="answer">
      <ul>
        {shuffledChoices &&
          shuffledChoices.map((choice, index) => (
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
