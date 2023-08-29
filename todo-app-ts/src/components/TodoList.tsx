import Todo from "./Todo"

interface TodoListProps{
    todos: todo[],
    completedTodos: todo[],
    setTodos: React.Dispatch<React.SetStateAction<todo[]>>
}

const TodoList = ({todos, completedTodos, setTodos}: TodoListProps) => {
  return (
    <section className="todos">
        <section className="todos_completed_section">
            <h4>Todos</h4>
            {
                todos.map((todo) => {
                    return !todo.isCompleted && <Todo key={todo.id} {...todo} todos={todos} setTodos={setTodos} />
                })
            }
        </section>
        <section className="todos_uncompleted_section">
            <h4>Completed Todos</h4>
            {
                todos.map((todo) => {
                    return todo.isCompleted && <Todo key={todo.id} {...todo} todos={todos} setTodos={setTodos}/>
                })
            }
        </section>
    </section>
  )
}

export default TodoList