export default function Answer(props) {
  return (
    <button
      className="answer-button"
      dangerouslySetInnerHTML={{ __html: props.answer }}
    ></button>
  );
}
