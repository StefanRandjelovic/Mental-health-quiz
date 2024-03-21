// STYLES
import "@styles/Questions.scss";

const Question = ({ cur, question }) => {
  return (
    <section className="question">
      <h1>
        <span>{cur < 10 ? `0${cur}` : cur}</span>/05
      </h1>
      <p>{question}</p>
    </section>
  );
};

export default Question;
