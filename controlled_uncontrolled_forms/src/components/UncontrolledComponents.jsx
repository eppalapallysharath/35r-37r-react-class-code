import React, { useRef, useState } from 'react'

const UncontrolledComponents = () => {
    const inputRef = useRef("")
    const [data, setData] = useState("")
    const [error, setError] = useState("")
    const handleSubmit= (e)=>{
        e.preventDefault()
        const {value} = inputRef.current
        let isNumber = false
        for(let i of value){
            if( i > 0 || i < 9 ){
                isNumber = true
            }else{
                isNumber = false
                // setData()
            }
        }
        if(isNumber){
            alert("username contains numbers please use alphabets only")
        }else{
            setData(value)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' name="username" ref={inputRef}/>
        <button>submit</button>
        <p>username {data}</p>
    </form>
  )
}

export default UncontrolledComponents