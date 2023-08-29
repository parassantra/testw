import './App.css'
import useFetchAxios from './useFetchAxios';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, data, error] = useFetchAxios(url)
  console.log(loading, data, error)
  
  if(loading){
    return <div>
      loading....
    </div>
  }
  if(error !== null){
    return (<div>
      error
    </div>)
  }
  if(data.length === 0){
    return <div>
      no tours left
    </div>
  }
  
    return(
      data && data?.map(tour => (
        <div key={tour.id}
        >{tour.name}</div>
      ))
    )
  
 

}

export default App
