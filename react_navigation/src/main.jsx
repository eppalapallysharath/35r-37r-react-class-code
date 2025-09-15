import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import MainApp from './App.jsx'
import {BrowserRouter as Router} from "react-router-dom"
import App from './App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <Router>
      {/* <MainApp /> */}
      <App/>
    </Router>
    {/* </BrowserRouter> */}
  </StrictMode>,
)
