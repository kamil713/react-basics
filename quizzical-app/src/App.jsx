import { useState, useEffect } from "react";
import Button from "./components/Button";
import Question from "./components/Question";
import { nanoid } from "nanoid";

function App() {
  const [start, setStart] = useState(true);
  const [checked, setChecked] = useState(false);
  const [game, setGame] = useState(false);
  const [score, setScore] = useState(2);
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=4&category=21&type=multiple"
      );
      const data = await res.json();

      const newData = data.results.map((data) => {
        return {
          ...data,
          id: nanoid(),
        };
      });

      setAllQuestions(newData);
    }
    getQuestions();
  }, [game]);

  const questionElements = allQuestions.map((question) => {
    return (
      <Question
        id={question.id}
        key={question.id}
        question={question.question}
        answers={[
          ...question.incorrect_answers,
          question.correct_answer,
        ].sort()}
        correctAnswer={question.correct_answer}
      />
    );
  });


  function newGame() {
    setGame((prevState) => !prevState);
    setChecked((prevState) => !prevState);
  }

  function isChecked(result) {
    // if (result) {
    //   // setChecked((prevState) => !prevState);
    //   console.log("udalo sie");
    // } else {
    //   console.log("nie udalo sie");
    // }
  }

  function handleResult(result) {
    // setRefresh(prevState => !prevState)
    // isChecked(result)
  }

  return (
    <main>
      {start ? (
        <div className="first-screen">
          <h1 className="title">Quizzical</h1>
          <p className="description">
            Since the biggest sporting event is currently taking place, try to
            answer some questions related to sports.
          </p>
          <Button
            text="Start quiz"
            handleButton={() => setStart((prevState) => !prevState)}
          />
        </div>
      ) : (
        <div className="second-screen">
          <div className="questions-container">
            {questionElements}
            {!checked ? (
              <Button text={"Check answers"} handleButton={handleResult} />
            ) : (
              <div className="result">
                <p className="result-text">
                  You scorred {score}/5 correct answers
                </p>
                <Button
                  text={"Play again"}
                  onStyle={true}
                  handleButton={newGame}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
