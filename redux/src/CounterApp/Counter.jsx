import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementAction, decrementAction } from '../Redux/actions/counterActions'
import ResetCount from './ResetCount'

const Counter = () => {

  const dispatch = useDispatch()

  const handleIncrement = ()=>{
    dispatch(incrementAction())
  }
  const handleDecrement = ()=>{
     dispatch(decrementAction())
  }

  return (
    <div>
      <h5>Counter app</h5>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <ResetCount/>
    </div>
  )
}

export default Counter