import React from 'react'

const ButtonContainer = ({jobs, handleCurrentItem, currentItem}) => {
  return (
    <div className='btn-container'>
        {
            jobs.map((job, index) => (<button 
                className={currentItem === index ?  'job-btn active-btn': 'job-btn'}
                key={job.id} 
                onClick={() => handleCurrentItem(index)}>{job.company}</button>))
        }
    </div>
  )
}

export default ButtonContainer