import { useState } from "react"

export default function UseReducer1(){

    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(false)

    return(
      <section className="flex flex-col">
        <span>{count}</span>
        <button onClick={()=> {
            setCount(count+1)
            setShowText(!showText)
        }}>Show Text</button>
        {showText&&<span>This is the Text</span>}
      </section>
    )
}