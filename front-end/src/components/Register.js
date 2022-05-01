import React, {useState} from 'react'
import axios from 'axios'

function Register() {

    const [registrationDetails, updateRegistrationDetails] = useState({
        name:"",
        email:"",
        password: ""
    })

    const setRegistrationName = (e) =>{
        updateRegistrationDetails({
            name:e.target.value,
            email:registrationDetails.email,
            password:registrationDetails.password
        })
    }

    const setRegistrationEmail = (e) =>{
        updateRegistrationDetails({
            name:registrationDetails.name,
            email:e.target.value,
            password:registrationDetails.password
        })
    }

    const setRegistrationPassword = (e) =>{
        updateRegistrationDetails({
            name:registrationDetails.name,
            email:registrationDetails.email,
            password:e.target.value
        })
    }

    let signUp = (event)=>{
        event.preventDefault()
        const registered = registrationDetails;
      
        axios.post('http://localhost:5000/app/signup', registered)
        .then((response) => {
          if(response.data){
          alert("Registered succesfully!")
           return window.location.href="/"
          //console.log(response)
          } else{ alert("Username and/or Email already in use! Please use another username and/or email.")}
        })
        
      }

  return (

   
    <div className='question'>
        <input type="text" placeholder='Name' required onChange={setRegistrationName}></input>
        <input type="email" placeholder='Email' required  onChange={setRegistrationEmail}></input>
        <input type="password" placeholder='Password' required  onChange={setRegistrationPassword}></input>
        <button onClick={signUp} >Register</button>

        
    </div>
  )
}

export default Register