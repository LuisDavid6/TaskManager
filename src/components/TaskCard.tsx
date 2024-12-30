import { RiCloseCircleLine, RiMore2Fill } from 'react-icons/ri'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Switch from 'react-switch'

import { Task } from '../types'
import { useTaskContext } from '../context/TaskContext'
import { useState } from 'react'
import EditTaskForm from './EditTaskForm'

const TaskCard = ({ task }: { task: Task }) => {
  const { deleteTask, updateTask } = useTaskContext()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex gap-5 items-center mb-5'>
      <section className=''>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className='IconButton bg-transparent border-none ring-0' aria-label='Customise options'>
              <RiMore2Fill className='size-8 text-blue-600 border-2 rounded-lg border-gray-600 p-1' />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className='bg-gray-700 rounded-lg' side='left'>
              <DropdownMenu.Item className='py-2 px-3 hover:bg-blue-600 cursor-pointer rounded-t-lg' onClick={() => setIsOpen(true)}>
                Editar
              </DropdownMenu.Item>
              <DropdownMenu.Item className='py-2 px-3 hover:bg-red-600 cursor-pointer rounded-b-lg' onClick={() => deleteTask(task.id)}>
                Borrar
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </section>
      <section className='flex flex-col flex-wrap items-start justify-start w-4/6'>
        <h2 className='text-xl'>{task.title}</h2>
        <h4 className='text-md italic text-gray-400 text-wrap ml-2 text-start'>{task.description}</h4>
      </section>
      <h4 className='hidden md:flex'>{task.createdAt.replace('T', ' ').substring(0, task.createdAt.indexOf('.'))}</h4>
      <section className='flex gap-2'>
        <h4 className={`${task.completed == true ? 'text-green-500' : 'text-orange-500'}`}>{task.completed == true ? 'completado' : 'Pendiente'}</h4>
        <Switch
          offColor='#ea580c'
          onChange={(e: boolean) => {
            updateTask(task.id, { completed: e.valueOf() })
          }}
          checked={task.completed}
        />
      </section>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 w-full h-full z-50 flex items-center justify-center'>
          <div className=' p-6 rounded shadow-xl bg-gray-700 relative'>
            <div
              onClick={() => setIsOpen(false)}
              className='cursor-pointer absolute top-0 right-0 h-7 w-7 rounded-full bg-opacity-70
                flex items-center justify-center'
            >
              <RiCloseCircleLine className='size-6' />
            </div>
            <EditTaskForm id={task.id} title={task.title} description={task.description || ''} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskCard
