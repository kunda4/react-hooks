import { useState } from "react"

function App() {

  const [count, setCount] = useState(0)
  function Increment(){
    setCount(count+1)
  }

  return (
    <div className="flex justify-center items-center mt-10 gap-2">
        <h1 className='text-2xl'>{count}</h1>
        <button className="border border-gray-400 rounded-xl px-2" onClick={Increment}>Increment</button>
    </div>

    
  )
}

export default App
