import React,{useState} from 'react'

const Action2 = () => {
    const [user, setUser]=useState("Student")
    const handlelogout=()=>{
        setUser("")
    }
    const handleloging =()=>{
        setUser("student")
    }
  return (
    <div>
        { user ?

        
       <h1>welcome {user}</h1> :
        <h1>New user please login int contin..</h1>
}
        <button onClick={handlelogout}>logout</button>
        <button onClick={handleloging}>loging</button>
    </div>
  )
}

export default Action2