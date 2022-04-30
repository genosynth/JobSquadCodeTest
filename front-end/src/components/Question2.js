import React from 'react'
import Question2Ans from "./Question2Ans"

function Question2({loadSearch, addToArray,responseArray,array,getArray}) {
  return (
    <div className='question'>
        <input onChange={loadSearch} placeholder="Add to array" ></input>
     <button onClick={addToArray}>Add</button>

     <button onClick={getArray}>Search</button>
     <div>Your Array Search Input - {array.map(string=><p key={string}>{string}</p>)}</div>
     <Question2Ans responseArray={responseArray}></Question2Ans>     
    </div>
  )
}

export default Question2