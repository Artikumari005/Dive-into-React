import { useState } from 'react'
import reactLogo from './assets/react.svg'
import img1 from './images/mount-fauji.jpg'
import img2 from './images/norway.jpg'
import './App.css'
import Card from './Card'
function App() {
 return(
  <>
<div className='card-container'>
     <Card 
          img={img1}
          name="Mount Fuji"
          phone="(212) 555-1234"
          email="fuji@japan.com"
        />

        <Card 
          img={img2}
          name="norway"
          phone="(212) 555-5678"
          email="norway@nor.com"
        />

</div>

  </>
  
 )
  
}

export default App
