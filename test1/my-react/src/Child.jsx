import {memo} from 'react'

const Child = ({count}) => {
    console.log("child render")
  return (
    <div>{count}</div>
  )
}

export default memo(Child)