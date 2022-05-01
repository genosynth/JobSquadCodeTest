import React, {useState, useEffect} from 'react'
import cherry from "../images/cherry.png"
import lemon from "../images/lemon.png"
import apple from "../images/apple.png"
import banana from "../images/banana.png"
import fruitspin from "../images/fruitspin.png"
import coinsImage from "../images/coins.png"

function Question4() {

  const reel1 = [cherry,lemon,apple,lemon, banana, banana, lemon, lemon]
  const reel2 = [lemon,apple,lemon,lemon, cherry, apple, banana, lemon]
  const reel3 = [lemon,apple,lemon,apple, cherry, lemon, banana, lemon]
  const style = {width:"200px"}


const [reel1Result, updateReel1Result] = useState(fruitspin)
const [reel2Result, updateReel2Result] = useState(fruitspin)
const [reel3Result, updateReel3Result] = useState(fruitspin)
const [coins, updateCoins] = useState(20)
const [message, updateMessage] = useState("")


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

  const spin = () => {
    updateCoins(coins-1)
    updateReel1Result(reel1[getRandomInt(8)])
    updateReel2Result(reel1[getRandomInt(8)])
    updateReel3Result(reel1[getRandomInt(8)])
    //checkWinnings()
  }

  const checkWinnings = () =>{

    
    if (reel1Result==reel2Result && reel1Result==reel3Result){
      if(reel1Result==cherry){
        updateMessage("You win 50 coins!")
        return updateCoins(coins+50) }
      if(reel1Result==apple){
        updateMessage("You win 20 coins!")
        return updateCoins(coins+20)}
      if(reel1Result==banana){
        updateMessage("You win 15 coins!")
        return updateCoins(coins+15)}
      if(reel1Result==lemon){
        updateMessage("You win 3 coins!")
        return updateCoins(coins+3)}
    }

    if (reel1Result==reel2Result){
      if(reel1Result==cherry){
        updateMessage("You win 40 coins!")
        return updateCoins(coins+40)}
      if(reel1Result==apple){
        updateMessage("You win 10 coins!")
        return updateCoins(coins+10)}
      if(reel1Result==banana){
        updateMessage("You win 5 coins!")
        return updateCoins(coins+5)}   
     
    }
    if (reel2Result==reel3Result){
      if(reel2Result==cherry){
        updateMessage("You win 40 coins!")
        return updateCoins(coins+40)}
      if(reel2Result==apple){
        updateMessage("You win 10 coins!")
        return updateCoins(coins+10)}
      if(reel2Result==banana){
        updateMessage("You win 5 coins!")
        return updateCoins(coins+5)}        
    }

    else {updateMessage("")}

  }

  useEffect(()=> {
    checkWinnings()
   //getArticles()
  }, [reel1Result,reel2Result,reel3Result])
  return (
    <div className='question'>
        <h1><img src={coinsImage} style={{width:"50px"}}></img>{coins} <button onClick={spin}>Spin</button></h1>
        <img style={style} alt="reel1" src={reel1Result}></img>
        <img style={style} alt="reel2" src={reel2Result}></img>
        <img style={style} alt="reel3" src={reel3Result}></img>
        
        <h1>{message}</h1>
    </div>

  )
}

export default Question4