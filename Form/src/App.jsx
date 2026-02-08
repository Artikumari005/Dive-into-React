import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <section>
      <h1>SignUp form</h1>
      <form>
        <label htmlFor='email'>Email:</label>
        <input  id='email'   type='email' name='email' placeholder='zennie@gmail.com'></input>
        <br></br>
        <label htmlFor='password'> Password:</label>
        <input id='password' type='password' name='email' ></input>
        <br></br>
        <button>Submit</button>
      </form>
    </section>
  )
 
}

export default App
