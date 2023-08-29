import { nanoid } from "nanoid"
import { useState } from "react"

interface InputTodoProps {
  todos: todo[]
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>
}

const InputTodo = ({todos, setTodos}: InputTodoProps) => {
    const [todo, setTodo] = useState<string>("")
    const addTodo = () =>{
        const newTodos = [...todos]
        newTodos.push({
          id: nanoid(),
          item: todo,
          isCompleted : false
        })
        setTodos(newTodos)
        setTodo("")
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }
  return (
    <section className='input_section'>
        <input 
        type="text" 
        placeholder="Enter todo item" 
        name="todo" 
        value={todo} 
        onChange={onChangeHandler}
        className="input_field"
        />
        <button className="input_button" onClick={addTodo}>Go</button>
    </section>
  )
}

export default InputTodo