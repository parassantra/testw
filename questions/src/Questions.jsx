import Question from "./Question"
import questions from "./data"

const Questions = () => {
  return (
    <section className="container">
        {
            questions.map(question => (
                <Question key={question.id} {...question}/>
            ))
        }
    </section>
  )
}

export default Questions