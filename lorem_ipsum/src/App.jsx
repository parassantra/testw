import { useState } from "react";
import { nanoid } from "nanoid";
import data from './data'

const App = () => {
  const[count, setCount] = useState(1);
  const [textArr, setTextArr] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = data.slice(0, count)
    setTextArr(newData)
  }

  return <main>
    <section className="section-center">
      <h4>bored of lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs</label>
        <input type="number" value={count} name="amount" onChange={(e) => setCount(e.target.value)} min="1" max="9" step="1"/>
        <button className="btn" type="submit">Submit</button>
      </form>
      <article className="lorem-text">
      {
        textArr.map(para => { 
          return(
            <p key={nanoid()}>{para}</p>
          )
        })
      }
      </article>
    </section>
  </main>;
};
export default App;
