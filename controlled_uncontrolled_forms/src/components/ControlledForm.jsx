import React, { useState } from 'react'

const ControlledForm = () => {
    const [username, setUsername] = useState("")
    const [data, setData] = useState("")
    const [error, setError] = useState("")
    

    const handleChange = (e)=>{
        const {value} = e.target 
        for (const i of value) {
            if( i > 0 || i < 9){
                console.log("number", i)
                setError("accepts only alphabets no numbers")
            }else{
                console.log("alphabets")
                const input  = username + i
               setUsername(input)
               setError("")
            }
        }

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("clicked")
        setData(username)

    }
  return (

        <form onSubmit={handleSubmit}>
            <input  type='text' name="username" onChange={(e)=>handleChange(e)} value={username}/>
            <p>{error}</p>
            <button>submit</button>
            <p>username {data}</p>
        </form>

  )
}

export default ControlledForm