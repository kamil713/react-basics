export default function Button(props) {
  return (
    <button onClick={() => console.log("test")}>{props.text}</button>
  );
}
