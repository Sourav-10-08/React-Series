import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
 

  return (
 
    <div className='flex justify-evenly '>
      <Card username="Scratch" price="10$" />
      <Card username="Web development" price="15$" />
      <Card username="Python" price="12$" />
      <Card username="Mathematics" price="15$" />
      <Card username="Generative AI" price="12$" />
      
      
      
    </div>
   
  )
}

export default App
