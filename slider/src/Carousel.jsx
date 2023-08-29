import { useState, useEffect } from 'react'
import {list, shortList, longList} from './data'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const Carousel = () => {
  const [people, setPeople] = useState(longList)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + people.length ) % people.length)
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1 ) % people.length)
  }

  useEffect(()=> {
    const sliderId = setInterval(()=>{
        handleNext()
    }, 2000)

    return () => {
        clearInterval(sliderId)
    }
  })

  return (
    <section className='slider-container'>
        {
            people.map((person,personIndex) => {
                const {id, name, image, title, quote} = person
                return(
                    <article 
                        className='slide' 
                        key={id}
                        style={{
                            transform: `translateX(${100 * (personIndex - currentIndex)}%)`,
                            opacity: personIndex === currentIndex ? 1: 0,
                            visibility: personIndex === currentIndex ? 'visible': 'hidden',
                        }}
                        >
                        <img src={image} alt={name} className='person-img'/>
                        <h5 className='name'>{name}</h5>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon'/>
                    </article>
                )
            })
        }
        <button
        className='prev'
        onClick={handlePrev}
        >
            <FiChevronLeft/>
        </button>
        <button
        className='next'
        onClick={handleNext}
        >
            <FiChevronRight/>
        </button>
    </section>
  )
}

export default Carousel