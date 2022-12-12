export default function Answer(props) {
  let style = {};

  if (props.checked && props.correct) {
    style = {
      backgroundColor: "#94d7a2",
      border: "none",
    };
  } else if (props.checked && props.heldIncorrect) {
    style = {
      backgroundColor: "#f8bcbc",
      opacity: 0.5,
      border: "none",
    };
  } else if (props.isHeld) {
    style = {
      border: "1px solid #4d5b9e",
      backgroundColor: "#d6dbf5",
    };
  } else {
    style = {
      opacity: props.checked ? 0.5 : 1,
    };
  }

  return (
    <button
      className="answer-button"
      style={style}
      onClick={props.runHold}
      dangerouslySetInnerHTML={{ __html: props.answer }}
    ></button>
  );
}
