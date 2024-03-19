// STYLES
import "@styles/Questions.scss";

const Question = ({ cur, all, question }) => {
  return (
    <section className="question">
      <h1>
        <span>{cur < 10 ? `0${cur}` : cur}</span>/{all < 10 ? `0${all}` : all}
      </h1>
      <p>{question}</p>
    </section>
  );
};

export default Question;
