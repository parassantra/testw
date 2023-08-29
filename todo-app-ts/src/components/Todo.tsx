import { AiFillEdit, AiFillDelete, AiFillCheckCircle, AiOutlineClose } from "react-icons/ai"


interface TodoProps{
    id: string,
    item: string,
    isCompleted: boolean,
    todos: todo[],
    setTodos: React.Dispatch<React.SetStateAction<todo[]>>
}

const Todo = ({id, item, isCompleted, todos, setTodos}: TodoProps) => {

    const removeTodo = (id: string) => {
        console.log(todos)
        let newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }
    const completeTodo = (id: string) => {
        let newTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
        setTodos(newTodos)
    }

  return (
    <li className="todo">
        <span className={!isCompleted ? `todo_item` : `todo_item completed` }>{item}</span>
        <div className="todo_action">
            <button><AiFillEdit/></button>
            <button 
            onClick={() => removeTodo(id)}
            ><AiFillDelete/></button>
            <button
            onClick={() => completeTodo(id)}
            >
                {
                    !isCompleted ? <AiFillCheckCircle/> : <AiOutlineClose/>
                }
            </button>
        </div>
    </li>
  )
}

export default Todo