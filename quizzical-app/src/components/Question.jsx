import { useState } from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";

export default function Question(props) {
  // tu sie odswieza ale czemu? Rekoncylacja???
  const answerElements = props.answers.map((answer) => {
    const id = nanoid()
    return (
      <Answer
        id={id}
        key={id}
        answer={answer}
        clicked={false}
        updateAnswers={updateAnswers}
      />
    );
  });

  const [answers, setAnswers] = useState(answerElements);

  function updateAnswers(id) {
    setAnswers((oldAnswers) =>
      oldAnswers.map((answer) => {
        if (answer.props.id === id) {
          return (
            <Answer
              id={answer.props.id}
              key={answer.props.id}
              answer={answer.props.answer}
              clicked={true}
              updateAnswers={updateAnswers}
            />
          );
        }

        return (
          <Answer
            id={answer.props.id}
            key={answer.props.id}
            answer={answer.props.answer}
            clicked={false}
            updateAnswers={updateAnswers}
          />
        );
      })
    );
  }

  return (
    <div className="question-container">
      {/* https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
      {/* We can use DOMPurify but it's app only for learning purpose */}
      <h3
        className="question-text"
        dangerouslySetInnerHTML={{ __html: props.question }}
      ></h3>
      <div className="answer-container">{answers}</div>
      <div className="line"></div>
    </div>
  );
}
