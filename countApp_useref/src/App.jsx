import React, { useRef, useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const refCount = useRef(0)
  const h1ref = useRef("")
  const inputRef = useRef("")
  const renderCountRef = useRef(0)
  // console.log(h1ref)
  const handleInc = () =>{
    // refCount.current += 1 //current + 1
    // // h1ref.current.textContent= "hi"
    // h1ref.current.innerText= "hi"
    // h1ref.current.style.color ="red"
    // console.log(inputRef.current.value)
    // // setCount(count +1) //count + 1
    // console.log( "ref", refCount)
    // console.log( "useState",count)
    // setCount(count+1)
    refCount.current+=1
    console.log(refCount.current)
  }
  console.log("hi")
  useEffect(()=>{
      // inputRef.current.focus()
      // inputRef.current.value="hell how are you"
      // setTimeout(()=>h1ref.current.innerText="hello world" ,2000)
      // setCount("hi")
      renderCountRef.current+=1
      console.log("rendered count", renderCountRef.current)
    })
  




  return (
    <div>App
      <button onClick={handleInc} > increment count</button>
     {/* <p>ref{refCount.current}</p>  */}
      {/* <p ref={h1ref} > click me</p> */}
      {/* <p>usestate {count}</p> */}
      {/* <input type='text' ref={inputRef} /> */}

    </div>
  )
}

export default App