import React from 'react'
import AddToCard from './AddToCard'

const ProductCard = ({item}) => {
  return (
    <div>ProductCard
        <img src={item.image} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h4>{item.category}</h4>
        <p>Rating {item.rating.rate} </p>
        <p>count {item.rating.count}</p>
        <AddToCard price={item.price}/>
    </div>
  )
}

export default ProductCard