import React, {memo} from 'react'

const Child1 = ({changeFunc}) => {
    console.log("child render")
  return (
    <div>Child1</div>
  )
}

export default memo(Child1)