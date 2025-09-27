export const inputAction = (data)=>{
    return {
        type: "input-text",
        payload:data
    }
}

export const formSubmitAction = (data)=>{
    return{
        type:"submit",
        payload:data
    }
}