export default function Answer(props) {
  let style = {};

  if (props.clicked) {
    style = {
      border: "1px solid #4d5b9e",
      backgroundColor: "#d6dbf5"
    };
  }

  return (
    <button
      className="answer-button"
      style={style}
      onClick={() => {
        props.updateAnswers(props.id);
      }}
      dangerouslySetInnerHTML={{ __html: props.answer }}
    ></button>
  );
}
