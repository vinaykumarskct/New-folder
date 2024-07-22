import axios from 'axios';
import React, { useEffect, useState } from 'react'






const ApiHandling = () => {
    
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    
    
    
    
    useEffect(()=>{
        const fetchData= async()=>{
        try{
            const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
            setData(response.data);
        }
        catch(error){
            console.log("error====>>>>",error)
            setError(error.message|| "An error occurred while fetching data.")
        }
        finally{
            setLoading(false)
        }
        };
        fetchData();
    },[]);
    return (
    <div>
{
    error && (
        <p style={{color:'tomato'}}>You have an error </p>
    )
}
    </div>
  )
}

export default ApiHandling