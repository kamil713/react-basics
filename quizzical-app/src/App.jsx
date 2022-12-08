import { useState, useEffect } from "react";
import Button from "./components/Button";
import Question from "./components/Question";
import { nanoid } from "nanoid";

function App() {
  const [start, setStart] = useState(true);
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=4&category=21&type=multiple"
      );
      const data = await res.json();
      console.log(data.results);
      setAllQuestions(data.results);
    }
    getQuestions();
  }, []);

  const questionElements = allQuestions.map((question) => {
    return (
      <Question
        key={nanoid()}
        question={question.question}
        answers={[...question.incorrect_answers, question.correct_answer].sort()}
        correctAnswer={question.correct_answer}
      />
    );
  });

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
          <Button text={"Check answers"} />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
