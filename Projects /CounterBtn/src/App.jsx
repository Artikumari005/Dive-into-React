
import React from "react"
import './App.css'
import Count from "./Count"


/*function App() {
 const [text , setText]= React.useState("hello")
 function handleClick(){
  setText("Hiii")
 }
 return(
  <main>
    <h1>state is import</h1>
    <button onClick={handleClick} >{text}</button>
  </main>
 )
  
} */
function App(){
  
  const[count , setCount]= React.useState(0)
  function handleMinus(){
    setCount(preCount=>preCount-1)
  }
  function handlePlus(){
    setCount(preCount => preCount+1)
  }
  return(
    <main className="container">
      <h1>How many times Zennie say "state" in this section?</h1>
      <div className="counter">
        <button onClick={handleMinus} className="minus" aria-label="Decrese count">-</button>
        <Count
        number={count}/>
        <button onClick={ handlePlus} className="plus" aria-label="Increase count">+</button>
      </div>
     
    </main>
    
  )
}

export default App
