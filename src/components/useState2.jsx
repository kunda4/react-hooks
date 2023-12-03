import { useState } from "react"

export default function UseState2(){

    
    const [inputvalue, setInputvalue] = useState("Anitha")

    return(
        <div>
            <input type="text" placeholder="enter something...." onChange={(event)=> setInputvalue(event.target.value)}/>
            <span>{inputvalue}</span>
        </div>
    )
}