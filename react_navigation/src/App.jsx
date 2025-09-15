import React from 'react'
import ContactUs from './pages/ContactUs'
import Menu from "./pages/Menu"
import Homepage from './pages/Homepage'
import PageNotFound from "./pages/PageNotFound"
import Service from "./pages/Service"
import {Routes, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <div>
     <h1> This main Page </h1>
     <div>
      {/* <Homepage/>
      <Menu/>
      <Service/>
      <ContactUs/>
      <PageNotFound/> */}
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/service"><li>Service</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/menu"><li>Menu</li></Link>
        <Link to="/sharath"><li>sharath</li></Link>
      </ul>

      </div>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        {/* <Route path='/contact' element={<h1>hello im sharath contact me at page</h1>}/> */}
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path='/menu' element={<Menu/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      

    </div>
  )
}

export default App