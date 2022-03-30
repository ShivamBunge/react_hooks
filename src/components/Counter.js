
import React,{useState} from 'react';
const Counter=() =>{
    const state= useState();
    const [count, setCount]=useState(0);  //count =0 initialised setCount function updates count
    const Increment=()=>{
      setCount(count+1);                  //the passed val is assigned to count
    }
  
    return(
      <div>
        <h1>Shivam</h1>
        <h1>{count}</h1>
        <button onClick={Increment}>Click me</button>
  
      </div>
    );
  };
  export default Counter;