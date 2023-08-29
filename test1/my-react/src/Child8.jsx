import React from 'react'
import useTimer from './useTimer'

const Child8 = () => {
  const [time, pauseTimer] = useTimer(100)
  return (<>
  <div>{time}</div>
  <button
  onClick={() => pauseTimer()}
  >
    Pause
  </button>
  </>
    
   
  )
}

export default Child8