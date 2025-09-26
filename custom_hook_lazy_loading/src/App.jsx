import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import ProductsList from './components/ProductsList'
// import Product from './components/Product'

const ProductListPage = lazy(() => import("./components/ProductsList"));
const ProductPage = lazy(() => import("./components/Product"));
const ServicePage = lazy(()=>import("./components/Services"))
const App = () => {
  return (
    <Suspense fallback={<h6>Loading....</h6>}>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route  path="/service" element={<ServicePage/>}/>
      </Routes>
    </Suspense>
  );
};

export default App;
