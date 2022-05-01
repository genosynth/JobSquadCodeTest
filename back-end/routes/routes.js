const express = require('express')
const router = express.Router()
const axios = require('axios')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const userRegistration = require("../models/userRegistration")
const dotenv = require("dotenv")

dotenv.config()


  
router.post('/getCountry', async (req,res)=>{  
    const userSearched = req.body.countryName

    try {
    const matchedCountry = await axios.get(`https://restcountries.com/v3.1/name/${userSearched}?fullText=true`)
    console.log(matchedCountry.data)
    return res.send(matchedCountry.data)
    } catch (error){
        //console.log(error)
        let message = "Not Found"
        return res.send(message)
    }    
   /* if (matchedCountry.data){
     return res.send(matchedCountry.data)
    }

    else return alert("Not Found!")
    
    */   
})

router.post('/getAll', async (req,res)=>{

    const userSearched = req.body.array //hanwhekk bello, tajjeb
    console.log(req.body.array)
    const allCountries = await axios.get(`https://restcountries.com/v3.1/all`)

    if (allCountries.data){

        const result = allCountries.data.filter((country) => {
            
        for (let i=0; i<userSearched.length; i++){
           if( country.name.common.toLowerCase().includes(userSearched[i].toLowerCase())){
               return country
           };
        }
        })
        const namesOnly = result.map(country => country.name.common);

        console.log(namesOnly)
        return res.send(namesOnly)
       }
})

router.get('/filterAll', async (req,res)=>{

    const allCountries = await axios.get(`https://restcountries.com/v3.1/all`)
    //console.log(allCountries.data)
    const namesOnly = allCountries.data.map(country => country.name.common)
    
    return res.send(namesOnly)
} )

router.post('/signup', async (request, response) => {
    
    let hashedPassword = await bcrypt.hash(request.body.password, 8);
    const signedUpUser = new userRegistration({
        name: request.body.name,        
        email: request.body.email,
        password: hashedPassword,
       

    })

    signedUpUser.save()
    .then (data => {
        console.log(data)
        response.json(data)        
    })
    .catch (error => {
        response.json(error)        
    })
})

router.post('/login', async(request, response) => {
    //response.send('send')
   const user = await userRegistration.findOne({
       email: request.body.email, 
       //password: request.body.password {THIS IS COMMENTED AS PASSWORD IS BEING CHECKED BY HASHING AFTER THIS LINE}
    })

    if(user && await bcrypt.compare(request.body.password, user.password)){

        const token = jwt.sign({
            name:user.name,
            email:user.email
        }, process.env.TOKEN_KEY)
        
        console.log(user)
        return response.json({status: 'ok', user:token})
    } else {return response.json({status:"error", user:false})}

})

module.exports = router