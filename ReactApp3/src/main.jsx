import { StrictMode } from 'react'
//import { Fragment  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Page />
)

function Page(){
  return (
    //<Fragment>
    <>
      <h1>I am ecxited to learn React.</h1>
      <ul>
        <li className='points'>Due to reusable components.</li>
        <li className='points'>Due to its large community support.</li>
        <li className='points'>Due to its flexibility nad scalbility.</li>
      </ul>
      
    </>
  )
}