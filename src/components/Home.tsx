import CreateTaskForm from './CreateTaskForm'
import TasksList from './TasksList'

const Home = () => {
  return (
    <div className='flex flex-col '>
      <h1 className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 relative pb-5 mb-10'>
        Task Manager
        <span className='absolute inset-0 text-gray-800 blur-lg -translate-y-1 translate-x-1'>Task Manager</span>
      </h1>
      <CreateTaskForm />
      <h2 className='text-left mt-16 text-3xl font-semibold'>Lista de Tareas</h2>
      <TasksList />
    </div>
  )
}

export default Home
