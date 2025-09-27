const initialState = {
    products:[]
}


export const productReducer = (state = initialState, action )=>{
    switch (action.type) {
         case 'fetchProducts':
            return {...state, products:action.payload.products}
        default:
            return state
    }
}