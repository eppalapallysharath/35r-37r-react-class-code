import React, { useEffect, useState } from "react";
import img1 from "./assets/Photo by Amin RK.jpg";
import img2 from "./assets/Photo by Brooke Cagle.jpg";
import img3 from "./assets/Photo by Chris Zhang.jpg";
import img4 from "./assets/Photo by Daniil Lobachev.jpg";
import img5 from "./assets/Photo by Franco Figueroa.jpg";
import img6 from "./assets/Photo by Hayes Potter.jpg";
import img7 from "./assets/Photo by Joe Gardner.jpg";
import img8 from "./assets/Photo by Matteo Minoglio.jpg";
import img9 from "./assets/Photo by Peter Idowu.jpg";
import axios from "axios";
import "./App.css"

const App = () => {
  const [data, setData] = useState([]);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-container">
      {data.map((item, i) => (
        <div className="card-container">
          <div className="card-image-container">
            <img src={images[i]} width={350} height={250} />
          </div>
          <div>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>Company name {item.company.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
