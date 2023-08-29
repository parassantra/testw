import { useState } from "react";
import Questions from "./Questions";
import data from "./data.js"

const App = () => {
  const[questions, setQuestions] = useState(data)
  const[activeId, setActiveId] = useState(1);
  const toggleActiveId = (id) => {
    id === activeId ? setActiveId(null) : setActiveId(id)
  }
  return <main>
    <Questions 
    questions={questions}
    activeId={activeId}
    toggleActiveId={toggleActiveId}
    />
  </main>;
};
export default App;
