
import React,{useState} from 'react';
const BgChanger=() =>{
    const purple='purple';
    const [text,setText] =useState('red');

    const [bg, setBg]=useState(purple);  //count =0 initialised setCount function updates count
    const bgChange=()=>{
        if (bg==='red'){
            setBg('purple');                  //the passed val is assigned to count
            setText('red');
        }
        else{
            setBg('red');
            setText('purple');
        }
      
    }
  
    return(
      <div style={{backgroundColor:bg}}>
        <h1>Shivam </h1>
        <h1>😆😅</h1>
        <button onClick={bgChange}>{text}</button>
  
      </div>
    );
  };
  export default BgChanger;