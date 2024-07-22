import React, { useEffect,useState } from 'react'
import axios from 'axios'

const BasicCrud = () => {
const [tododata1, settoDodata1]=useState([]);
const[inputvalue, setInputvalue]=useState();


useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
        console.log("todata1==========>>>", response.data)
        settoDodata1(response.data)
    })
    
}, []);

const handleinput =(e) =>{
    setInputvalue(e.target.value)
}
const handleclick = () => {
    axios.post("https://jsonplaceholder.typicode.com/todos",{title:{inputvalue}})
}

  return (
    <div><h1>BasicCrud</h1>

    <input></input>
    <button>add</button>
    {
        tododata1.map(index =>(  
            <p key={index.id}> {index.title}</p>
        ))
    }
    </div>


  )
}

export default BasicCrud