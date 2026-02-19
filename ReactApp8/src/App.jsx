import { useState } from 'react'
import WindowTracker from './WindowTracker'
function App() {
  const [show , setShow]= useState(true)
  function toggle(){
    setShow(preShow =>!preShow)
  }
 return(
  <>
  <button onClick={toggle}>
    toggle window size
  </button>
  {show && <WindowTracker/>}
  </>
 )
}

export default App
