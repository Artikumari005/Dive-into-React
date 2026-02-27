import { useState , useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
function App() {
  const [loading , setLoading] =useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  }, [])
  if(loading){
    return(
    <h1 className='min-h-screen'>MegaBlog</h1>
  )
  }
}

export default App
