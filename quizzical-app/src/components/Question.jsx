import Answer from "./Answer";

export default function Question(props) {
  function runHold(id) {
    props.runHold(id, props.id);
  }

  const answerElements = props.answers.map((answer) => {
    return (
      <Answer
        id={answer.id}
        key={answer.id}
        questionId={props.id}
        answer={answer.answer}
        isHeld={answer.isHeld}
        correct={answer.correct}
        heldCorrect={answer.heldCorrect}
        heldIncorrect={answer.heldIncorrect}
        checked={answer.checked}
        runHold={() => runHold(answer.id)}
      />
    );
  });

  return (
    <div className="question-container">
      {/* https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
      {/* We can use DOMPurify but it's app only for learning purpose */}
      <h3
        className="question-text"
        dangerouslySetInnerHTML={{ __html: props.question }}
      ></h3>
      <div className="answer-container">{answerElements}</div>
      <div className="line"></div>
    </div>
  );
}