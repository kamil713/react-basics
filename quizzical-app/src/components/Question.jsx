import Answer from "./Answer"

export default function Question(props) {
    return (
        <div className="question-container">
            <h2 className="question-text">{props.question}</h2>
            <Answer />
            <div className='line'></div>
        </div>
    )
}