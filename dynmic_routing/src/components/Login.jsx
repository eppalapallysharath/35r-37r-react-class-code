import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {
  // const {state} = useLocation()
  // console.log(useLocation())
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate("/")
  }


  const backbutton=()=>{
    navigate(-1)
  }
  return (
    <div>Login
      {/* <h1>name {state.name}</h1> */}
      <div>
        <button onClick={handleClick}>home page</button>
        <button onClick={backbutton}>back</button>
      </div>
    </div>
  )
}

export default Login