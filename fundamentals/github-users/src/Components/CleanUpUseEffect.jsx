import React, { useEffect, useState } from 'react'

const SomeCompWithUseEffect = () =>  {
    useEffect(()=>{
        console.log("hi from SomeCompWithUseEffec")
    }, [])
    return(<div>Bhai Bhai!!</div>)
}

const SomeCompWithUseEffectWithInterval = () =>  {
    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("arey bhai!!")
        },1000)

        return () => clearInterval(interval)
    }, [])
    return(<div>Bhai Bhai!!</div>)
}


const SomeCompWithUseEffectEventListener = () =>  {
    useEffect(()=>{
        const someFunc =  () => console.log("bhai mar dala")
        window.addEventListener('scroll', someFunc)

        return () => {window.removeEventListener('scroll', someFunc)}
    }, [])
    return(<div>Bhai Bhai!!</div>)
}

const CleanUpUseEffect = () => {
  const[toggle, setToggle] = useState(false)
  return (
    <div>{
        toggle && <SomeCompWithUseEffectEventListener/>
    }
    <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default CleanUpUseEffect