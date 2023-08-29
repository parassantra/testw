import React from 'react'
import { useState, useCallback } from 'react'
import Child1 from './Child1'


const App1 = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const changeFunc = () => {
        setCount2(2)
    }

    const cachedFn = useCallback(changeFunc, [count2])

    const increaseCount1 = () =>{
        setCount1(count1+1)
    }

  return (
    <div>
        <button onClick={increaseCount1}>Counter 1</button>
        <div>{count1}</div>
        <Child1 changeFunc={cachedFn}></Child1>
    </div>
  )
}

export default App1