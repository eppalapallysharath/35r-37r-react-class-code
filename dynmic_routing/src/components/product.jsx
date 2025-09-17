import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { productData } from './Homepage'

const Product = () => {
    const {productID} = useParams()
    const {state} = useLocation()
    console.log(state)
    // const [state, setState] = useState({})
    // useEffect(()=>{
    //     const findProduct = productData.find((value)=> value.id == productID )
    //     setState(findProduct)
    // },[])
  return (
    <div>
        <p>Product Id {productID}</p>
        {/* <p>title {state.title}</p>
        <img src={state.image} alt={state.image}/> */}
        <p>{state.title}</p>
        <p>{state.category}</p>
    </div>
  )
}

export default Product