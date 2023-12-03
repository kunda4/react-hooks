
import { useState } from "react"

export default function UseState() {

  const [count, setCount] = useState(0)
  return (
    <section className="flex justify-center items-center h-screen">
      <span className='text-2xl pb-24 ml-40'>{count}</span>
      <div className="flex gap-2">
        <button className="border border-gray-400 rounded-xl px-2 bg-gray-200" onClick={()=>setCount(count-1)}>Decrement</button>
        <button className="border border-gray-400 rounded-xl px-2 bg-gray-200" onClick={()=>setCount(count+1)}>Increment</button>
      </div>
    </section>
  );
}


