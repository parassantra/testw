import React, { useState } from 'react'


const SomeComp = () => (<div>Some Component....</div>)
const Toogle = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        {show && <SomeComp/>}
        <button onClick={() => setShow(!show)}>Toggle Display</button>
    </div>
  )
}

export default Toogle