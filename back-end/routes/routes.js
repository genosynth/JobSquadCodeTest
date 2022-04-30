const express = require('express')
const router = express.Router()
const axios = require('axios')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const userRegistration = require("../models/userRegistration")


  
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

router.post('/signup', async(request, response) => {
    //response.send('send')
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
        //console.log(data)
    })
    .catch (error => {
        response.json(error)
        //console.log(error)
    })
})

module.exports = router