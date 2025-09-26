// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../customHooks/fetchHook";
// import Child2 from "./Child2";
import { lazy,Suspense } from "react";

const Child2lazy = lazy(()=>import("./Child2"))



const Product = () => {
  //   const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     axios
  //       .get(`https://fakestoreapi.com/products/${id}`)
  //       .then((res) => setData(res.data))
  //       .catch((er) => console.log(er));
  //   }, []);

  const data = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <div>
      Product detailed page
      <button onClick={() => navigate(-1)}>Back</button>
      {data ? (
        <>
          <p>{data?.title}</p>
          <img src={data.image} />
          <p>{data.description}</p>
          <p>{data.category}</p>
          <p>{data.price}</p>
        </>
      ) : (
        <h5>Loading...</h5>
      )}
      {/* <Child2/> */}

    <Suspense fallback={<></>}>
      <Child2lazy/>
    </Suspense>
    </div>
  );
};

export default Product;
