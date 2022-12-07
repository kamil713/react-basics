import Answer from "./Answer";

export default function Question(props) {
  return (
    <div className="question-container">
      {/* https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
      {/* We can use DOMPurify but it's app only for learning purpose */}
      <h3
        className="question-text"
        dangerouslySetInnerHTML={{ __html: props.question }}
      ></h3>
      <Answer />
      <div className="line"></div>
    </div>
  );
}
