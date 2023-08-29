import { useState } from "react"
import { toast } from "react-toastify"

const Form = ({addItem}) => {
  const [item, setItem] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!item) {
        toast.error('Please specify a item name')
        return;
    }
    addItem(item)
    setItem('')
  }
  return (
    <form onSubmit={handleSubmit}>
        <h4>grocery bud</h4>
        <div className="form-control">
            <input 
            type="text" 
            name="item" 
            id="item" 
            value={item} 
            onChange={(e) => setItem(e.target.value)}
            />
            <button 
            type="submit"
            className="btn"
            >Submit</button>
        </div>
    </form>
  )
}

export default Form