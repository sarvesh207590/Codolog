import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increasecount() {
    setCount(count + 1);
  }
  function decreasecount(){
    setCount(count - 1);
  }
  function resetcount (){
    setCount(0)
  }

  useEffect(function(){
    setInterval(function(){
      setCount(c => c+1)
    },1000)
  },[]);

  return (
    <div className="text-center text-2xl mt-10">
      <h1>{count}</h1>
      <br />
      <div className="flex gap-1 justify-center text-sm">
        <button
          onClick={increasecount}
          className="hover:cursor-pointer border p-1"
        >
          increase count
        </button>
        <button
          onClick={decreasecount}
          className="hover:cursor-pointer border p-1"
        >
          decrease count
         </button> 
        <button
          onClick={resetcount}
          className="hover:cursor-pointer border p-1"
        >
          reset count
         </button> 
      </div>
    </div>
  );
}

export default App
