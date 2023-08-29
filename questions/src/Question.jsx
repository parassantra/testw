import { useState } from "react"
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const Question = ({id, title, info}) => {
    const[showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
        <header>
            <h5>{title}</h5>
            <button
            onClick={() => setShowInfo(!showInfo)} 
            className="question-btn"
            >{showInfo?<AiOutlineMinus/>:<AiOutlinePlus/> }</button>
        </header>
        {showInfo && <p>{info}</p>}
    </article>
        
  )
}

export default Question