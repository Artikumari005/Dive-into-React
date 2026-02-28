import { useState , useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Header } from './components'
import { Footer } from './components'
import './index.css'
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
  return !loading? (
    <div className='min-h-screen flex flex-wrap content-between bg-amber-600'>
      <div className='w-full bg-amber-400'>
        <Header/>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
