import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //function handleSubmit(event){
  //  event.preventDefault()
  // const formEl = event.currentTarget
  // const formData = new FormData(formEl)
  // const email = formData.get("email")
  // //gather the info from the form and submit it to backend
  // formEl.reset()}

function signUp(FormData){
  const email = FormData.get("email")
  const genderStatus = FormData.get("genderStatus")
  console.log(email, genderStatus)
}

  
  return (
    
   //<section>
   //  <h1>SignUp form</h1>
   //  <form  action="phpfile.php" onSubmit={handleSubmit} method='post'>
   //    <label htmlFor='email'>Email:</label>
   //    <input  id='email'   type='email' name='email' placeholder='zennie@gmail.com'></input>
   //    <br></br>
   //    <label htmlFor='password'> Password:</label>
   //    <input id='password' type='password' name='email' ></input>
   //    <br></br>
   //    <button>Submit</button>
   //  </form>
   //</section>



   //instead of using onSubmit funciton use action 
   <section>
      <h1>SignUp form</h1>
      <form  action={signUp}>
        <label htmlFor='email'>Email:</label>
        <input  id='email'   type='email' name='email' placeholder='zennie@gmail.com'></input>
        <br></br>
        <label htmlFor='password'> Password:</label>
        <input id='password' type='password' name='email' ></input>
        <br></br>
        <label htmlFor='description'>Description</label>
        <textarea id='description' name='description'></textarea>
        <br></br>
        <fieldset>
          <legend>Gender:</legend>
       <label>
         <input type='radio' name='genderStatus' value="female"/>Female
       </label>
        <label>
           <input type='radio' name='genderStatus' value="Male"/>Male
        </label>
        <label>
            <input type='radio' name='genderStatus' value="other"/>Other
        </label>
        </fieldset>
        <button>Submit</button>
      </form>
    </section>
  )
 
}

export default App
