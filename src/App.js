import './App.css';
import React,{useState} from 'react';
import Counter from './components/Counter';
import BgChanger from './components/BgChanger';
const App=() =>{
  
  return(
    <div>
      <Counter/>
      <BgChanger/>
    </div>
  );
};
export default App;
