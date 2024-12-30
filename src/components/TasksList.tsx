import { useEffect, useState } from 'react'
import { RiAlignJustify, RiCheckboxCircleLine, RiInformation2Line } from 'react-icons/ri'

import { useTaskContext } from '../context/TaskContext'
import TaskCard from './TaskCard'

const TasksList = () => {
  const { getTaskList, tasks } = useTaskContext()
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getTaskList(filter)
  }, [filter])

  return (
    <div className=''>
      <div className='inline-flex rounded-md shadow-sm  my-8 ' role='group'>
        <button
          type='button'
          className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 ${
            filter == '' ? 'bg-blue-600' : 'bg-transparent'
          } border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-blue-600`}
          onClick={() => setFilter('')}
        >
          <RiAlignJustify className='mr-1' />
          Todas
        </button>

        <button
          type='button'
          className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 ${
            filter == 'pending' ? 'bg-blue-600' : 'bg-transparent'
          } border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-blue-600`}
          onClick={() => setFilter('pending')}
        >
          <RiInformation2Line className='mr-1' />
          Pendientes
        </button>
        <button
          type='button'
          className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 ${
            filter == 'completed' ? 'bg-blue-600' : 'bg-transparent'
          } border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-blue-600`}
          onClick={() => setFilter('completed')}
        >
          <RiCheckboxCircleLine className='mr-1' />
          Completadas
        </button>
      </div>

      <div className='ml-5'>{tasks && tasks.length > 0 && tasks.map((task) => <TaskCard task={task} key={task.id} />)}</div>
    </div>
  )
}

export default TasksList
