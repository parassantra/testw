import { useState } from "react";
import PersonList from "./Components/PersonList";
import personList from "./data"

const App = () => {
  const [persons, setPersons] = useState(personList)
  return <main>
     <section className="container">
        <h3>{persons.length > 0 ? persons.length : "No "} Birthdays today</h3>
        {persons.length > 0 && <PersonList persons={persons}/>}
        <button className="btn" onClick={() => setPersons([])}>Clear All</button>
      </section>
  </main>;
};
export default App;
