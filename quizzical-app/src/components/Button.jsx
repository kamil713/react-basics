export default function Button(props) {
  return (
    <button
      className="prime-button"
      style={props.onStyle ? {margin: "0"} : null}
      onClick={props.handleButton}
    >
      {props.text}
    </button>
  );
}