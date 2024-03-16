// STYLES
import "@styles/Answers.scss";

const Answer = ({ choices, setUserAnswer, correct }) => {
  return (
    <section className="answer">
      <ul>
        {choices.map((choice, index) => (
          <li
            onClick={(event) => {
              if (event.target.innerHTML.slice(3) == correct) {
                setUserAnswer(true);
              } else {
                setUserAnswer(false);
              }
            }}
            key={crypto.randomUUID()}
          >{`${index + 1}. ${choice}`}</li>
        ))}
      </ul>
    </section>
  );
};

export default Answer;
