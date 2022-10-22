import AppUI from "./AppUI"
import { TodoProvider } from "./context/TodoContext"

// const defaultTodos = [
//   { text: "Curso de Javascript", completed: true },
//   { text: "Curso de React", completed: false },
//   { text: "Curso de Java", completed: false },
//   { text: "Curso de Python", completed: true },
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
