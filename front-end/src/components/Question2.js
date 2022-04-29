import React from 'react'

function Question2({responseArray}) {
  return (
    responseArray.map(country => {

        return <p key={country}>{country}</p>                    

    })   
  )
}

export default Question2