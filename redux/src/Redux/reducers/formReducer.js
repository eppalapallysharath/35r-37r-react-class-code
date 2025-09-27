const initialState = {
     input:"",
    formData:[]
}


export const formReducer = (state = initialState, action )=>{
    switch (action.type) {
         case 'input-text':
            return {...state, input:action.payload}
        case 'submit':
            return {...state, formData:[...state.formData, action.payload], input:""}
        default:
            return state
    }
}