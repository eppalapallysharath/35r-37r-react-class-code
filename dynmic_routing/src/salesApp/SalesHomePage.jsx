import React from 'react'
import { Outlet } from 'react-router-dom'
const SalesHomePage = () => {
  return (
    <div>SalesHomePage
        <p>this your sales page where you will see about sales</p>
        <Outlet/>
    </div>
  )
}

export default SalesHomePage