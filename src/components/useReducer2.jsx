import { useReducer} from "react"

export default function UseReducer(){
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

    const [state, dispatch] = useReducer(reducer, {count:0, showText:false})

    return(
      <section className="flex flex-col">
        <span>{state.count}</span>
        <button onClick={()=> {
            dispatch({type: Increment})
            dispatch({type: ShowText})
        }}>Show Text</button>
        {state.showText&&<span>This is the Text</span>}
      </section>
    )
}