import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className=" bg-red-500">
    Hello world!
  </h1>
  <button class="bg-blue-500 text-white p-4 rounded">Test</button>

    </>
  )
}

export default App
