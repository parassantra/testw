import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import ButtonContainer from "./ButtonContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchJobs = async () => {
    const data = await fetch(url)
    const res = await data.json()
    setJobs(res)
    setIsLoading(false)
  }

  const handleCurrentItem = (id) => {
    console.log(id)
    setCurrentItem(id)
  }

  useEffect(()=> {
    fetchJobs()
  },[])
  
  console.log(jobs)
  if(isLoading){
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }

  return <section className="jobs-center">
          <ButtonContainer 
          jobs={jobs}
          handleCurrentItem ={handleCurrentItem}
          currentItem={currentItem}
          />
          <JobInfo 
          jobs={jobs}
          currentItem={currentItem}
          />
        </section>
};
export default App;
