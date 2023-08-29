import React from 'react'
import useWindowsize from './useWindowSize'

const Child9 = () => {
  const {width, height} = useWindowsize()
  return (
    <>
      <div>{width}</div>
      <div>{height}</div>
    </>
  )
}

export default Child9