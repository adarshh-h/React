import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "d:/React/03tailwindprops/src/components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    username:"dev",
    age:21
  }

  return (
    <>
      <h1 className="bg-red-400  text-blackp-4 p-4 rounded-xl mb-4 ">
        tailwind test
      </h1>
     {/* <Card channel="Adarsh" someObje={myObj}/> */}
     <Card username="Dev" btnText="click me"/>
     <Card username="Adarsh"></Card>

    </>
  );
}

export default App;
