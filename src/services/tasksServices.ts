import { CreateTask } from '../types'

const url = import.meta.env.VITE_URL

export const getTasks = async (filter: string) => {
  try {
    const response = await fetch(`${url}/tasks?filter=${filter}`)

    return response.json()
  } catch (error) {
    console.log(error)
    return []
  }
}

export const createTask = async (newTask: CreateTask) => {
  try {
    const response = await fetch(`${url}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    })

    return response.json()
  } catch (error) {
    console.log(error)
    return {}
  }
}

export const updateTaskById = async (id: string, task: CreateTask) => {
  try {
    const response = await fetch(`${url}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    })

    return response.json()
  } catch (error) {
    console.log(error)
    return {}
  }
}

export const deleteTaskById = async (id: string) => {
  try {
    const response = await fetch(`${url}/tasks/${id}`, {
      method: 'DELETE',
    })

    return response.json()
  } catch (error) {
    console.log(error)
    return {}
  }
}
