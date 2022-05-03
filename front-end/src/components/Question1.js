import React, {useState} from 'react'
import axios from 'axios'

function Question1() {

  const [countryName, updateCountryName] = useState("")
  const [responseCountry, updateResponseCountry]= useState("")
  const [responseCountryFlag, updateResponseCountryFlag] = useState("")
  const [responseAltSpellings, updateResponseAltSpellings] = useState("")

  const loadCountryName = (e) => {
    updateCountryName(e.target.value)
  }

  let getCountry = async(event)=>{
    event.preventDefault()  
  
    console.log(countryName)
    await axios.post('http://192.168.0.145:5000/app/getCountry', {countryName})
    .then((response) => {
      if (!response.data[0].name) {
        updateResponseCountry("")
        updateResponseCountryFlag("")
        updateResponseAltSpellings("")
        return alert("Not Found!")
      }
      console.log(response.data[0])
      updateResponseCountry(response.data[0].name.common)
      updateResponseCountryFlag(response.data[0].flags.png)
      updateResponseAltSpellings(response.data[0].altSpellings[2])

    })    
    
  }

  return (
    <div className='question'>
      <p>Search a contry by name and get an exact match.</p>
    <input onChange={loadCountryName} placeholder="Exact Search"></input>
     <button onClick={getCountry}>Click</button>
     <h1>{responseCountry}</h1>
     <p>{responseAltSpellings}</p>
     <img src={responseCountryFlag}></img>

     
    </div>
  )
}

export default Question1