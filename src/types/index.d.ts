export type Task = {
  id: string
  title: string
  description?: string
  completed: boolean
  createdAt: string
}

export type CreateTask = {
  title?: string
  description?: string
  completed?: boolean
}
