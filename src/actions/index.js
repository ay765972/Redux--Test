import axios from "axios";

export function loadtext(){
    return(dispatch)=>{ 
        return axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((json) => {
            dispatch(changetext(json));
        })
    }
}

export function changetext(json){
    return{
        type:"CHANGE_JSON",
        json:json
    }
}