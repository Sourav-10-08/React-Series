import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    console.log("clicked" , counter);
    counter=counter+1 
    setCounter(counter)
  }
    const removeValue = () => {
      console.log("clicked" , counter);
      counter=counter-1 
      setCounter(counter)
    }


  return (
    <>
     <h1>Counter Project</h1>
     <h2>Add or decrease Value</h2>
     <button onClick={addValue}>Add value  </button>
     <br/>
     <span>{counter}</span><br/>
     <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
