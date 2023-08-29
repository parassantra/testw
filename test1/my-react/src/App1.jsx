import React from 'react'
import { useEffect, useMemo } from 'react'
import { useState } from 'react'

const App1 = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)


    const increaseCount1 = () =>{
        setCount1(count1+1)
    }
    const increaseCount2 = () =>{
        setCount2(count2+1)
    }
    const isEven = () =>{
        for(let i=0; i<2000000000; i++){}
        return count1%2;
    }

    const isEvenVal = useMemo(isEven, [count1])

  return (
    <div>
        <button onClick={increaseCount1}>Counter 1</button>
        <div>{count1}{isEvenVal ? " Even":" Odd"}</div>
        <button onClick={increaseCount2}>Counter 2</button>
        <div>{count2}</div>
    </div>
  )
}

export default App1