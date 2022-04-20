import React, { useState } from "react";
import './App.css';
const App = () => {
  const [result, setResult] = useState("");
  const Inphandler = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear=()=>{
    setResult("");
  }
  const backspace=()=>{
    setResult(result.slice(0,result.length-1));
  }
  const calculate=e=>{
    try{
      setResult(eval(result).toString());
    }
    catch(err){
      setResult("Error");
    }
  }
  return (
    <>
    <h1>Calculator</h1>
      <div className="container">
        
        <form action="">
          <input type="text" value={result} onChange={Inphandler} />
        </form>
      <div className="keypad">
        <button className='highlight'onClick={clear} id='clear'>AC</button>
        <button className='highlight' onClick={backspace} id='backspace'>C</button>
        <button className='highlight' name="/" onClick={Inphandler}>&divide;</button>
        <button name="7" onClick={Inphandler}>7</button>
        <button name="8" onClick={Inphandler}>8</button>
        <button name="9" onClick={Inphandler}>9</button>
        <button className='highlight' name="*" onClick={Inphandler}>&times;</button>
        <button name="4" onClick={Inphandler}>4</button>
        <button name="5" onClick={Inphandler}>5</button>
        <button name="6" onClick={Inphandler}>6</button>
        <button className='highlight' name="-" onClick={Inphandler}>&ndash;</button>
        <button name="1" onClick={Inphandler}>1</button>
        <button name="2" onClick={Inphandler}>2</button>
        <button name="3" onClick={Inphandler}>3</button>
        <button className='highlight' name="+" onClick={Inphandler}>+</button>
        <button name="0" onClick={Inphandler}>0</button>
        <button name="." onClick={Inphandler}>.</button>
        <button className='highlight' onClick={calculate} id='equal'>=</button>
      </div>
      </div>
    </>
  );
};

export default App;
