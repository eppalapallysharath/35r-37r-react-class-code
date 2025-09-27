import React from 'react'
import { useSelector } from 'react-redux'

const ProductCard = () => {
    const products = useSelector(state=> state.product.products)
  return (
    <div>ProductCard
        {products?.map(item=><div key={item.id}>
            <img src={item.thumbnail} alt={item.thumbnail}/>
            <p>{item.title}</p>
        </div>)}
    </div>
  )
}

export default ProductCard