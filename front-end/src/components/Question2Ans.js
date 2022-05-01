import React from 'react'

function Question2Ans({responseArray}) {
  return (
    responseArray.map(country => {

        return <h2 key={country}>{country}</h2>                    

    })   
  )
}

export default Question2Ans