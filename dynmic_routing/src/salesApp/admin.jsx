import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div>hi this Admin
        <Outlet/>
    </div>
  )
}

export default Admin