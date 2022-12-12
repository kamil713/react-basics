import { useState, useEffect } from "react";
import Button from "./components/Button";
import Question from "./components/Question";
import { nanoid } from "nanoid";

function App() {
  const [start, setStart] = useState(true);
  const [allQuestions, setAllQuestions] = useState([]);
  const [game, setGame] = useState(false);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);

  function newGame() {
    setGame((prevState) => !prevState);
    setChecked(false); // (prevState) => !prevState
    setScore(0);
    //
  }

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=4&category=21&type=multiple"
      );
      const data = await res.json();
      // "results": [
      //   {
      //       "category": "Sports",
      //       "type": "multiple",
      //       "difficulty": "medium",
      //       "question": "Who was the British professional wrestler Shirley Crabtree better known as?",
      //       "correct_answer": "Big Daddy",
      //       "incorrect_answers": [
      //           "Giant Haystacks",
      //           "Kendo Nagasaki",
      //           "Masambula"
      //       ]
      //   },
      //   ...
      // ]

      const newData = data.results.map((data) => {
        return {
          id: nanoid(),
          question: data.question,
          correctAnswer: data.correct_answer,

          answers: settingAnswers(
            [...data.incorrect_answers, data.correct_answer].sort(), // pass shuffle array
            data.correct_answer
          ),
        };
      });

      setAllQuestions(newData);
    }
    getQuestions();
  }, [game]);

  function settingAnswers(listOfAnswers, correctAnswer) {
    return listOfAnswers.map((answer) => {
      return {
        id: nanoid(),
        isHeld: false,
        answer: answer,
        // Compare every answer with correctAnswer and set it to true if they are the same
        correct: answer === correctAnswer ? true : false,
        heldCorrect: false,
        heldIncorrect: false,
        checked: false,
      };
    });
  }

  const questionElements = allQuestions.map((question) => {
    return (
      <Question
        id={question.id}
        key={question.id}
        question={question.question}
        answers={question.answers}
        //
      />
    );
  });

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