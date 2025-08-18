import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Body from './body'

function App() {
  const [showCompleted, setShowCompleted] = useState(false);
  const [showTaskTodo, setShowTaskTodo] = useState(true);

  return (
    <div className='flex flex-col items-center p-x-4'>
      <Navbar showCompleted={showCompleted} setShowCompleted={setShowCompleted} showTaskTodo={showTaskTodo} setShowTaskTodo={setShowTaskTodo}/>
      <Body showCompleted={showCompleted} showTaskTodo={showTaskTodo}/>
    </div>
  )
}

export default App
