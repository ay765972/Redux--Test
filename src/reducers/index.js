let defaultState={
    json:"Hello from reducers"
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_JSON"){
        return{
            ...state,
            json:action.json 
        }
    } else{
        return{
            ...state
        }       
    }
}

export default mainReducer;