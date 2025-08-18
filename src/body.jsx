import { useRef, useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { MdEdit, MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";


const body = ({ showCompleted, showTaskTodo }) => {
  const addtaskref = useRef(null)
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || []
  })
  const [Complete, setComplete] = useState(false)
  const [inCompleteTodo, setIncompleteTodo] = useState([])


  const handleAdd = () => {
    const newtask = addtaskref.current.value.trim()

    setTodos([...todos, { newtask, id: uuidv4(), isCompleted: false }])
    const localtodo = JSON.stringify(todos)
    localStorage.setItem("todos", todos)
    addtaskref.current.value = ''

  }

  const handleDelete = (id) => {
    const updatedtodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedtodos)
  }

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  useEffect(() => {
    saveToLS()
  }, [todos])


  const handleEdit = (id) => {
    const tasktoEdit = todos.find((todo) => id === todo.id)
    if (!tasktoEdit) return
    const task = tasktoEdit.newtask
    addtaskref.current.value = task
    handleDelete(id)
  }

  const handleCheck = (id) => {
    const updatedlist = todos.map((todo, index) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
    setTodos(updatedlist)
  }

  return (
    <div className='main flex-col px-4 min-h-[600px] max-h-fit sm:w-2xl w-[95vw] border-[4px] border-[rgb(49,49,49)] rounded-2xl flex self-center items-center font-["Baloo Bhai 2"]'>
      <div className="head flex w-full justify-center pt-4 sm:font-semibold font-medium sm:text-2xl text-xl">Manage your todos at one place</div>
      <div className="content w-full ">
        <div className="add flex flex-col items-center mt-4 font-semibold border-b-[2px] border-t-[2px] border-[rgb(49,49,49)] sm:py-7 py-3 mb-7 ">
          <div className="sm:flex hidden">Add a TODO</div>
          <div className="input flex justify-center h-[44px] items-center">
            <input ref={addtaskref} type="text" placeholder='Add' className="bg-[rgb(49,49,49)] m-1 rounded-[4px] py-[6px] px-2" />
            <button onClick={handleAdd} className='bg-[rgb(49,49,49)] h-9 px-6 rounded-[4px] inline-flex items-center overflow-hidden text-xl'><IoAdd /></button>
          </div>

        </div>
        <div className="todossection flex flex-col items-center w-full border border-[rgb(49,49,49)] border-2px h-fit rounded-[10px] pt-4">
          <div className={`head md:text-2xl text-xl md:font-bold font-medium mb-3 font-['Baloo Bhai 2']`}>
            {(showTaskTodo)?(todos.filter(todo => !todo.isCompleted).length === 0) ? 'Nothing Todo' : 'Your Todos':(todos.filter(todo => todo.isCompleted).length === 0) ? 'Nothing Completed' : 'Completed Todo'}
          </div>
          <div className="todos">
            <ul>
              {
                (!showCompleted && showTaskTodo)
                  ? todos.filter(todo => !todo.isCompleted).map((todo, index) => (
                    <li key={todo.id} className='flex space-x-2 mb-3 mx-3'>
                      <div className='todo md:w-[400px] sm:w-[300px] w-[50vw]  border-none bg-[rgb(49,49,49)] rounded-[10px] flex items-center p-2 justify-between '>
                        <div className="front flex space-x-2">
                          <input type="checkbox" onChange={() => handleCheck(todo.id)} />
                          <div className="text  wrap-anywhere w-full cursor-pointer font-light text-md">{todo.newtask}</div>
                        </div>
                      </div>
                      <div className="end space-x-2">
                        <button onClick={() => handleEdit(todo.id)} className='border-none rounded-[10px] bg-[rgb(49,49,49)] py-[12px] sm:px-6 px-4'><MdEdit /></button>
                        <button onClick={() => handleDelete(todo.id)} className='border-none rounded-[10px] bg-[rgb(49,49,49)] py-[12px] sm:px-6 px-4'><MdDelete /></button>
                      </div>
                    </li>
                  ))
                  : todos.filter(todo => todo.isCompleted).map((todo, index) => (
                    <li key={todo.id} className='flex space-x-2 mb-3 mx-3'>
                      <div className='todo md:w-[400px] sm:w-[300px] w-[50vw]  border-none bg-[rgb(49,49,49)] rounded-[10px] flex items-center p-2 justify-between '>
                        <div className="front flex space-x-2">
                          <input type="checkbox" onChange={() => handleCheck(todo.id)} />
                          <div className="text  wrap-anywhere w-full cursor-pointer font-light text-md line-through">{todo.newtask}</div>
                        </div>
                      </div>
                      <div className="end space-x-2">
                        <button onClick={() => handleEdit(todo.id)} className='border-none rounded-[10px] bg-[rgb(49,49,49)] py-[12px] sm:px-6 px-4'><MdEdit /></button>
                        <button onClick={() => handleDelete(todo.id)} className='border-none rounded-[10px] bg-[rgb(49,49,49)] py-[12px] sm:px-6 px-4'><MdDelete /></button>
                      </div>
                    </li>
                  ))





              }
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default body
