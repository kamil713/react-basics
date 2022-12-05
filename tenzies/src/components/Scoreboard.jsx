export default function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <div className="rolls-best">
                <p>Best rolls</p>
                <p>{props.bestRolls}</p>
            </div>
            <div className="time-best">
                <p>Best time</p>
                <p>{props.bestTime}</p>
            </div>
        </div>
    )
}