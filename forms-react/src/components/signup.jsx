import React, { useState } from 'react'

const Signup = () => {
    const user = localStorage.getItem("users") || []
    const [signupData, setSignupData] = useState({
        fullname:"",
        username:"",
        email:"",
        password:"",
        image:""
    })
    const [userData, setUserData] = useState({})
    const handleChange=(e)=>{
       const {name, value, files} = e.target;
        setSignupData({ ...signupData,[name]: name=="image"? files[0]:value })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUserData(signupData)
        setSignupData({ fullname:"",
        username:"",
        email:"",
        password:"",
        image:""})

    }
 

  return (<div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Full Name</label>
            <input type='text' name='fullname' onChange={(event)=>handleChange(event)} value={signupData.fullname}/>
        </div>
         <div>
            <label>User Name</label>
            <input type='text' name='username' onChange={(event)=>handleChange(event)} value={signupData.username}/>
        </div>
         {/* <div>
            <label>image</label>
            <input type='file' name="image" onChange={(event)=>handleChange(event)} value={signupData.image.filename}/>
        </div> */}
         <div>
            <label>Email</label>
            <input type='email' name='email' onChange={(event)=>handleChange(event)} value={signupData.email}/>
        </div>
         <div>
            <label>Password</label>
            <input type='password' name='password' onChange={(event)=>handleChange(event)} value={signupData.password}/>
        </div>
       
        <div>
            <button> Signup </button>
        </div>
    </form>
    <div>
        {JSON.stringify(userData)}
    </div>
    </div>
  )
}

export default Signup