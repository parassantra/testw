import React from 'react'
import { useGlobalCotext } from './context'
import {useSelector, useDispatch} from 'react-redux'
import { incrementCount, decrementCount, setCount } from './Action'

const Home = () => {
  // const val = useGlobalCotext()
  // console.log(val)

  const val = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <>
    <div>Home{val.count}</div>
    <button
    onClick={() => dispatch(incrementCount())}
    >+</button>
     <button
    onClick={() => dispatch(decrementCount())}
    >-</button>
     <button
    onClick={() => dispatch(setCount(5000))}
    >12000</button>
    </>
  )
}

export default Home