import Question from "./Question"
import questions from "./data"

const Questions = ( {question, activeId, toggleActiveId}) => {
  return (
    <section className="container">
        {
            questions.map(question => (
                <Question 
                key={question.id} 
                {...question}
                activeId={activeId}
                toggleActiveId={toggleActiveId}
                />
            ))
        }
    </section>
  )
}

export default Questions