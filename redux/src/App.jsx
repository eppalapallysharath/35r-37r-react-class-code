import React from 'react'
import Counter from './CounterApp/Counter'
import { useSelector } from 'react-redux'
import Form from './FormApp/Form'
import Products from './ProductsApp/Products'
const App = () => {
  const formsData = useSelector(state=>state.forms.formData)
  const count = useSelector(state => state.counter.count)
  return (
    <div>App
      <p>counter value {count}</p>
      <Counter/>
      <Form/>
      <p> Form submission details </p>
      {formsData.map((item,index)=> { return<li key={index}>{item}</li>})}
      <Products/>
    </div>
  )
}

export default App