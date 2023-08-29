import { useState, useEffect } from 'react'
import './App.css'
import Child10 from './Child10'

function App() {
  const [count, setCount] = useState(0)
  console.log("app render")

  // useEffect(()=>{
  //   setInterval(()=>{
  //     console.log("Called")
  //     setCount(1)
  //   }, 2000)
  // },[])

  return (
    <>
      {/* <Child count={count}/> */}
      <Child10/>
    </>
  )
}

export default App
