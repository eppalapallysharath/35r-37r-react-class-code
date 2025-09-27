export const fetchProductsAction = () => {
  return async (dispatch) => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => dispatch({type:"fetchProducts", payload:data}))
      .catch(err=>console.log(err))
  };
};
