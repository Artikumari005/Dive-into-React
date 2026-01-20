import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import logo from './react-logo.png';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
 <TemporaryName />
)

function Header(){
   return (
<header className='header'>
       <img src={logo} alt="logo"  className='logo'/>
       <nav>
         <ul className='nav-list'>
            <li>Home</li>
            <li>Blog</li>
            <li>LogIn</li> 
         </ul>
       </nav>
   </header>
   )
}

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
