import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';

const Axios2 = () => {
  const [tododata1, setTododata1] = useState([]);
  const [input, setInput] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        console.log("todolist=====>>>>>>", response.data);
        setTododata1(response.data);
      })
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClick = () => {
    axios.post("https://jsonplaceholder.typicode.com/todos", { title: input })
      .then(response => {
        console.log("addeddd====>>>>>>>", response.data);

        // Use the spread operator to update the state correctly
        setTododata1([...tododata1, response.data]);
        setInput("");
      }) 
  }

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => {
        setTododata1(tododata1.filter(task => task.id !== id));
      })
  };

  return (
    <div>
      <h1>Basic Crud</h1>
      <input onChange={handleChange} value={input} />

      <button onClick={handleClick}>Add</button>

      {tododata1 && tododata1.map(index => (
        <div key={index.id}>
          <p>{index.title}</p><br></br>
          <button>Update</button>
          <button onClick={() => handleDelete(index.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Axios2;