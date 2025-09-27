import React from 'react'
import { useDispatch } from 'react-redux'
import { resetAction } from '../Redux/actions/counterActions'
const ResetCount = () => {
    const dispatch = useDispatch()
    const handleReset = ()=>{
        dispatch(resetAction())
    }
  return (
    <div>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default ResetCount