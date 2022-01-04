import React,{ useReducer} from 'react';


const initialState = 0;

const reducer = (state,action) => {
    console.log(state,action);
    if (action.type === "Increment"){
        return state +1;
    }
    if (action.type === "decrement"){
        return state -1;
    }
    return state;
}


const UseReducer = () => {
    const[state,dispatch ] = useReducer(reducer,initialState);
    
    return (
      <div>
        <p>{state}</p>
            <button onClick={() => dispatch({type:"Increment"})} >Inc</button>
            <button onClick={() => dispatch({type:"decrement"})} >Inc</button>

      </div>
    );
  };
  export default UseReducer;