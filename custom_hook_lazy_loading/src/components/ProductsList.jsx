// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import { lazy, Suspense } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useFetch} from "../customHooks/fetchHook"
// import Child1 from './Child1'
const Child1Lazy = lazy(()=>import("./Child1")) 
const ProductsList = () => {
    // const [data, setData] = useState([])
    const navigate = useNavigate()
    // useEffect(
    //     ()=>{
    //         axios.get("https://fakestoreapi.com/products").then(res => setData(res.data)).catch(err=>console.log(err))
    //     },
    //     []
    // )
    // console.log(data)
    const data = useFetch("https://fakestoreapi.com/products")
    const handleNavigate = (id)=>{
        navigate("/product/"+id)
    }
    console.log(data)
  return (
    <div>
        <Link to="/service">Service page</Link>
        ProductsList
        
       {data ? data.map(value=> <div onClick={()=>handleNavigate(value.id)} key={value.id}>
        <img src={value.image} alt={value.image} height={150} width={200} lazy="loading"/>
        <p>{value.title}</p>
       </div>): <h5>Loading</h5>}
       
      <Suspense fallback={<></>}>
        <Child1Lazy/>
      </Suspense>
    </div>
  )
}

export default ProductsList