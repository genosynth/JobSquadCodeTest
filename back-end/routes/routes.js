const express = require('express')
const router = express.Router()
const axios = require('axios')


  
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

module.exports = router