import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import Question1 from './components/Question1';
import Question2 from "./components/Question2";
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Question5and6 from './components/Questions5and6';

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

    await axios.post('http://192.168.0.145:5000/app/getAll', {array})
    .then((response) => {
      console.log(response.data)
      updateResponseArray(response.data)

    })
  }


  return (
    <div className="App">
     
    <Question1 loadCountryName={loadCountryName} getCountry={getCountry} responseCountry={responseCountry}></Question1>
    <Question2 loadSearch={loadSearch} addToArray={addToArray} getArray={getArray} responseArray={responseArray} array={array}></Question2>         
    <Question3></Question3>
    <Question4></Question4>
    <Question5and6></Question5and6>

    </div>
  );
}

export default App;
