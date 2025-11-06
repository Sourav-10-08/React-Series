import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = usestate(8)
  const [numberallowed, setNumberallowed] =usestate(false)
  const [specialcharallowed, setSpecialcharallowed] = usestate(false)
  const [ password, setPassword] = usestate("")

  const [ passwordgenerator, setpasswordgenerator] = useCallback( () =>
  { }
    , [length, numberallowed, specialcharallowed])

  return (
    <>
     <div >
      <h1 className='text-4xl text-white text-center'> Password Generator</h1>
    </div>

    </>
  )
}

export default App
