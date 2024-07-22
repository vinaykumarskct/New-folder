import React, { useState } from 'react'

const Counter  = () => {
    const[data,setData]=useState(0)

    const Incre =() =>{
        

    }
  return (
    <div>
        <h1>Counter Component</h1> 
        
        <button onClick={Incre}>Increment</button>
        <h1>{data }</h1>
        <button>Decrement</button>
        
    </div>
  )
}

export default Counter 