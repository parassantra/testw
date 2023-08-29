import CountDownTimer from "./CountDownTimer"
import './App.css'

function App() {
  const timeAfterThreeDays = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
  const timeAfterSevenDays = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

  return (
    <>
      <CountDownTimer targetDate={timeAfterThreeDays}/>
      <CountDownTimer targetDate={timeAfterSevenDays}/>
    </>
  )
}

export default App
