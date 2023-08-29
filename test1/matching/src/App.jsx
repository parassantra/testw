import { useState } from 'react'
import './App.css'
import { data } from './data'

let shuffle = (arr) => {
  for(let i = arr.length -1; i >=0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
let newData = shuffle([...Object.keys(data), ...Object.values(data)])

function App() {
  const [buttons, setButtons] = useState(newData)
  const [selected, setSelected] = useState([])


  const handleClick = (e) => {
    const itemToset = e.target
    const item = e.target.innerText;
    if(selected.length === 0 || selected.length ===2){
      e.target.className = "selected"
      setSelected([itemToset])
    }
    else if(selected.length === 1){
      e.target.className = "selected"
      if((data[selected[0].innerText] === item) || data[item] === selected[0].innerText ){
        newData.splice(newData.indexOf(selected[0].innerText), 1)
        newData.splice(newData.indexOf(item), 1)
        setButtons(newData)
        setSelected([])
      }else{
        setSelected([])
        selected.map(item => item.className="")
        e.target.className = ""
      }
    }
  }

  return(
    <div>
      {
        buttons.map(item =>{
          return <button key={item}
          onClick={(e) => handleClick(e)}
          >{item}</button>
        })
      }
      {buttons.length === 0 && <span>Win!!</span>}
    </div>
  )



}

export default App
