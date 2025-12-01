import { Toast } from "./components/toast";
import { Wrapper } from "./components/Wrapper";
import { Buttons } from "./components/Buttons";
import { FaChrome } from "react-icons/fa6";
import { useState } from "react";

import { Todo } from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement =() => {
    setCount(count-1);
  };

  const handleReset=()=>{
    setCount(0); 
  };

  const [IsLogedIn, setIsLogedIn] = useState(false)
  const handleLogin=()=>{
    setIsLogedIn(!IsLogedIn)
  }

  const handleColor=()=>{
    document
    .querySelector("h1")
    .classList.add("text-red-500 font-semibold itallic");
  };

  return (
    <>
      <Toast type="Success" message="Successf" />
      <Toast type="Error" message="Error" />
      <div>
        <Buttons id="btn1" message="Login" />
        <Buttons id="btn2" message="Submit" />
      </div>
      <Wrapper>
        <h2>HI i am a children props</h2>
      </Wrapper>
      <FaChrome />

      <div className="bg-amber-300 h-48 ">
        <h2 className="text-7xl ml-32">Count:{count}</h2>
        <button onClick={handleIncrement} className="bg-red-500 text-4xl rounded-lg border-2 border-white ml-4 mt-4 ">Increment</button>
        <button onClick={handleDecrement} className="bg-red-500 text-4xl rounded-lg border-2 border-white ml-4 mt-4">Decrement</button>
        <button onClick={handleReset}     className="bg-red-500 text-4xl rounded-lg border-2 border-white ml-4 mt-4">Reset</button>
      </div> 

      <div className="px-10 py-10 flex flex-col gap-8">
         <h1 className={`text-4xl ${IsLogedIn?"text-green-400":"text-red-600"}`}>{IsLogedIn ?"Welcome User!":"Please Login"}</h1>
        <button className={`border-3 w-32  h-16 text-2xl  border-black bg-gray-200 focus:border-blue-400`} onClick={handleLogin}>{IsLogedIn ?"Log Out":"Log In" }</button>
      </div>
      <Todo/>
    </>
  );
}
export default App;
