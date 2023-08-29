import { useState } from "react"
import "./App.css"
import InputTodo from './components/InputTodo'
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState<Array<todo>>([])
  const [completedTodos, setCompletedTodos] = useState<Array<todo>>([])
  return (
    <main>
      <h1>Taskify</h1>
      <InputTodo todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} 
      completedTodos={completedTodos} 
      setTodos={setTodos} 
      />
    </main>
  )
}

export default App
