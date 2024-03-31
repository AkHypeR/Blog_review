import { useEffect, useState } from 'react'
import  { login, logout } from './store/authSlice'
import {Outlet} from  'react-router-dom'
import {Header,Footer} from './components/index'
import {useDispatch} from 'react-redux'
import authservice from './appwrite/auth'


function App() {
 
  const dispatch=useDispatch()
  const [loading, setLoading ] = useState(true)
  
  useEffect(()=>{
    authservice.getUser()
    .then((userdata)=>{
      if (userdata) {
        dispatch(login({userdata}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false));
   
  },[])

  return !loading?(
    <div className=' bg-sky-500 min-h-screen flex flex-wrap content-between' >
     <Header/>
     ToDO:<Outlet/>
     <Footer/>
    </div>
  ):null //we can put a loading syntex here 
}

export default App
