import React, { useState } from 'react'
import Person from './Person'

const PersonList = ({persons}) => {
  return (
    <section>
        {persons.map(person => (<Person {...person} key={person.id}/>))}
    </section>
  )
}

export default PersonList