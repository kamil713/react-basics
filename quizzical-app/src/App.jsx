import { useState, useEffect } from "react";
import Question from "./components/Question";
import { nanoid } from "nanoid";

function App() {
  const [start, setStart] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [game, setGame] = useState(false);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);

  function newGame() {
    setGame((prevState) => !prevState);
    setChecked(false); // (prevState) => !prevState
    setScore(0);
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

      setQuestions(newData);
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

  const questionElements = questions.map((question) => {
    return (
      <Question
        id={question.id}
        key={question.id}
        question={question.question}
        answers={question.answers}
        runHold={runHold}
      />
    );
  });

  function runHold(answerId, questionId) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        if (question.id === questionId) {
          const answersList = question.answers.map((answer) => {
            if (answer.id === answerId || answer.isHeld) {
              return {
                ...answer,
                isHeld: !answer.isHeld,
              };
            } else {
              return answer;
            }
          });
          return {
            ...question,
            answers: answersList,
          };
        } else {
          return question;
        }
      })
    );
  }

  function checkAnswers() {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        const checkedAnswers = question.answers.map((answer) => {
          if (answer.isHeld && !answer.correct) {
            return {
              ...answer,
              heldIncorrect: true,
              checked: true,
            };
          } else if (answer.isHeld && answer.correct) {
            setScore((prevScore) => prevScore + 1);
            return {
              ...answer,
              heldCorrect: true,
              checked: true,
            };
          } else {
            return {
              ...answer,
              checked: true,
            };
          }
        });
        return {
          ...question,
          answers: checkedAnswers,
        };
      })
    );
    setChecked(true);
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
          <button
            className="prime-button"
            onClick={() => setStart((prevState) => !prevState)}
          >
            Start quiz
          </button>
        </div>
      ) : (
        <div className="second-screen">
          <div className="questions-container">
            {questionElements}
            {!checked ? (
              <button className="prime-button" onClick={checkAnswers}>
                Check answers
              </button>
            ) : (
              <div className="result">
                <p className="result-text">
                  You scorred {score}/4 correct answers
                </p>
                <button
                  className="prime-button"
                  style={{ margin: "0" }}
                  onClick={newGame}
                >
                  Play again
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
