import { useState } from "react"
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const Question = ({id, title, info, activeId, toggleActiveId}) => {
    const isActive = activeId === id
  return (
    <article className="question">
        <header>
            <h5>{title}</h5>
            <button
            onClick={() => toggleActiveId(id)} 
            className="question-btn"
            >{isActive?<AiOutlineMinus/>:<AiOutlinePlus/> }</button>
        </header>
        {isActive && <p>{info}</p>}
    </article>
        
  )
}

export default Question