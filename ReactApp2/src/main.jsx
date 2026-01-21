import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import logo from './react-logo.png';
import header  from './Header';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
 <TemporaryName />
)



function TemporaryName(){
   return   (
  <>
    <Header/>
     <main>
    <h1 className='header'>Fun Facts about React</h1>

<ul>
   <li className='facts'>Was first released in 2000</li>
   <li className='facts'>Was originally created by Jordon Walke</li>
   <li className='facts'>Has well over 100k stars on Github</li>
   <li className='facts'>Is maintained by Meta</li>
   <li className='facts'>Power thousands of enterprise app, including mobile Apps</li>
</ul>
  </main>
  </>
   )
}
