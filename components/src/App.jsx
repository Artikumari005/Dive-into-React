import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from "./components/Navbar"
import Main from "./components/Main"
import './App.css'

function App() {
  return(
    <>
    <div className='card'>
      <Nav></Nav>
    <Main></Main>
    </div>
    </>
    
  )
}

export default App
