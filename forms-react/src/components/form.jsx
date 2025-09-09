import React, { useState } from 'react'

const Form = () => {
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState({})
    const [city, setCity] = useState("")

    const handleFullName = (event)=>{
        setFullName(event.target.value)
    }
    const handleUsername = (event) =>{
        setUserName(event.target.value)
    } 

    const handleCity = (event) =>{
        setCity(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setUser({
            fullName,
            userName,
            password,
            city
        })
        setFullName("")
        setUserName("")
        setPassword("")
        setCity("")
    }
    // console.log(user)
  return (
  <form onSubmit={handleSubmit}>
    <fieldset>
    <legend> Registration Form  </legend>
    <label>Full Name </label>
    <input type='text' name="fullName" onChange={(event)=>handleFullName(event)} value={fullName}/>
    <br/>
    <label>Username </label>
    <input type='text' name='username'onChange={(event)=>handleUsername(event)} value={userName}/>
    <br/>
    <label> select city</label> 
    <select onChange={handleCity} value={city}>
        <option value="">please select</option>
        <option value="hyd">Hyderabad</option>
        <option value="bng">Bangalore</option>
        <option value="viz">Vizag</option>
    </select>
    <br/>
    <label>password </label>
    <input type='password' name='password' onChange={(event)=>setPassword(event.target.value)}value={password}/>
    <br/>
    <button>submit form</button>
    </fieldset>
    <div>
        <p>username {user.userName}</p>
        <p>full name {user.fullName}</p>
        <p>city {user.city}</p>
        <p>password {user.password}</p>
    </div>
  </form>
  )
}

export default Form