import { useState } from 'react'
import { RiPencilLine } from 'react-icons/ri'
import { useTaskContext } from '../context/TaskContext'

const CreateTaskForm = () => {
  const { addTask } = useTaskContext()

  const [info, setInfo] = useState({ title: '', description: '' })
  const [error, setError] = useState('')

  return (
    <div className='w-full flex flex-col'>
      <form className='flex flex-col md:flex-row gap-10'>
        <section className='flex items-center gap-5 '>
          <RiPencilLine className='size-10 text-blue-600 hidden md:flex' />
          <section className='relative max-w-md'>
            <input
              id='title'
              type='text'
              value={info.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInfo({ ...info, title: e.target.value })}
              className='border-b-2 focus:border-b-blue-600 px-2 pt-6 pb-2 w-full bg-transparent text-md appearance-none focus:outline-none focus:ring-0 peer'
              placeholder=' '
            />
            <label
              htmlFor='title'
              className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-title cursor-text'
            >
              Título
            </label>
          </section>
        </section>

        <section className='relative max-w-md md:max-w-full'>
          <input
            id='description'
            type='text'
            value={info.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInfo({ ...info, description: e.target.value })}
            className='border-b-2 focus:border-b-blue-600 px-2 pt-6 pb-2 w-full bg-transparent text-md appearance-none focus:outline-none focus:ring-0 peer'
            placeholder=' '
          />
          <label
            htmlFor='description'
            className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-title cursor-text'
          >
            Descripción
          </label>
        </section>

        <button
          className='bg-gradient-to-br from-blue-600 to-blue-500 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 py-2 px-4 text-white rounded-md transition duration-500 ease-in-out hover:scale-110 hover:bg-blue-500 p-2 mt-5 w-4/12 md:w-3/12'
          onClick={async (e) => {
            e.preventDefault()

            if (info.title.length < 1 || info.description.length < 1) setError('Completa todos los campos')
            else {
              addTask(info)
              setError('')
              setInfo({ title: '', description: '' })
            }
          }}
        >
          Agregar
        </button>
      </form>
      {error.length > 1 && <span className='mt-10 text-red-500'>{error}</span>}
    </div>
  )
}

export default CreateTaskForm
