import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'



function App() {
  
   const firstName ="Aarti"
    const lastName= "Kushwaha"
    const hours = new Date().getHours()
    let timeOfDay

    if(hours<12){
      timeOfDay="Morning"
    }
    else if(hours >= 12 && hours <17){
      timeOfDay =  "Afternoon"
    }
    else if( hours >= 17 && hours <20){
      timeOfDay = " evening"
    }
    else{
      timeOfDay = "night"
    }
    return (
      <>
    <h1>Hiii {firstName} {lastName}</h1>
      <h2>Good Night {firstName} {lastName} </h2> 
      
      </>
      
    ) 
}

export default App