import React,{useState} from 'react'

export default function UseStateHandler() {

    const [count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(count + 1);
    }
  return (
    <div>
     <h>Count:{count}</h><br></br>
     <button onClick={handleIncrement}>increment</button>

    </div>
  )
}
