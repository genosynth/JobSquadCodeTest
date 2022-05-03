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
          if(response.data.name){
          alert("Registered succesfully!")
           return window.location.href="/q6"
          //console.log(response)
          } else{ alert("Email already in use! Please use another email.")}
        })
        
      }

  return (

   
    <div className='question'>
        
        <p>Enter name, email address and password to register.</p>
        <form className="register-form" onSubmit={signUp}>
        <input type="text" placeholder='Name' required onChange={setRegistrationName}></input>
        <input type="email" placeholder='Email' required  onChange={setRegistrationEmail}></input>
        <input type="password" placeholder='Password' required  onChange={setRegistrationPassword}></input>
        <button type='submit' >Register</button>
        </form>
        
    </div>
  )
}

export default Register