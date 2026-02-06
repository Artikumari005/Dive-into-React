
import React from 'react'
import './App.css'
import './index.css'

function App() {
  const [myFavoriteThings , setMyFavoriteThings]=React.useState([])
const allMyFavoriteThings= ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
        const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing} </p>)

        function addFavoriteThing(){
          setMyFavoriteThings(preThings => [
            ...preThings , allMyFavoriteThings[preThings.length]
          ])
        }
  return (
   <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">  {thingsElements} </section>
        </main>
    )
  
}

export default App
