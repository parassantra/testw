import { useState } from 'react';
import people from './data'
import { FaChevronCircleLeft,  FaChevronCircleRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0);
  const {id, name, job, image, text} = people[index]

  const handleNext = () => {
    let ind = (index + 1) % people.length
    setIndex(ind)
  }

  const handlePrev = () => {
    let ind = ((index - 1) + people.length) % people.length
    setIndex(ind)
  }


  const handleRandom = () => {
    let ind = (index + 1) % people.length
    setIndex(ind)
  }


  return <main>
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'><FaQuoteRight /></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='btn-container'>
        <FaChevronCircleLeft className='prev-btn'
        onClick={handlePrev}
        />
        <FaChevronCircleRight className='next-btn'
        onClick={handleNext}
        />
      </div>
      <button
      className='btn'
      onClick={handleRandom}
      >Surprise Me</button>
    </article>
  </main>;
};
export default App;
