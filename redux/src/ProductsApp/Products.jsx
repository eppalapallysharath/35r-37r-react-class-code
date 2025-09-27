import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProductsAction } from '../Redux/actions/productActions'
import ProductCard from './ProductCard'
const Products = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProductsAction())
    },[])
  return (
    <div>Products
        <ProductCard/>
    </div>
  )
}

export default Products