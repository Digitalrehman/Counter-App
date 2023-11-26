import React,{useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRest } from "react-icons/Ai"
import './App.css'

function App() {
  let [name,setName] = useState(0);

  let plus = ()=>{
    setName(name+1)
    
  }
  let minus =()=>{
    if (name <= 0 ) {
      name = 0
      
    }  
    setName(name-1)
  }
  let reset = ()=>{
    setName(0)

  }
  return (
    <>
      <div className="container">
        <div className="border">
          <div className="screen">
            <span>{name}</span>
          </div>
          <div className="btn">
            <button onClick={plus}><AiOutlinePlus /></button>
            <button onClick={minus}><AiOutlineMinus /></button>
            <button onClick={reset}><AiOutlineRest/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
