import React, {useState, useEffect} from 'react';
import axios from "axios";
import jwt_decode from "jwt-decode";

function Login() {

    const [logIn, updateLogin] = useState({email:"", password:""})
    const [status, updateStatus] = useState(localStorage.getItem("token"))

    const setEmail = (e) =>{
        updateLogin({
            email:e.target.value,
            password:logIn.password
        })
    }

    const setPassword = (e) =>{
        updateLogin({
            email:logIn.email,
            password:e.target.value
        })
    }

    let postLogin = (event) =>{
        event.preventDefault()
      
        const logged = logIn;
      
         axios.post('http://192.168.0.145:5000/app/login', logged)
        //.then(response => console.log(response.data))
        .then((response) =>{ 
          if (response.data.user){// true or false check
            localStorage.setItem('token', response.data.user)
            updateLogin({email:"", password:""})
            alert("Logged in succesfully!")
            window.location.reload();
            
          } else {
            alert("Email and/or Password incorrect!")
        }
          console.log(response.data)
        })
      
      }

    
    let logOut = () =>{
      localStorage.removeItem("token")
      alert("You have logged out successfully!")
    }

      

      try {
       const decode= jwt_decode(status);
       return (
       <form onSubmit={logOut}>
       <div>Logged in as <b>{decode.name}</b> 
       <button type="submit"> Log Out</button>
       </div>
       </form>
       )

      } catch (error) {
        return (
          <div className='question'>
              <input type="email" placeholder="email" required onChange={setEmail} value={logIn.email}></input>
              <input type="password" placeholder="password" required onChange={setPassword} value={logIn.password}></input>
              <button onClick={postLogin}>Log In</button>
          </div>
        )
       
      }
      


}

export default Login