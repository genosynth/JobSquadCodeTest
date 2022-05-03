import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import axios from "axios";
import Question1 from './components/Question1';
import Question2 from "./components/Question2";
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Register from './components/Register';
import Login from './components/Login';
import MenuBar from './components/MenuBar';

function App() {



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
     
     <MenuBar></MenuBar>

    <Router>
      <Routes>
        <Route path="/q1"  element={<Question1></Question1>}/>
        <Route path="/q2"  element={<Question2 loadSearch={loadSearch} addToArray={addToArray} getArray={getArray} responseArray={responseArray} array={array}></Question2> }/>
        <Route path="/q3"  element={<Question3></Question3>}/>        
        <Route path="/q4"  element={<Question4></Question4>}/>
        <Route path="/q5"  element={<Register></Register>}/>
        <Route path="/q6"  element={<Login></Login>}/>
        
      </Routes>
    </Router>

    </div>
  );
}

export default App;
