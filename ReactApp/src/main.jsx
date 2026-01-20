import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createElement }  from 'react'
import './index.css'
import App from './App.jsx'

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/
const root = createRoot(document.getElementById('root'))
const reactElement = <h1>hello</h1>
root.render(
  //createElement("h1", null, "hello createElement!")
  reactElement
)
