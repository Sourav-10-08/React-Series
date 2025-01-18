import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "Sourav",
    age:25
  }

  return (
    <>
    <div className='flex'>
      <h1 className='bg-color: bg-red-600 text-white p-10 rounded-2xl mr-4'>Tailwind CSS</h1>
     <div className='mr-4'><Card username="Sourav" btnText="click me" /></div>
      <Card username="Ram" btnText="Visit me" />
      
    </div>
    </>
  )
}

export default App
