import Questions from "./Questions";
import questions from "./data.js"

const App = () => {
  return <main>
    <Questions questions={questions}/>
  </main>;
};
export default App;
