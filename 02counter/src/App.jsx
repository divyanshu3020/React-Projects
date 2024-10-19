import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)

  // let counter = 15;

  const addValue=()=>{
    if(counter<20){
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      
    } 
  }


  const removeValue=()=>{
    if(counter>0) setCounter(counter-1);
  }

  return (
    <>
    <h1>chai or react</h1>
    <h2>counter value:{counter}</h2>

    <button onClick={addValue}>Add value</button><br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
