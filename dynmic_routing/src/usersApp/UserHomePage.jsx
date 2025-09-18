import React from 'react'
import { Outlet } from 'react-router-dom'

const UserHomePage = () => {
  return (
    <div>
       <p>UserHomePage</p>
       <Outlet/> 
    </div>
  )
}

export default UserHomePage