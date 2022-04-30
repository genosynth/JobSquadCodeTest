import React from 'react'

function Question1({loadCountryName,getCountry,responseCountry}) {
  return (
    <div>
    <input onChange={loadCountryName} placeholder="Exact Search"></input>
     <button onClick={getCountry}>Click</button>
     <div>{responseCountry}</div>
    </div>
  )
}

export default Question1