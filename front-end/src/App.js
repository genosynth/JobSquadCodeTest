import React, {useState} from 'react';
import './App.css';
import axios from "axios"
import Question2 from "./components/Question2"

function App() {

  const [countryName, updateCountryName] = useState("")
  const [responseCountry, updateResponseCountry]= useState("")

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
        return alert("Not Found!")
      }
      console.log(response.data[0])
      updateResponseCountry(response.data[0].name.common)

    })

    
    
  }

  const [searchArray, updateSearchArray] = useState("")
  const [responseArray, updateResponseArray]= useState([])

  const [array, updateArray] = useState([])
  const addToArray = () =>{
    updateArray([...array, searchArray])
  }


  const loadSearch = (e) => {
    updateSearchArray(e.target.value)
  }

  const getArray = async(event)=>{
    event.preventDefault()

    await axios.post('http://192.168.0.145:5000/app/getAll', {searchArray})
    .then((response) => {
      console.log(response.data)
      updateResponseArray(response.data)

    })
  }


  return (
    <div className="App">

     <input onChange={loadCountryName} placeholder="Exact Search"></input>
     <button onClick={getCountry}>Click</button>
     <div>{responseCountry}</div>

     <input onChange={loadSearch} placeholder="Add to array" ></input>
     <button onClick={addToArray}>Add</button>

     <button onClick={getArray}>Search</button>
     <div>Array - {array.map(string=><p key={string}>{string}</p>)}</div>
     <Question2 responseArray={responseArray}></Question2>     

     

    </div>
  );
}

export default App;
