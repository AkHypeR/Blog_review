import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'


function AuthLayout({childern,authentication =true}) {
    const [loader ,setLoader] = useState(true)
    const navigate=useNavigate()
    const authstatus=useSelector((state)=>state.auth.status)
    useEffect(()=>{
        if (authentication&&authstatus!==authentication) {
            navigate('/login')
        } 
        else if (!authentication&&authstatus!==authentication) {
            navigate('/')
        }
        setLoader(false)

    },[authstatus,navigate,loader])

  return loader?<h2>Loading....</h2>: <>{childern}</>
}

export default AuthLayout