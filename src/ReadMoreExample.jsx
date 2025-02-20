import { useReducer  } from 'react';

function ReadMoreExample() {

  function Reducer(state,action){
      if(action.type == "increment"){
           if(state.count == 0){
               alert("sorry count value is already zero so doesn't matched")
               return;
           }
           return {count:state.count +1}
      }
      else if(action.type == "decremant"){
        if(state.count == 0){
          alert("sorry count value is already zero so can't changed")
          return;
      }
        return {count:state.count -1}
      }
      throw("something went wrong")
  }

  const [state,dispatch] = useReducer(Reducer,{count:1})
  return (



    <div>
     
         <h1>USE REDUCER </h1>
         <h2>CURRENT COUNT VALUE : {state.count}</h2>

         <button onClick={()=>dispatch({type:"increment"})} >increment</button>
         <button onClick={()=>dispatch({type:"decremant"})} >decremant</button>
    </div>
  );
}

export default ReadMoreExample;
