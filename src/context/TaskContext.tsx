import { createContext, useContext, useState, ReactNode } from 'react'
import { CreateTask, Task } from '../types'
import { getTasks, createTask, deleteTaskById, updateTaskById } from '../services/tasksServices'

type TaskStore = {
  tasks: Task[]
  getTaskList: (filter: string) => void
  addTask: (task: CreateTask) => void
  updateTask: (id: string, task: CreateTask) => void
  deleteTask: (id: string) => void
}

const initialValue: TaskStore = { tasks: [], getTaskList: () => {}, addTask: () => {}, updateTask: () => {}, deleteTask: () => {} }

const TaskContext = createContext<TaskStore>(initialValue)
export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const getTaskList = async (filter: string) => {
    const tasks = await getTasks(filter)
    setTasks(tasks)
  }

  const addTask = async (newTask: CreateTask) => {
    await createTask(newTask)
    await getTaskList('')
  }

  const updateTask = async (id: string, task: CreateTask) => {
    await updateTaskById(id, task)
    await getTaskList('')
  }

  const deleteTask = async (id: string) => {
    await deleteTaskById(id)
    await getTaskList('')
  }

  return <TaskContext.Provider value={{ tasks, getTaskList, addTask, updateTask, deleteTask }}>{children}</TaskContext.Provider>
}

export const useTaskContext = () => useContext(TaskContext)
