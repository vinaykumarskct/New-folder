import React, {useEffect , useRef} from 'react'

const Focus = () => {
    const inputRef =useRef();
   useEffect(()=> {
    inputRef.current.focus();
   }, []);
   return (
    <div>
        <label htmlFor="myInput"> Enter</label>
        <input type="text" id="myInput" ref={inputRef}/>
    </div>
   )
}

export default Focus