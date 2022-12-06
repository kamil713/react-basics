import { useState, useEffect } from "react"
import Button from "./components/Button";
import Question from "./components/Question";
import { nanoid } from "nanoid";

function App() {
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
      async function getQuestions() {
          const res = await fetch("https://opentdb.com/api.php?amount=5&category=21&type=multiple")
          const data = await res.json()
          console.log(data.results);
          setAllQuestions(data.results)
      }
      getQuestions()
  }, [])

  const questionElements = allQuestions.map(question => {
    return <Question 
      key={nanoid()}
      question={question.question}
    />
  })

  return (
    <main>
      {/* <h1 className="title">Quizzical</h1>
      <p className="description">Some description if needed</p>
      <Button text="Start quiz" /> */}
      {questionElements}
      <Button text={"Check answers"} />
    </main>
  );
}

export default App;
