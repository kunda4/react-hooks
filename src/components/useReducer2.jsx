import { useReducer} from "react"

function reducer(state,action){
    switch(action.type){
        case "Increment":
        return{count:state.count+1, showText:state.showText}
        case"ShowText":
        return{count:state.count, showText:!state.showText}
        default:
            return state
    }
}
export default function UseReducer2(){

    const [state, dispatch] = useReducer(reducer, {count:0, showText:false})

    return(
      <section className="flex flex-col justify-center items-center h-screen gap-6">
        <span>{state.count}</span>
        {state.showText&&<span>This is the Text</span>}
        <button className="border-gray-300 border-2 rounded-lg px-2 bg-gray-200 mt-10" onClick={()=> {
            dispatch({type: "Increment"})
            dispatch({type: "ShowText"})
        }}>Show Text</button>
      </section>
    )
}