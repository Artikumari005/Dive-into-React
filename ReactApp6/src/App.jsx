
import './App.css'
import jokeData  from './jokeData'
import Joke from './Joke'

function App() {
  /**challenge: manually turns a string array into array of JSX elements by surrounding each element with h2 elmenetnt 
   * */
 /* const array =[
    <h2>item2</h2>,
     <h2>item3</h2>,
      <h2>item4</h2>,
       <h2>item5</h2>,
        <h2>item6</h2>
  ]*/


        /*make the jokes project using map <function></function>*/

        const jokeElement = jokeData.map((joke)=>{
          return <Joke setup={joke.setup} punchline ={joke.punchline}/>
          
        })
  return (
    <main>
     
      {jokeElement}
    </main>
  )
}

export default App
