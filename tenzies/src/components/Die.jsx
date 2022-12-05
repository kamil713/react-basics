export default function Die(props) {
  let dieNum;
  switch (props.value) {
    case 1:
      dieNum = 'One'
      break;
    case 2:
      dieNum = 'Two'
      break;
    case 3:
      dieNum = 'Three'
      break;
    case 4:
      dieNum = 'Four'
      break;
    case 5:
      dieNum = 'Five'
      break;
    case 6:
      dieNum = 'Six'
      break;
  }

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
    backgroundImage: `url(./src/assets/diceSvg/die${dieNum}.svg)`
  };

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}></div>
  );
}