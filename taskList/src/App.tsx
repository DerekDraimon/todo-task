
import './App.css'
import { TaskProvider } from './infrastructure/context/TaskContext'
import { SearchBar } from './interfaces/components/SearchBar'
import { TaskFilterBar } from './interfaces/components/TaskFilter'
import { TaskForm } from './interfaces/components/TaskForm'
import { TaskList } from './interfaces/components/TaskList'



function App() {

  return (
    <>
      <TaskProvider>
        <div className="p-4 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
          <SearchBar />
          <TaskFilterBar />
          <TaskList />
          <TaskForm />
        </div>
      </TaskProvider>
    </>
  )
}

export default App
