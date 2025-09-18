import React from 'react'
import img from "./assets/bridge.jpg"
import grayscaleimg from "./assets/grayscale.jpg"
const grayimage = new URL("./assets/grayscale.jpg", import.meta.url).href 

const App = () => {
  return (
    <div>App
      {/* 1st way of importing image using import method */}
      {/* <img src={img} alt='bridge.jpg' />
      <img src={grayscaleimg} alt='grayscale image' /> */}

      {/* 2nd way of importing images from public folder */}
      <img src="/landscape.jpg" alt='landscape image' />
      <img src="/ants_collision.gif" alt='landscape image' height={200}  width={200}/>
      
      {/*3rd way importing using url module/require*/}
      <img src={grayimage} alt={grayimage} />
        
    </div>
  )
}

export default App