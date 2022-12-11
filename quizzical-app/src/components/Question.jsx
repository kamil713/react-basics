import { useState } from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";

export default function Question(props) {
  const answerElements = props.answers.map((answer) => {
    return (
      <Answer
        id={nanoid()}
        answer={answer}
        clicked={false}
        toggleCorrect={toggleCorrect}
      />
    );
  });

  const [answers, setAnswers] = useState(answerElements);
  console.log(answers);

  function toggleCorrect(id) {
    setAnswers((oldAnswers) =>
      oldAnswers.map((answer) => {
        if (answer.props.id === id) {
          return (
            <Answer
              id={answer.props.id}
              answer={answer.props.answer}
              clicked={true}
              toggleCorrect={toggleCorrect}
            />
          );
        }

        return (
          <Answer
            id={answer.props.id}
            answer={answer.props.answer}
            clicked={false}
            toggleCorrect={toggleCorrect}
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
