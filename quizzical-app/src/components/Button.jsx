export default function Button(props) {
  return (
    <button className="prime-button" onClick={props.handleButton}>{props.text}</button>
  );
}
