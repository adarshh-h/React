import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  
  let [counter,setCounter]= useState(15)
  const addValue=()=>{


     console.log("value added",counter);

    counter=counter+1;
    setCounter(counter+1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter vale:{counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button>Remove Value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App;
